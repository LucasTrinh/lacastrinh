
"use strict";

// LUCAS TRINH — MY WORLD
// Edit the collections and personal content here.

const spotifyURL = "https://open.spotify.com/playlist/0HJiIjzJHQp1KZ8SXCdFUC";

const collections = [
  {id:"about",title:"The Story So Far",subtitle:"A little about me",icon:"◉",color:"linear-gradient(135deg,#6b55c6,#292653)"},
  {id:"cinema",title:"On Repeat",subtitle:"Movies, TV & K-dramas",icon:"▣",color:"linear-gradient(135deg,#8c4ba9,#35234c)"},
  {id:"travel",title:"Around the World",subtitle:"28 countries",icon:"◎",color:"linear-gradient(135deg,#378bb7,#203955)"},
  {id:"active",title:"The Good Days",subtitle:"Sports & life",icon:"↗",color:"linear-gradient(135deg,#477d83,#263e48)"},
  {id:"values",title:"What Matters",subtitle:"Faith & people",icon:"♡",color:"linear-gradient(135deg,#8b668f,#393252)"},
  {id:"music",title:"My Soundtrack",subtitle:"Spotify playlist",icon:"♫",color:"linear-gradient(135deg,#6955b7,#304e99)"},
  {id:"day",title:"A Perfect Day",subtitle:"My ideal day",icon:"☼",color:"linear-gradient(135deg,#bc7c84,#544376)"},
  {id:"lately",title:"Life Lately",subtitle:"Memories to come",icon:"▧",color:"linear-gradient(135deg,#5a718c,#3b4162)"},
  {id:"next",title:"What's Next?",subtitle:"Still exploring",icon:"✧",color:"linear-gradient(135deg,#7396bb,#3e4a85)"}
];

const visited = [
  ["Australia","036"],["Malaysia","458"],["Lebanon","422"],
  ["Kazakhstan","398"],["Jordan","400"],["Oman","512"],
  ["Israel","376"],["UAE","784"],["South Korea","410"],
  ["Bahrain","048"],["Austria","040"],["Georgia","268"],
  ["Iceland","352"],["Estonia","233"],["Greece","300"],
  ["Italy","380"],["Hungary","348"],["France","250"],
  ["Turkey","792"],["Finland","246"],["UK","826"],
  ["Czech Republic","203"],["Taiwan","158"],["China (Qingdao)","156"],
  ["Sri Lanka","144"],["Japan","392"],["Poland","616"],
  ["Thailand","764"]
];

const wishlist = [
  ["Singapore","702"],["Maldives","462"],["Germany","276"],
  ["Norway","578"],["Nepal","524"],["Mexico","484"],["Peru","604"]
];

const films = [
  ["Pride & Prejudice","Film","Favourite #1","#567a7c"],
  ["Good Will Hunting","Film","Top 3","#4c6495"],
  ["The Truman Show","Film","Top 3","#467d99"],
  ["Forrest Gump","Film","Favourite","#617e91"],
  ["The Pursuit of Happyness","Film","Favourite","#526f8e"],
  ["Whiplash","Film","Rewatch","#a05552"],
  ["Dead Poets Society","Film","Watched","#7e6b53"],
  ["Interstellar","Film","Watched","#445a7c"],
  ["Shutter Island","Film","Watched","#51647b"],
  ["The Age of Adaline","Film","Watched","#8a6785"],
  ["Business Proposal","K-Drama","Favourite","#a56ca3"],
  ["Bloodhounds","K-Drama","Favourite","#a64e65"],
  ["Twenty-Five Twenty-One","K-Drama","Favourite","#648bd0"],
  ["Queen of Tears","K-Drama","Favourite","#956ba0"],
  ["Crash Landing on You","K-Drama","Watched","#6b8b9b"],
  ["Taxi Driver","K-Drama","Watched","#64778a"],
  ["Modern Family","TV","Favourite","#6886a2"],
  ["Brooklyn Nine-Nine","TV","Favourite","#4778a9"],
  ["Breaking Bad","TV","Favourite","#4d805c"],
  ["Invincible","TV","Favourite","#5c7bbf"],
  ["Young Sheldon","TV","Favourite","#74869f"],
  ["The Avengers","Marvel","Watched","#5b6caa"],
  ["Avengers: Infinity War","Marvel","Watched","#7663b4"],
  ["Avengers: Endgame","Marvel","Watched","#6658a5"],
  ["Spider-Man: No Way Home","Marvel","Watched","#ad596b"],
  ["Guardians of the Galaxy Vol. 3","Marvel","Watched","#6069ac"]
];

