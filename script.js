
"use strict";

// -----------------------------------------
// LUCAS TRINH — PERSONAL WEBSITE
// -----------------------------------------

const visitedCountries = [
  ["Australia","AUS"],["Malaysia","MYS"],["Lebanon","LBN"],
  ["Kazakhstan","KAZ"],["Jordan","JOR"],["Oman","OMN"],
  ["Israel","ISR"],["United Arab Emirates","ARE"],
  ["South Korea","KOR"],["Bahrain","BHR"],
  ["Austria","AUT"],["Georgia","GEO"],["Iceland","ISL"],
  ["Estonia","EST"],["Greece","GRC"],["Italy","ITA"],
  ["Hungary","HUN"],["France","FRA"],["Turkey","TUR"],
  ["Finland","FIN"],["United Kingdom","GBR"],
  ["Czech Republic","CZE"],["Taiwan","TWN"],
  ["China (Qingdao)","CHN"],["Sri Lanka","LKA"],
  ["Japan","JPN"],["Poland","POL"],["Thailand","THA"]
];

const wishlistCountries = [
  ["Singapore","SGP"],["Maldives","MDV"],
  ["Germany","DEU"],["Norway","NOR"],
  ["Nepal","NPL"],["Mexico","MEX"],["Peru","PER"]
];

// Curated favourites and watchlist.
// Statuses are based on Lucas's supplied checklist.
const movies = [
  {title:"Pride & Prejudice",year:"2005",category:"film",status:"Favourite #1",description:"The romance, sophisticated banter, ambience and countryside make this my favourite film.",color:"#345b5e"},
  {title:"Good Will Hunting",year:"1997",category:"film",status:"Top 3",description:"One of my all-time favourites. Definitely worth rewatching.",color:"#415b83"},
  {title:"The Truman Show",year:"1998",category:"film",status:"Top 3",description:"One of my favourite films of all time.",color:"#27677c"},
  {title:"Forrest Gump",year:"1994",category:"film",status:"Favourite",description:"A film I keep among my all-time favourites.",color:"#48687e"},
  {title:"The Pursuit of Happyness",year:"2006",category:"film",status:"Favourite",description:"One of my favourite motivational films.",color:"#3c5873"},
  {title:"Whiplash",year:"2014",category:"film",status:"Rewatch",description:"On my list of films to rewatch.",color:"#713e36"},
  {title:"Dead Poets Society",year:"1989",category:"film",status:"Watched",description:"A memorable film from my watched collection.",color:"#5e4e39"},
  {title:"Interstellar",year:"2014",category:"film",status:"Watched",description:"Part of my watched film collection.",color:"#34435f"},
  {title:"Shutter Island",year:"2010",category:"film",status:"Watched",description:"A standout title from my film list.",color:"#3d5064"},
  {title:"The Age of Adaline",year:"2015",category:"film",status:"Watched",description:"A romance I enjoyed.",color:"#6a4e65"},
  {title:"The Intern",year:"2015",category:"film",status:"Watchlist",description:"Still on my list to watch.",color:"#4b6471"},
  {title:"The Shawshank Redemption",year:"1994",category:"film",status:"Watchlist",description:"A classic I still want to watch.",color:"#4c526a"},
  {title:"Business Proposal",year:"2022",category:"kdrama",status:"Favourite",description:"One of my all-time favourite K-dramas.",color:"#724b84"},
  {title:"Bloodhounds",year:"2023",category:"kdrama",status:"Favourite",description:"OH MY DAYS. SO GOOD.",color:"#8b3549"},
  {title:"Twenty-Five Twenty-One",year:"2022",category:"kdrama",status:"Favourite",description:"One of my favourite Korean dramas.",color:"#4468a0"},
  {title:"Queen of Tears",year:"2024",category:"kdrama",status:"Favourite",description:"One of my all-time favourite K-dramas.",color:"#785079"},
  {title:"Crash Landing on You",year:"2019",category:"kdrama",status:"Watched",description:"From my completed K-drama list.",color:"#485d7e"},
  {title:"Taxi Driver",year:"2021",category:"kdrama",status:"Watched",description:"From my completed K-drama list.",color:"#4d5269"},
  {title:"When Life Gives You Tangerines",year:"2025",category:"kdrama",status:"Watchlist",description:"A K-drama on my watchlist.",color:"#886246"},
  {title:"Modern Family",year:"2009",category:"tv",status:"Favourite",description:"One of my favourite TV shows.",color:"#586a84"},
  {title:"Brooklyn Nine-Nine",year:"2013",category:"tv",status:"Favourite",description:"One of my favourite comedy series.",color:"#395d83"},
  {title:"Breaking Bad",year:"2008",category:"tv",status:"Favourite",description:"One of my all-time favourite series.",color:"#42614b"},
  {title:"Invincible",year:"2021",category:"tv",status:"Favourite",description:"One of my favourite animated series.",color:"#455c9c"},
  {title:"Young Sheldon",year:"2017",category:"tv",status:"Favourite",description:"One of my favourite TV shows.",color:"#67788c"},
  {title:"Silo",year:"2023",category:"tv",status:"Watchlist",description:"A series I want to watch.",color:"#4b5467"},
  {title:"The Avengers",year:"2012",category:"marvel",status:"Watched",description:"Part of the Marvel collection I love.",color:"#3c5791"},
  {title:"Avengers: Infinity War",year:"2018",category:"marvel",status:"Watched",description:"Part of my Marvel marathon.",color:"#56488d"},
  {title:"Avengers: Endgame",year:"2019",category:"marvel",status:"Watched",description:"Part of my Marvel favourites.",color:"#4c457b"},
  {title:"Spider-Man: No Way Home",year:"2021",category:"marvel",status:"Watched",description:"Part of my completed Marvel collection.",color:"#863d4a"},
  {title:"Guardians of the Galaxy Vol. 3",year:"2023",category:"marvel",status:"Watched",description:"Part of my completed Marvel collection.",color:"#4a4d91"},
  {title:"The Fantastic Four: First Steps",year:"2025",category:"marvel",status:"Watched",description:"From my completed Marvel checklist.",color:"#3a6893"},
  {title:"Avengers: Doomsday",year:"Upcoming",category:"marvel",status:"Watchlist",description:"One of the Marvel films I want to see.",color:"#554866"}
];

