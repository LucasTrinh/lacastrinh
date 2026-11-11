functions/api/poster.js

export async function onRequestGet(context) {
  const { request, env } = context;

  const url = new URL(request.url);
  const title = (url.searchParams.get("title") || "").trim();
  const type = url.searchParams.get("type") === "tv" ? "tv" : "movie";
  const year = (url.searchParams.get("year") || "").trim();

  if (!title || title.length > 120 || (year && !/^\d{4}$/.test(year))) {
    return Response.json(
      { error: "Invalid movie or TV title" },
      { status: 400 }
    );
  }

  if (!env.TMDB_TOKEN) {
    return Response.json(
      { error: "TMDB token is not configured" },
      { status: 503 }
    );
  }

  const params = new URLSearchParams({
    query: title,
    language: "en-US",
    include_adult: "false"
  });

  if (year) {
    params.set(type === "tv" ? "first_air_date_year" : "year", year);
  }

  const endpoint =
    `https://api.themoviedb.org/3/search/${type}?${params}`;

  try {
    const response = await fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${env.TMDB_TOKEN}`,
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      return Response.json(
        { error: "Poster service unavailable" },
        { status: 502 }
      );
    }

    const data = await response.json();
    const result = data.results?.find(item => item.poster_path);

    return Response.json(
      {
        poster: result
          ? `https://image.tmdb.org/t/p/w342${result.poster_path}`
          : null,
        title: result?.title || result?.name || title
      },
      {
        headers: {
          "Cache-Control": "public, max-age=3600, s-maxage=86400"
        }
      }
    );
  } catch (error) {
    return Response.json(
      { error: "Unable to retrieve poster" },
      { status: 502 }
    );
  }
}