const $ = id => document.getElementById(id);
const panel = $("mainPanel");
const content = $("pageContent");
let currentPage = "home";
let historyStack = ["home"];
let historyIndex = 0;
let cinemaFilter = "All";

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",
    '"':"&quot;","'":"&#39;"
  })[char]);
}

function cover(item, className = "collection-cover") {
  return `<div class="${className}" style="background:${item.color}">
    <span aria-hidden="true">${item.icon}</span></div>`;
}

function quickTile(item) {
  return `<button class="quick-tile" data-page="${item.id}">
    ${cover(item,"quick-cover")}
    <span class="quick-label">${item.title}</span>
    <span class="quick-play" aria-hidden="true">▶</span>
  </button>`;
}

function collectionCard(item) {
  return `<button class="collection-card" data-page="${item.id}">
    ${cover(item)}
    <strong>${item.title}</strong>
    <small>${item.subtitle}</small>
  </button>`;
}

function homePage(query = "") {
  const matching = collections.filter(item =>
    (item.title+" "+item.subtitle).toLowerCase().includes(query.toLowerCase())
  );
  const quick = matching.slice(0,6);
  return `<div class="page home-page">
    <h1>Good to see you, Lucas.</h1>
    <p class="subtitle">A life in progress. A collection of things I love.</p>
    <div class="pills">
      <button class="pill active" data-page="home">All</button>
      <button class="pill" data-page="cinema">Movies & TV</button>
      <button class="pill" data-page="travel">Travel</button>
      <button class="pill" data-page="music">Music</button>
    </div>
    <div class="quick-grid">${quick.map(quickTile).join("")}</div>
    <div class="row-heading">
      <h2>Made for the curious</h2>
      <button class="show-all" data-page="about">Explore my world</button>
    </div>
    <div class="collection-row">${matching.slice(0,8).map(collectionCard).join("")}</div>
    <div class="row-heading" style="margin-top:38px">
      <h2>More to discover</h2>
    </div>
    <div class="collection-row">${matching.slice(8).map(collectionCard).join("")}</div>
    ${matching.length===0?'<p class="muted">Nothing found. Try another search.</p>':""}
  </div>`;
}

function detailHeader(id,description) {
  const item = collections.find(c => c.id===id);
  return `<div class="detail-hero">
    ${cover(item,"detail-cover")}
    <div>
      <span class="detail-type">LUCAS'S PERSONAL COLLECTION</span>
      <h1>${item.title}</h1>
      <p>${description}</p>
      <span class="muted">Lucas Trinh · Personal</span>
    </div>
  </div>
  <div class="detail-actions">
    <button class="big-play" data-page="home" title="Return home">⌂</button>
    <span class="action-note">Explore this part of my life</span>
  </div>`;
}

function rows(items) {
  return `<table class="track-list">
    <thead><tr><th>#</th><th>CHAPTER</th><th>DETAIL</th></tr></thead>
    <tbody>${items.map((item,i)=>`<tr>
      <td>${i+1}</td><td>${escapeHTML(item[0])}</td>
      <td>${escapeHTML(item[1])}</td>
    </tr>`).join("")}</tbody>
  </table>`;
}

function aboutPage() {
  return detailHeader("about","A little introduction, beyond the usual facts.")+
  `<div class="story-panel">
    <h3>Hi, I'm Lucas.</h3>
    <p>I want to make the most of the time I have. I love travelling, watching films,
    staying active, spending time with friends and discovering new things.</p>
    <p>I want to create meaningful experiences and become someone I'm proud of.
    But I don't just want a successful life. I want an interesting one.</p>
    <p>There's still a lot I'm figuring out, and I think that's part of the fun.</p>
  </div>`+
  rows([
    ["Curiosity","There's always something new to discover."],
    ["People","Good company makes good memories."],
    ["Adventure","I'd rather try something than wonder what if."],
    ["Growth","Keep learning and making the most of life."]
  ]);
}

