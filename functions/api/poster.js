
export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);

  const title = (url.searchParams.get("title") || "").trim();
  const type = url.searchParams.get("type") === "tv"
    ? "tv"
    : "movie";

  if (!title || title.length > 120) {
    return Response.json(
      { error: "Invalid title" },
      { status: 400 }
    );
  }

  if (!env.TMDB_TOKEN) {
    return Response.json(
      { error: "TMDB_TOKEN is missing" },
      { status: 503 }
    );
  }

  const params = new URLSearchParams({
    query: title,
    language: "en-US",
    include_adult: "false"
  });

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/${type}?${params}`,
      {
        headers: {
          Authorization: `Bearer ${env.TMDB_TOKEN}`,
          Accept: "application/json"
        }
      }
    );

    if (!response.ok) {
      return Response.json(
        { error: "TMDB request failed" },
        { status: 502 }
      );
    }

    const data = await response.json();
    const result = data.results?.find(
      item => item.poster_path
    );

    return Response.json({
      title: result?.title || result?.name || title,
      poster: result?.poster_path
        ? `https://image.tmdb.org/t/p/w342${result.poster_path}`
        : null
    });

  } catch (error) {
    return Response.json(
      { error: "Unable to retrieve poster" },
      { status: 500 }
    );
  }
}