// -----------------------------------------
// SCROLL ANIMATIONS
// -----------------------------------------
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
} else {
  document.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
}

const progress = document.getElementById("progress");
const floatingNav = document.getElementById("floatingNav");

function updateScroll() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (max > 0 ? window.scrollY / max * 100 : 0) + "%";
  floatingNav.classList.toggle("visible", window.scrollY > 500);
}
window.addEventListener("scroll", updateScroll, { passive: true });
updateScroll();

const cursorGlow = document.getElementById("cursorGlow");
if (!reducedMotion && window.matchMedia("(pointer:fine)").matches) {
  window.addEventListener("pointermove", event => {
    cursorGlow.style.left = event.clientX + "px";
    cursorGlow.style.top = event.clientY + "px";
  }, { passive: true });
} else {
  cursorGlow.style.display = "none";
}

// -----------------------------------------
// CARD TILT EFFECT
// -----------------------------------------
if (!reducedMotion && window.matchMedia("(pointer:fine)").matches) {
  document.querySelectorAll(".tilt-card").forEach(card => {
    card.addEventListener("pointermove", event => {
      const r = card.getBoundingClientRect();
      const x = (event.clientX - r.left) / r.width - .5;
      const y = (event.clientY - r.top) / r.height - .5;
      card.style.transform =
        `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-4px)`;
    });
    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

// -----------------------------------------
// TRAVEL LIST AND MAP
// -----------------------------------------
const countryList = document.getElementById("countryList");

function renderCountries(type) {
  const countries = type === "visited" ? visitedCountries : wishlistCountries;
  countryList.replaceChildren();

  countries.forEach(([name]) => {
    const chip = document.createElement("span");
    chip.className = "country-chip" + (type === "wishlist" ? " wishlist" : "");
    chip.textContent = name;
    countryList.appendChild(chip);
  });
}

renderCountries("visited");

document.querySelectorAll("[data-travel-filter]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-travel-filter]").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    renderCountries(button.dataset.travelFilter);
  });
});