function cinemaPage() {
  return detailHeader("cinema","Films, television and K-dramas. Stories that stay with me.")+
  `<div class="story-panel">
    <span class="eyebrow">ALL-TIME FAVOURITE / #01</span>
    <h3>Pride & Prejudice (2005)</h3>
    <p>My number one film. I love the romance, sophisticated banter,
    ambience and the beautiful nature and countryside.</p>
    <p>My other top films include Good Will Hunting and The Truman Show.
    And yes, I absolutely love Marvel movies.</p>
  </div>
  <div class="filter-row" id="filmFilters">
    ${["All","Film","TV","K-Drama","Marvel"].map(x=>
      `<button data-film="${x}" class="${cinemaFilter===x?"active":""}">${x}</button>`
    ).join("")}
  </div>
  <div class="film-list" id="filmList"></div>`;
}

function renderFilms() {
  const list = $("filmList");
  if (!list) return;
  const search = $("searchInput").value.toLowerCase();
  const matches = films.filter(f =>
    (cinemaFilter==="All"||f[1]===cinemaFilter) &&
    f[0].toLowerCase().includes(search)
  );
  list.innerHTML = matches.map(f=>`<div class="film-tile">
    <div class="film-cover" style="background:linear-gradient(140deg,${f[3]},#191725)">
      ${escapeHTML(f[0])}
    </div>
    <strong>${escapeHTML(f[0])}</strong>
    <small>${escapeHTML(f[2])} · ${escapeHTML(f[1])}</small>
  </div>`).join("") || `<p class="muted">No matching titles.</p>`;
}

function countryChips(countries,wish=false) {
  return countries.map(c=>`<span class="chip ${wish?"wish":""}">${escapeHTML(c[0])}</span>`).join("");
}

function travelPage() {
  return detailHeader("travel","Places I've explored, and places I hope to visit next.")+
  `<div class="number-stats">
    <div><strong>28</strong><small>COUNTRIES VISITED</small></div>
    <div><strong>7</strong><small>WISHLIST COUNTRIES</small></div>
  </div>
  <div class="story-panel">
    <h3>There's so much of the world to see.</h3>
    <p>I love travelling because every destination has something different
    to offer. New cultures, places, food, people and experiences.</p>
    <p>I'm still collecting memories. I'll add the stories behind
    individual trips here as time goes on.</p>
  </div>
  <div class="detail-section">
    <h2>My world map</h2>
    <p class="muted">Mint = visited · Purple = wishlist</p>
    <div class="map-holder" id="mapHolder">
      <span class="muted">Loading the world map...</span>
    </div>
  </div>
  <div class="detail-section">
    <h2>Where I've been</h2>
    <div class="chip-row">${countryChips(visited)}</div>
  </div>
  <div class="detail-section">
    <h2>Where I want to go</h2>
    <div class="chip-row">${countryChips(wishlist,true)}</div>
    <p class="muted">Also on my list: exploring more of Australia.</p>
  </div>`;
}

function activePage() {
  return detailHeader("active","Making time to move, challenge myself and enjoy life.")+
  `<div class="story-panel">
    <h3>I like staying active.</h3>
    <p>Sports, running and fitness are a big part of my life.
    I love the feeling of challenging myself and finishing something difficult.</p>
    <p>A morning run followed by a really good breakfast is a pretty great start to any day.</p>
  </div>`+
  rows([
    ["Running","An ideal way to start the morning."],
    ["Sports","Competition, teamwork and being active."],
    ["Challenges","Finding out what I'm capable of."],
    ["Good days","Friends, adventures and doing something worthwhile."]
  ]);
}

function valuesPage() {
  return detailHeader("values","The beliefs, people and principles that shape my life.")+
  `<div class="story-panel">
    <h3>Faith, gratitude and people.</h3>
    <p>I'm Christian, and my faith in Jesus is important to me.
    I want to live with purpose and treat people with care and respect.</p>
    <p>Achievements matter, but so do relationships, shared experiences,
    kindness and the person you become along the way.</p>
  </div>`+
  rows([
    ["Faith","A foundation for how I try to live."],
    ["Family & friends","People matter more than accomplishments."],
    ["Gratitude","Appreciating the things I already have."],
    ["Purpose","Making my time count."]
  ]);
}

