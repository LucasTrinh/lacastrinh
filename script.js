
"use strict";

// LUCAS TRINH — MY WORLD
// Edit the collections and personal content here.

const spotifyURL = "https://open.spotify.com/playlist/0HJiIjzJHQp1KZ8SXCdFUC";

const collections = [
  {
    id:"about",
    title:"This Is Lucas",
    subtitle:"Get to know me",
    icon:"◉",
    color:"linear-gradient(135deg,#6b55c6,#292653)"
  },
  {
    id:"cinema",
    title:"On Repeat",
    subtitle:"Movies, TV & K-dramas",
    icon:"▣",
    color:"linear-gradient(135deg,#8c4ba9,#35234c)"
  },
  {
    id:"travel",
    title:"Travel Mix",
    subtitle:"28 countries visited",
    icon:"◎",
    color:"linear-gradient(135deg,#378bb7,#203955)"
  },
  {
    id:"active",
    title:"Sports Mix",
    subtitle:"Sports, running & fitness",
    icon:"↗",
    color:"linear-gradient(135deg,#477d83,#263e48)"
  },
  {
    id:"music",
    title:"Liked Songs",
    subtitle:"My Spotify playlist",
    icon:"♥",
    color:"linear-gradient(135deg,#5e3edb,#b3d9d8)"
  },
  {
    id:"day",
    title:"daylist",
    subtitle:"My ideal day",
    icon:"☼",
    color:"linear-gradient(135deg,#bc7c84,#544376)"
  }
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
  
/* COMPLETE MOVIE & TV COLLECTION
   Format:
   [Title, Category, Status, Colour, Year, Favourite, Rewatch]
*/

const films = [
  // ALL-TIME FAVOURITES
  ["Pride & Prejudice","Film","Watched","#567a7c","2005",true,true],
  ["Good Will Hunting","Film","Watched","#4c6495","1997",true,true],
  ["The Truman Show","Film","Watched","#467d99","1998",true,false],
  ["Forrest Gump","Film","Watched","#617e91","1994",true,false],
  ["The Pursuit of Happyness","Film","Watched","#526f8e","2006",true,false],

  // OTHER FILMS
  ["The Age of Adaline","Film","Watched","#8a6785","2015",false,false],
  ["Serendipity","Film","Watched","#7b648d","2001",false,false],
  ["Superbad","Film","Watched","#9a6851","2007",false,false],
  ["Shutter Island","Film","Watched","#51647b","2010",false,false],
  ["What Women Want","Film","Watched","#866b79","2000",false,false],
  ["Anaconda","Film","Watched","#50785c","1997",false,false],
  ["Hancock","Film","Watched","#526e8c","2008",false,false],
  ["Now You See Me","Film","Watched","#485b86","2013",false,false],
  ["Now You See Me 2","Film","Watched","#58698c","2016",false,false],
  ["Now You See Me: Now You Don't","Film","Watched","#65708d","2025",false,false],
  ["Wicked","Film","Watched","#567d69","2024",false,false],
  ["Wicked: For Good","Film","Watched","#7c6595","2025",false,false],
  ["TRON: Legacy","Film","Watched","#366b9a","2010",false,false],
  ["TRON: Ares","Film","Watched","#9a5252","2025",false,false],
  ["Blood and Bone","Film","Watched","#875047","2009",false,false],
  ["Kickboxer","Film","Watched","#7a5845","1989",false,false],
  ["Upgrade","Film","Watched","#536d85","2018",false,false],
  ["Whiplash","Film","Watched","#a05552","2014",false,true],
  ["F1","Film","Watched","#546e8c","2025",false,false],
  ["John Wick","Film","Watched","#595b75","2014",false,false],
  ["John Wick: Chapter 2","Film","Watched","#655b75","2017",false,false],
  ["John Wick: Chapter 3 - Parabellum","Film","Watched","#695879","2019",false,false],
  ["John Wick: Chapter 4","Film","Watched","#785b81","2023",false,false],
  ["The Equalizer","Film","Watched","#4f6475","2014",false,false],
  ["The Equalizer 2","Film","Watched","#536778","2018",false,false],
  ["Home Alone","Film","Watched","#8a6557","1990",false,false],
  ["Dumb and Dumber","Film","Watched","#7e6c57","1994",false,false],
  ["Dumb and Dumber To","Film","Watched","#87735a","2014",false,false],
  ["Paul Blart: Mall Cop","Film","Watched","#6b7c8c","2009",false,false],
  ["The Hunger Games","Film","Watched","#7c644b","2012",false,false],
  ["Interstellar","Film","Watched","#445a7c","2014",false,false],
  ["Saving Private Ryan","Film","Watched","#626e66","1998",false,false],
  ["Hacksaw Ridge","Film","Watched","#7d6256","2016",false,false],
  ["The Invention of Lying","Film","Watched","#657d81","2009",false,false],
  ["A Minecraft Movie","Film","Watched","#598052","2025",false,false],
  ["Redeeming Love","Film","Watched","#9a747d","2022",false,false],
  ["No Reservations","Film","Watched","#9a7c68","2007",false,false],
  ["Me Before You","Film","Watched","#8c6b89","2016",false,true],
  ["Dead Poets Society","Film","Watched","#7e6b53","1989",false,false],
  ["The Notebook","Film","Watched","#8b7189","2004",false,false],
  ["Blue Valentine","Film","Watched","#7d718f","2010",false,false],
  ["The Social Network","Film","Watched","#59718b","2010",false,false],
  ["Legally Blonde","Film","Watched","#b47c9c","2001",false,false],
  ["Train to Busan","Film","Watched","#646b78","2016",false,false],

  // FILM WATCHLIST
  ["The Intern","Film","Watchlist","#687d8d","2015",false,false],
  ["21 Jump Street","Film","Watchlist","#6c788d","2012",false,false],
  ["eXistenZ","Film","Watchlist","#696a84","1999",false,false],
  ["New York, I Love You","Film","Watchlist","#87748b","2008",false,false],
  ["While You Were Sleeping","Film","Watchlist","#947d91","1995",false,false],
  ["Warrior","Film","Watchlist","#6b687a","2011",false,false],
  ["The Shawshank Redemption","Film","Watchlist","#596e81","1994",false,false],
  ["Flipped","Film","Watchlist","#8c7980","2010",false,false],
  ["Greenland","Film","Watchlist","#5d7687","2020",false,false],
  ["Greenland: Migration","Film","Watchlist","#60778a","2026",false,false],
  ["No Strings Attached","Film","Watchlist","#8c718a","2011",false,false],
  ["The Wolf of Wall Street","Film","Watchlist","#7a725d","2013",false,false],
  ["I, Robot","Film","Watchlist","#607b8d","2004",false,false],
  ["Lucy","Film","Watchlist","#5c7188","2014",false,false],
  ["Evan Almighty","Film","Watchlist","#7c846c","2007",false,false],
  ["Where Hope Grows","Film","Watchlist","#77846d","2014",false,false],
  ["He's All That","Film","Watchlist","#997a91","2021",false,false],
  ["The Passion of the Christ","Film","Watchlist","#8a685f","2004",false,false],
  ["Jerry Maguire","Film","Watchlist","#8b7880","1996",false,false],
  ["I Am Sam","Film","Watchlist","#7e7a91","2001",false,false],
  ["500 Days of Summer","Film","Watchlist","#8e7792","2009",false,false],
  ["Gifted","Film","Watchlist","#7d8b91","2017",false,false],
  ["Gifted Hands: The Ben Carson Story","Film","Watchlist","#718397","2009",false,false],
  ["A Beautiful Mind","Film","Watchlist","#6e7e8b","2001",false,false],
  ["The Theory of Everything","Film","Watchlist","#6b8290","2014",false,false],
  ["Coach Carter","Film","Watchlist","#667b8c","2005",false,false],
  ["The Man Who Knew Infinity","Film","Watchlist","#7d8176","2015",false,false],
  ["October Sky","Film","Watchlist","#6c8494","1999",false,false],
  ["Life of Pi","Film","Watchlist","#6b8a99","2012",false,false],
  ["Into the Wild","Film","Watchlist","#6c8b76","2007",false,false],
  ["The Next Three Days","Film","Watchlist","#65758a","2010",false,false],

  // FAVOURITE K-DRAMAS
  ["Business Proposal","K-Drama","Watched","#a56ca3","2022",true,false],
  ["Bloodhounds","K-Drama","Watched","#a64e65","2023",true,false],
  ["Twenty-Five Twenty-One","K-Drama","Watched","#648bd0","2022",true,false],
  ["Queen of Tears","K-Drama","Watched","#956ba0","2024",true,false],

  // OTHER K-DRAMAS
  ["Crash Landing on You","K-Drama","Watched","#6b8b9b","2019",false,false],
  ["All of Us Are Dead","K-Drama","Watched","#895b65","2022",false,false],
  ["Taxi Driver","K-Drama","Watched","#64778a","2021",false,false],
  ["What's Wrong with Secretary Kim","K-Drama","In Progress","#a27999","2018",false,false],

  // K-DRAMA WATCHLIST
  ["My Name","K-Drama","Watchlist","#805b73","2021",false,false],
  ["Brewing Love","K-Drama","Watchlist","#8e7896","2024",false,false],
  ["Love Next Door","K-Drama","Watchlist","#947e9e","2024",false,false],
  ["True Beauty","K-Drama","Watchlist","#9a78a5","2020",false,false],
  ["The Interest of Love","K-Drama","Watchlist","#8c7d9c","2022",false,false],
  ["When Life Gives You Tangerines","K-Drama","Watchlist","#a18465","2025",false,false],
  ["Our Unwritten Seoul","K-Drama","Watchlist","#817e9b","2025",false,false],
  ["King the Land","K-Drama","Watchlist","#9b7596","2023",false,false],
  ["Sisyphus: The Myth","K-Drama","Watchlist","#687b97","2021",false,false],
  ["Start-Up","K-Drama","Watchlist","#777b9c","2020",false,false],
  ["Descendants of the Sun","K-Drama","Watchlist","#7e899c","2016",false,false],
  ["Destined with You","K-Drama","Watchlist","#98799c","2023",false,false],
  ["Trigger","K-Drama","Watchlist","#6b7389","",false,false],
  ["A Time Called You","K-Drama","Watchlist","#8c759a","2023",false,false],
  ["Our Beloved Summer","K-Drama","Watchlist","#9a8493","2021",false,false],

  // FAVOURITE TV SHOWS
  ["Modern Family","TV","Watched","#6886a2","2009",true,false],
  ["Brooklyn Nine-Nine","TV","Watched","#4778a9","2013",true,false],
  ["Breaking Bad","TV","Watched","#4d805c","2008",true,false],
  ["Invincible","TV","Watched","#5c7bbf","2021",true,false],
  ["Young Sheldon","TV","Watched","#74869f","2017",true,false],

  // OTHER TV SHOWS
  ["The Chosen","TV","Watched","#687e88","2017",false,false],
  ["Outer Banks","TV","Watched","#6b8898","2020",false,false],

  // TV WATCHLIST
  ["Lupin","TV","Watchlist","#697c93","2021",false,false],
  ["Loki","TV","Watchlist","#697a91","2021",false,false],
  ["Silo","TV","Watchlist","#64758b","2023",false,false],
  ["For All Mankind","TV","Watchlist","#637a96","2019",false,false],
  ["Vinland Saga","TV","Watchlist","#728594","2019",false,false],
  ["House of David","TV","Watchlist","#817b6a","2025",false,false],
  ["Gossip Girl","TV","Watchlist","#9b7892","2007",false,false],

  // MARVEL — WATCHED
  ["Spider-Man","Marvel","Watched","#a6535d","2002",true,false],
  ["Spider-Man 2","Marvel","Watched","#a85663","2004",true,false],
  ["Spider-Man 3","Marvel","Watched","#aa5969","2007",true,false],
  ["The Amazing Spider-Man","Marvel","Watched","#a15d6a","2012",true,false],
  ["The Amazing Spider-Man 2","Marvel","Watched","#a56370","2014",true,false],
  ["Deadpool","Marvel","Watched","#a45263","2016",true,false],
  ["Deadpool 2","Marvel","Watched","#a65668","2018",true,false],
  ["Deadpool & Wolverine","Marvel","Watched","#b46a53","2024",true,false],
  ["X-Men Origins: Wolverine","Marvel","Watched","#6e7786","2009",true,false],
  ["X-Men: First Class","Marvel","Watched","#6a7692","2011",true,false],
  ["X-Men: Apocalypse","Marvel","Watched","#67728b","2016",true,false],
  ["Captain America: The First Avenger","Marvel","Watched","#5e7294","2011",true,false],
  ["Captain Marvel","Marvel","Watched","#7274a1","2019",true,false],
  ["Iron Man","Marvel","Watched","#a55b53","2008",true,false],
  ["The Incredible Hulk","Marvel","Watched","#5b805c","2008",true,false],
  ["Iron Man 2","Marvel","Watched","#a45f56","2010",true,false],
  ["Thor","Marvel","Watched","#637b9d","2011",true,false],
  ["The Avengers","Marvel","Watched","#5b6caa","2012",true,false],
  ["Iron Man 3","Marvel","Watched","#a3635b","2013",true,false],
  ["Thor: The Dark World","Marvel","Watched","#687a9b","2013",true,false],
  ["Captain America: The Winter Soldier","Marvel","Watched","#65799c","2014",true,false],
  ["Guardians of the Galaxy","Marvel","Watched","#6870a4","2014",true,false],
  ["Guardians of the Galaxy Vol. 2","Marvel","Watched","#7073a8","2017",true,false],
  ["Avengers: Age of Ultron","Marvel","Watched","#696caa","2015",true,false],
  ["Ant-Man","Marvel","Watched","#9b596a","2015",true,false],
  ["Captain America: Civil War","Marvel","Watched","#6c78a3","2016",true,false],
  ["Black Widow","Marvel","Watched","#a25b69","2021",true,false],
  ["Spider-Man: Homecoming","Marvel","Watched","#a65a69","2017",true,false],
  ["Black Panther","Marvel","Watched","#68658e","2018",true,false],
  ["Doctor Strange","Marvel","Watched","#7b64a0","2016",true,false],
  ["Thor: Ragnarok","Marvel","Watched","#7b6aa5","2017",true,false],
  ["Ant-Man and the Wasp","Marvel","Watched","#a15f77","2018",true,false],
  ["Avengers: Infinity War","Marvel","Watched","#7663b4","2018",true,false],
  ["Avengers: Endgame","Marvel","Watched","#6658a5","2019",true,false],
  ["Spider-Man: Far From Home","Marvel","Watched","#a15b70","2019",true,false],
  ["Eternals","Marvel","Watched","#7b789d","2021",true,false],
  ["Shang-Chi and the Legend of the Ten Rings","Marvel","Watched","#a36b5c","2021",true,false],
  ["Spider-Man: No Way Home","Marvel","Watched","#ad596b","2021",true,false],
  ["Doctor Strange in the Multiverse of Madness","Marvel","Watched","#7d60a4","2022",true,false],
  ["Thor: Love and Thunder","Marvel","Watched","#866ba6","2022",true,false],
  ["Black Panther: Wakanda Forever","Marvel","Watched","#68718e","2022",true,false],
  ["Ant-Man and the Wasp: Quantumania","Marvel","Watched","#966b8d","2023",true,false],
  ["Guardians of the Galaxy Vol. 3","Marvel","Watched","#6069ac","2023",true,false],
  ["The Marvels","Marvel","Watched","#7b78b4","2023",true,false],
  ["The Fantastic Four: First Steps","Marvel","Watched","#607eaa","2025",true,false],

  // MARVEL / X-MEN WATCHLIST
  ["X-Men: Dark Phoenix","Marvel","Watchlist","#72738e","2019",false,false],
  ["X-Men","Marvel","Watchlist","#69778d","2000",false,false],
  ["X2","Marvel","Watchlist","#6c778e","2003",false,false],
  ["X-Men: The Last Stand","Marvel","Watchlist","#70778d","2006",false,false],
  ["The Wolverine","Marvel","Watchlist","#777d89","2013",false,false],
  ["The New Mutants","Marvel","Watchlist","#77738e","2020",false,false],
  ["X-Men: Days of Future Past","Marvel","Watchlist","#747b94","2014",false,false],
  ["Logan","Marvel","Watchlist","#777d86","2017",false,false],
  ["Fantastic Four","Marvel","Watchlist","#6b8097","2005",false,false],
  ["Fantastic Four: Rise of the Silver Surfer","Marvel","Watchlist","#72869b","2007",false,false],
  ["Fantastic Four","Marvel","Watchlist","#72849b","2015",false,false],
  ["Daredevil","Marvel","Watchlist","#7c657b","2003",false,false],
  ["Elektra","Marvel","Watchlist","#8b647b","2005",false,false],
  ["Ghost Rider","Marvel","Watchlist","#9a684f","2007",false,false],
  ["Ghost Rider: Spirit of Vengeance","Marvel","Watchlist","#9c6c53","2011",false,false],
  ["The Punisher","Marvel","Watchlist","#79616b","2004",false,false],
  ["Punisher: War Zone","Marvel","Watchlist","#80636c","2008",false,false],
  ["Captain America: Brave New World","Marvel","Watchlist","#647c9b","2025",false,false],
  ["Thunderbolts*","Marvel","Watchlist","#777b8e","2025",false,false],
  ["Avengers: Doomsday","Marvel","Watchlist","#6d67a2","",false,false],
  ["Avengers: Secret Wars","Marvel","Watchlist","#706ba7","",false,false]
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
  const list = document.getElementById("filmList");
  if (!list) return;

  const search = document.getElementById("searchInput").value.toLowerCase();

  const matches = films.filter(f =>
    (cinemaFilter === "All" || f[1] === cinemaFilter) &&
    f[0].toLowerCase().includes(search)
  );

  list.innerHTML = `
    <div class="spotify-list-header">
      <span>#</span>
      <span>TITLE</span>
      <span>CATEGORY</span>
      <span>STATUS</span>
    </div>

    ${matches.map((f, i) => `
      <div class="film-tile spotify-film-row"
           role="button"
           tabindex="0"
           aria-label="Explore ${escapeHTML(f[0])}">

        <span class="film-number">${i + 1}</span>

        <div class="film-main">
          <div class="film-cover"
               style="background:linear-gradient(140deg,${f[3]},#191725)">
          </div>

          <div class="film-name">
            <strong>${escapeHTML(f[0])}</strong>
            <small>${escapeHTML(f[2])}</small>
          </div>
        </div>

        <span class="film-category">${escapeHTML(f[1])}</span>
        <span class="film-status">${escapeHTML(f[2])}</span>
      </div>
    `).join("")}
  `;

  applyMoviePosters();
  enableFilmDetails();
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


const sidebarCovers = {
  home: ["⌂", "#303039"],
  about: ["LT", "#5544a0"],
  cinema: ["▣", "#79458b"],
  travel: ["✈", "#286c89"],
  active: ["↗", "#3e6860"],
  music: ["♥", "#5e3edb"],
  day: ["☼", "#86618c"]
};


document.querySelectorAll(".side-item").forEach(button => {
  const page = button.dataset.page;
  const cover = sidebarCovers[page];

  if (!cover) return;

  button.dataset.tooltip = button.textContent.trim();
  button.setAttribute("aria-label", button.dataset.tooltip);

  const symbol = button.querySelector("span");
  if (symbol) {
    symbol.textContent = cover[0];
    symbol.style.background = cover[1];
    symbol.style.fontWeight = "800";
  }

  // Hide the text label visually without removing it
  // from the accessible button name.
});


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

  filmList.querySelectorAll(".film-tile").forEach(tile => {
    const title = tile.querySelector("strong")?.textContent;
    const film = films.find(f => f[0] === title);

    if (!film) return;

    const activate = async () => {
      openDetails({
        title: film[0],
        subtitle: film[2] + " · " + film[1],
        description: movieDescriptions[film[0]] ||
          "Part of my movie and TV collection. I'll add my thoughts later.",
        category: "On Repeat",
        icon: "▣",
        color: `linear-gradient(135deg,${film[3]},#171725)`
      });

      const poster = await getPoster(film[0], film[1]);

      // Avoid replacing the image if another movie was selected.
      if (!detailsPanel.classList.contains("open")) return;
      if (detailsBody.querySelector(".details-title")?.textContent !== film[0]) return;
      if (!poster) return;

      const cover = detailsBody.querySelector(".details-cover");
      if (!cover) return;

      cover.replaceChildren();

      const image = document.createElement("img");
      image.src = poster;
      image.alt = film[0] + " poster";
      image.loading = "lazy";

      cover.appendChild(image);
    };

    tile.onclick = activate;

    tile.onkeydown = event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
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
    subtree: true
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



/* =========================================
   TMDB MOVIE & TV POSTER LOADER
   ========================================= */

const posterCache = new Map();

async function getPoster(title, category) {
  const type =
    category === "TV" || category === "K-Drama"
      ? "tv"
      : "movie";

  const key = `${type}:${title}`;

  if (posterCache.has(key)) {
    return posterCache.get(key);
  }

  try {
    const params = new URLSearchParams({
      title: title,
      type: type
    });

    const response = await fetch(`/api/poster?${params}`);

    if (!response.ok) {
      throw new Error("Poster API returned " + response.status);
    }

    const data = await response.json();

    if (!data.poster) return null;

    posterCache.set(key, data.poster);

    return data.poster;

  } catch (error) {
    console.warn("Could not load poster:", title, error);
    return null;
  }
}

async function applyMoviePosters() {
  const cards = document.querySelectorAll(".film-tile");

  const requests = Array.from(cards).map(async card => {
    const title = card.querySelector("strong")?.textContent;
    const cover = card.querySelector(".film-cover");

    if (!title || !cover) return;

    const film = films.find(item => item[0] === title);

    if (!film) return;

    const poster = await getPoster(film[0], film[1]);

    if (!poster || !cover.isConnected) return;
   
cover.style.backgroundImage = `url("${poster}")`;
cover.style.backgroundSize = "cover";
cover.style.backgroundPosition = "center";
cover.style.backgroundRepeat = "no-repeat";
cover.dataset.poster = poster;
cover.textContent = "";

  });

  await Promise.all(requests);
}