// Map data provided by World Atlas / Natural Earth.
// If the external map cannot load, the country list remains available.
async function loadWorldMap() {
  const container = document.getElementById("worldMap");

  try {
    const [atlasModule, topoModule] = await Promise.all([
      import("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json", { with: { type: "json" } }),
      import("https://cdn.jsdelivr.net/npm/topojson-client@3/+esm")
    ]);

    const atlas = atlasModule.default;
    const features = topoModule.feature(atlas, atlas.objects.countries).features;

    // Natural Earth numeric country IDs.
    const numericCodes = {
      AUS:"036",MYS:"458",LBN:"422",KAZ:"398",JOR:"400",
      OMN:"512",ISR:"376",ARE:"784",KOR:"410",BHR:"048",
      AUT:"040",GEO:"268",ISL:"352",EST:"233",GRC:"300",
      ITA:"380",HUN:"348",FRA:"250",TUR:"792",FIN:"246",
      GBR:"826",CZE:"203",TWN:"158",CHN:"156",LKA:"144",
      JPN:"392",POL:"616",THA:"764",SGP:"702",MDV:"462",
      DEU:"276",NOR:"578",NPL:"524",MEX:"484",PER:"604"
    };

    const visited = new Set(visitedCountries.map(c => numericCodes[c[1]]));
    const wishlist = new Set(wishlistCountries.map(c => numericCodes[c[1]]));

    // Simple equirectangular projection, adequate for a visual travel map.
    const project = ([lon,lat]) => [
      (lon + 180) * 2.5,
      (90 - lat) * 2.5
    ];

    function ringPath(ring) {
      return ring.map((coord,i) => {
        const [x,y] = project(coord);
        return (i ? "L" : "M") + x.toFixed(1) + "," + y.toFixed(1);
      }).join(" ") + " Z";
    }

    function geometryPath(geometry) {
      if (!geometry) return "";
      if (geometry.type === "Polygon")
        return geometry.coordinates.map(ringPath).join(" ");
      if (geometry.type === "MultiPolygon")
        return geometry.coordinates.flatMap(p => p.map(ringPath)).join(" ");
      return "";
    }

    const ns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(ns, "svg");
    svg.setAttribute("viewBox", "0 0 900 450");
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-label", "World map showing visited and wishlist countries");

    features.forEach(f => {
      const path = document.createElementNS(ns, "path");
      const id = String(f.id).padStart(3,"0");
      path.setAttribute("d", geometryPath(f.geometry));
      path.setAttribute("fill", visited.has(id) ? "#00ff99" : wishlist.has(id) ? "#a855f7" : "#2a3041");
      path.setAttribute("stroke", "#111421");
      path.setAttribute("stroke-width", ".45");

      const label = document.createElementNS(ns, "title");
      label.textContent = f.properties?.name || "Country";
      path.appendChild(label);
      svg.appendChild(path);
    });

    container.replaceChildren(svg);
  } catch (error) {
    container.textContent = "The map couldn't load. Explore the country list below instead.";
    container.style.display = "grid";
    container.style.placeItems = "center";
    container.style.color = "#9b9ba9";
    console.warn("Map unavailable:", error);
  }
}
loadWorldMap();

// -----------------------------------------
// CINEMA SEARCH AND FILTERS
// -----------------------------------------
const movieGrid = document.getElementById("movieGrid");
const movieSearch = document.getElementById("movieSearch");
const movieDialog = document.getElementById("movieDialog");
const dialogContent = document.getElementById("dialogContent");
let activeCategory = "all";

function renderMovies() {
  const search = movieSearch.value.trim().toLowerCase();
  const filtered = movies.filter(movie => {
    const matchesCategory = activeCategory === "all" || movie.category === activeCategory;
    const matchesSearch = movie.title.toLowerCase().includes(search);
    return matchesCategory && matchesSearch;
  });

  movieGrid.replaceChildren();

  if (!filtered.length) {
    const empty = document.createElement("p");
    empty.textContent = "No titles found. Try another search.";
    empty.className = "muted";
    movieGrid.appendChild(empty);
    return;
  }

  filtered.forEach(movie => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "movie-card";

    const art = document.createElement("div");
    art.className = "movie-art";
    art.style.background = `linear-gradient(145deg, ${movie.color}, #12121e)`;

    const title = document.createElement("span");
    title.textContent = movie.title;
    art.appendChild(title);

    const info = document.createElement("div");
    info.className = "movie-info";

    const name = document.createElement("strong");
    name.textContent = movie.title;

    const year = document.createElement("small");
    year.textContent = movie.year + " / " + movie.category.toUpperCase();

    const status = document.createElement("em");
    status.textContent = movie.status.toUpperCase();

    info.append(name, year, status);
    button.append(art, info);

    button.addEventListener("click", () => openMovie(movie));
    movieGrid.appendChild(button);
  });
}

function openMovie(movie) {
  dialogContent.replaceChildren();

  const category = document.createElement("p");
  category.className = "dialog-meta";
  category.textContent = movie.category.toUpperCase() + " / " + movie.year;

  const title = document.createElement("h2");
  title.className = "dialog-title";
  title.textContent = movie.title;

  const status = document.createElement("p");
  status.className = "dialog-meta";
  status.textContent = movie.status;

  const description = document.createElement("p");
  description.className = "dialog-description";
  description.textContent = movie.description;

  dialogContent.append(category, title, status, description);
  movieDialog.showModal();
}

document.getElementById("closeDialog").addEventListener("click", () => movieDialog.close());

movieDialog.addEventListener("click", event => {
  if (event.target === movieDialog) movieDialog.close();
});

movieSearch.addEventListener("input", renderMovies);

document.querySelectorAll("[data-category]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-category]").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    activeCategory = button.dataset.category;
    renderMovies();
  });
});

renderMovies();

// -----------------------------------------
// FOOTER
// -----------------------------------------
document.getElementById("year").textContent = new Date().getFullYear();