function musicPage() {
  return detailHeader("music","Different moods, different songs. Music for the moments in between.")+
  `<div class="story-panel">
    <h3>Life sounds better with music.</h3>
    <p>My playlists change with my mood. Sometimes I want something
    energetic, sometimes something reflective, and sometimes I just
    want the right soundtrack for the moment.</p>
    <a class="link-btn" href="${spotifyURL}" target="_blank" rel="noopener noreferrer">Open my Spotify ↗</a>
  </div>
  <div class="spotify-large">
    <iframe title="Lucas's Spotify playlist" style="border-radius:12px"
      src="https://open.spotify.com/embed/playlist/0HJiIjzJHQp1KZ8SXCdFUC?theme=0"
      width="100%" height="352" frameborder="0"
      allow="autoplay;clipboard-write;encrypted-media;fullscreen;picture-in-picture"
      loading="lazy"></iframe>
  </div>`;
}

function dayPage() {
  return detailHeader("day","If I could design the perfect ordinary day, this would be it.")+
  rows([
    ["7:00 AM","Wake up and go for a run."],
    ["Breakfast","Pancakes, waffles and orange juice."],
    ["Lunchtime","Go out and spend time with friends."],
    ["Afternoon","Do something adventurous or productive."],
    ["Dinner","A really good Korean meal."],
    ["Evening","K-dramas, relaxing, and nothing unfinished to stress about."]
  ]);
}

function latelyPage() {
  return detailHeader("lately","A space for memories, photos and stories I haven't added yet.")+
  `<div class="story-panel">
    <h3>Still collecting moments.</h3>
    <p>I'll add photographs and stories from my travels, friendships
    and experiences here over time.</p>
  </div>`;
}

function nextPage() {
  return detailHeader("next","The best part? I don't know everything that's coming.")+
  `<div class="story-panel">
    <h3>More to discover.</h3>
    <p>I want to keep exploring the world, trying new things,
    meeting people and creating memories worth looking back on.</p>
    <p>I don't have every detail figured out. But I'm excited to find out.</p>
  </div>`;
}

const pageRenderers = {
  about:aboutPage,cinema:cinemaPage,travel:travelPage,
  active:activePage,values:valuesPage,music:musicPage,
  day:dayPage,lately:latelyPage,next:nextPage
};

function navigate(id,addHistory=true) {
  if (id!=="home" && !pageRenderers[id]) return;
  currentPage=id;
  if(addHistory) {
    historyStack=historyStack.slice(0,historyIndex+1);
    historyStack.push(id);
    historyIndex=historyStack.length-1;
  }
  panel.className="main-panel"+(id==="home"||id==="about"||id==="day"||id==="lately"||id==="next"?"":" "+id+"-theme");
  content.innerHTML = id==="home" ? homePage() : `<div class="page">${pageRenderers[id]()}</div>`;
  panel.scrollTop=0;
  document.querySelectorAll(".side-item").forEach(b=>{
    b.classList.toggle("active",b.dataset.page===id);
  });
  $("searchInput").value="";
  if(id==="cinema") renderFilms();
  if(id==="travel") loadMap();
}

document.addEventListener("click",e=>{
  const pageButton=e.target.closest("[data-page]");
  if(pageButton) navigate(pageButton.dataset.page);

  const filter=e.target.closest("[data-film]");
  if(filter) {
    cinemaFilter=filter.dataset.film;
    document.querySelectorAll("[data-film]").forEach(b=>
      b.classList.toggle("active",b===filter));
    renderFilms();
  }
});

$("searchInput").addEventListener("input",e=>{
  const q=e.target.value.trim();
  if(currentPage==="home") {
    content.innerHTML=homePage(q);
  } else if(currentPage==="cinema") {
    renderFilms();
  } else if(q) {
    currentPage="home";
    panel.className="main-panel";
    content.innerHTML=homePage(q);
  }
});

$("backBtn").onclick=()=>{
  if(historyIndex>0) navigate(historyStack[--historyIndex],false);
};
$("forwardBtn").onclick=()=>{
  if(historyIndex<historyStack.length-1)
    navigate(historyStack[++historyIndex],false);
};

// Spotify mini player. Playback happens inside Spotify's embed.
const overlay=$("spotifyOverlay");
const spotifyFrame=$("spotifyFrame");

function openSpotify() {
  if(!spotifyFrame.src) spotifyFrame.src=spotifyFrame.dataset.src;
  overlay.hidden=false;
  $("closeSpotify").focus();
}
function closeSpotify() {
  overlay.hidden=true;
}
$("playerToggle").onclick=openSpotify;
$("expandPlayer").onclick=openSpotify;
$("closeSpotify").onclick=closeSpotify;
overlay.addEventListener("click",e=>{
  if(e.target===overlay) closeSpotify();
});
document.addEventListener("keydown",e=>{
  if(e.key==="Escape") closeSpotify();
});
$("heartBtn").onclick=()=>{
  $("heartBtn").classList.toggle("liked");
  $("heartBtn").textContent=
    $("heartBtn").classList.contains("liked")?"♥":"♡";
};

// These browse personal collections, not audio tracks.
$("previousBtn").onclick=()=>navigate("about");
$("nextBtn").onclick=()=>navigate("cinema");

// World map: original rendering using public geographic data.
// Falls back gracefully to the country lists if unavailable.
async function loadMap() {
  const holder=$("mapHolder");
  if(!holder) return;
  try {
    const response=await fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json");
    if(!response.ok) throw Error("Map data unavailable");
    const topology=await response.json();
    const module=await import("https://cdn.jsdelivr.net/npm/topojson-client@3/+esm");
    const features=module.feature(topology,topology.objects.countries).features;
    if(!$("mapHolder")) return;

    const visitedIDs=new Set(visited.map(c=>c[1]));
    const wishlistIDs=new Set(wishlist.map(c=>c[1]));
    const NS="http://www.w3.org/2000/svg";
    const svg=document.createElementNS(NS,"svg");
    svg.setAttribute("viewBox","0 0 900 450");
    svg.setAttribute("role","img");
    svg.setAttribute("aria-label","World map of countries visited and on the wishlist");

    function point(p) {
      return [((p[0]+180)*2.5).toFixed(1),((90-p[1])*2.5).toFixed(1)];
    }
    function ring(coords) {
      return coords.map((p,i)=>{
        const [x,y]=point(p);
        return `${i?"L":"M"}${x},${y}`;
      }).join(" ")+"Z";
    }
    function shape(g) {
      if(g.type==="Polygon") return g.coordinates.map(ring).join(" ");
      if(g.type==="MultiPolygon")
        return g.coordinates.flatMap(p=>p.map(ring)).join(" ");
      return "";
    }

    features.forEach(f=>{
      const id=String(f.id).padStart(3,"0");
      const path=document.createElementNS(NS,"path");
      path.setAttribute("d",shape(f.geometry));
      path.setAttribute("fill",visitedIDs.has(id)?"#00e7aa":
        wishlistIDs.has(id)?"#a78bfa":"#30384a");
      const title=document.createElementNS(NS,"title");
      title.textContent=f.properties?.name||"Country";
      path.appendChild(title);
      svg.appendChild(path);
    });
    holder.replaceChildren(svg);
  } catch(error) {
    if($("mapHolder")) {
      holder.innerHTML="<p class='muted'>Map unavailable right now. The destination lists below are still available.</p>";
    }
    console.warn(error);
  }
}

// Start on the homepage.
navigate("home",false);


// ==========================================
// INTERACTIVE RIGHT-HAND DETAILS PANEL
// ==========================================

const detailsPanel = document.getElementById("detailsPanel");
const detailsBody = document.getElementById("detailsBody");
const detailsHeading = document.getElementById("detailsHeading");

function openDetails(item) {
  if (!detailsPanel || !detailsBody) return;

  const title = String(item.title || "Untitled");
  const subtitle = String(item.subtitle || "");
  const description = String(item.description || "");
  const category = String(item.category || "Lucas's collection");
  const icon = String(item.icon || "♫");
  const color = item.color || "#5544a0";

  detailsHeading.textContent = category;

  detailsBody.replaceChildren();

  const cover = document.createElement("div");
  cover.className = "details-cover";
  cover.style.background = color;

  const symbol = document.createElement("span");
  symbol.textContent = icon;
  cover.appendChild(symbol);

  const heading = document.createElement("h2");
  heading.className = "details-title";
  heading.textContent = title;

  const subheading = document.createElement("p");
  subheading.className = "details-subtitle";
  subheading.textContent = subtitle;

  const section = document.createElement("div");
  section.className = "details-section";

  const sectionHeading = document.createElement("h3");
  sectionHeading.textContent = "A little more about this";

  const paragraph = document.createElement("p");
  paragraph.textContent = description || "More details coming soon.";

  section.append(sectionHeading, paragraph);
  detailsBody.append(cover, heading, subheading, section);

  detailsPanel.classList.add("open");
}

function closeDetails() {
  detailsPanel.classList.remove("open");
}

document.getElementById("closeDetails")
  ?.addEventListener("click", closeDetails);

// Movies and TV shows
const movieDescriptions = {
  "Pride & Prejudice":
    "My favourite film of all time. I love the romance, sophisticated banter, ambience and beautiful English countryside.",

  "Good Will Hunting":
    "One of my top three films. Definitely a film worth rewatching.",

  "The Truman Show":
    "One of my all-time favourite films.",

  "Bloodhounds":
    "OH MY DAYS. SO GOOD. One of my favourite K-dramas.",

  "Business Proposal":
    "One of my favourite Korean dramas.",

  "Twenty-Five Twenty-One":
    "One of my favourite K-dramas.",

  "Queen of Tears":
    "One of my favourite Korean dramas.",

  "Modern Family":
    "One of my favourite comedy series.",

  "Brooklyn Nine-Nine":
    "One of my favourite TV shows.",

  "Breaking Bad":
    "One of my favourite television series."
};

// Add clickable details to the existing film list.
function enableFilmDetails() {
  const filmList = document.getElementById("filmList");
  if (!filmList) return;

  const tiles = filmList.querySelectorAll(".film-tile");

  tiles.forEach((tile, index) => {
    const visibleTitle = tile.querySelector("strong")?.textContent;
    const film = films.find(f => f[0] === visibleTitle);

    if (!film) return;

    tile.style.cursor = "pointer";
    tile.setAttribute("role", "button");
    tile.setAttribute("tabindex", "0");
    tile.setAttribute("aria-label", "Explore " + film[0]);

    const activate = () => openDetails({
      title: film[0],
      subtitle: film[2] + " · " + film[1],
      description: movieDescriptions[film[0]] ||
        "Part of my personal movie and TV collection. I'll add my thoughts about this title later.",
      category: "On Repeat",
      icon: "▣",
      color: "linear-gradient(135deg," + film[3] + ",#171725)"
    });

    tile.onclick = activate;
    tile.onkeydown = e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        activate();
      }
    };
  });
}

// Observe the cinema collection when it changes.
const filmObserver = new MutationObserver(() => {
  enableFilmDetails();
});

const pageContentElement = document.getElementById("pageContent");

if (pageContentElement) {
  filmObserver.observe(pageContentElement, {
    childList: true,
    subtree: false
  });
}

// Update when cinema filters change.
document.addEventListener("click", e => {
  if (e.target.closest("[data-film]")) {
    requestAnimationFrame(enableFilmDetails);
  }
});

// Countries
function enableCountryDetails() {
  const chips = document.querySelectorAll(".chip");

  chips.forEach(chip => {
    const name = chip.textContent.trim();
    chip.style.cursor = "pointer";
    chip.setAttribute("role", "button");
    chip.setAttribute("tabindex", "0");

    const activate = () => openDetails({
      title: name,
      subtitle: chip.classList.contains("wish")
        ? "Travel wishlist"
        : "Country visited",
      description: chip.classList.contains("wish")
        ? "A destination I hope to explore in the future."
        : "One of the countries I've visited. I'll add my photographs and travel memories here later.",
      category: "Travel Mix",
      icon: "◎",
      color: chip.classList.contains("wish")
        ? "linear-gradient(135deg,#8b5cf6,#473b81)"
        : "linear-gradient(135deg,#2e87a3,#243d63)"
    });

    chip.onclick = activate;
    chip.onkeydown = e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        activate();
      }
    };
  });
}

// Activate details when switching pages.
document.addEventListener("click", e => {
  const page = e.target.closest("[data-page]")?.dataset.page;

  if (page === "travel") {
    requestAnimationFrame(enableCountryDetails);
  }

  if (page === "cinema") {
    requestAnimationFrame(enableFilmDetails);
  }
});

// Automatically close when navigating to another collection.
document.addEventListener("click", e => {
  if (e.target.closest("[data-page]")) {
    closeDetails();
  }
});

// Escape closes the right-hand panel.
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeDetails();
  }
});

