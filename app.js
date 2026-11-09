(() => {
  const articles = Array.isArray(window.TECHVERSE_ARTICLES) ? window.TECHVERSE_ARTICLES : [];
  const categories = ["All", "AI & Innovation", "Apps", "Software", "Gadgets", "Tech News", "Guides"];
  let activeCategory = "All";
  let searchTerm = "";
  const $ = (id) => document.getElementById(id);
  const featuredGrid = $("featuredGrid"), articleGrid = $("articleGrid");
  const escapeHTML = (value) => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const prettyDate = (date) => { const d = new Date(date + "T12:00:00"); return Number.isNaN(d.getTime()) ? date : d.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}); };
  const visualClass = (category) => ({ "Apps":"visual-apps","Software":"visual-software","Gadgets":"visual-gadgets","Tech News":"visual-news","Guides":"visual-guides" }[category] || "");
  const visual = (article) => `<div class="story-visual ${visualClass(article.category)}"><span class="visual-glyph">${escapeHTML(article.glyph || "✦")}</span><span class="visual-label">TECHVERSE / ${escapeHTML(article.category.toUpperCase())}</span></div>`;
  const meta = (a) => `<div class="article-meta"><span>${escapeHTML(a.category.toUpperCase())}</span><span>•</span><time>${escapeHTML(prettyDate(a.date))}</time><span>•</span><span>${escapeHTML(a.readTime || "3 MIN READ")}</span></div>`;
  function card(a, featured=false) {
    return `<article class="${featured ? "featured-card" : "article-card"}" tabindex="0" role="button" data-article="${escapeHTML(a.id)}" aria-label="Read ${escapeHTML(a.title)}">${visual(a)}<div class="story-content">${meta(a)}<h3>${escapeHTML(a.title)}</h3><p>${escapeHTML(a.summary)}</p><span class="read-more">Read story <span>→</span></span></div></article>`;
  }
  function renderFilters() {
    $("filters").innerHTML = categories.map(c => `<button class="filter-btn ${c===activeCategory?"active":""}" data-filter="${escapeHTML(c)}">${escapeHTML(c)}</button>`).join("");
  }
  function render() {
    const filtered = articles.filter(a => (activeCategory==="All" || a.category===activeCategory) && (a.title+" "+a.summary+" "+a.category).toLowerCase().includes(searchTerm));
    const featured = filtered.filter(a => a.featured).slice(0,2);
    const rest = filtered.filter(a => !featured.includes(a));
    featuredGrid.innerHTML = featured.map(a=>card(a,true)).join("");
    articleGrid.innerHTML = rest.map(a=>card(a,false)).join("");
    $("emptyState").hidden = filtered.length > 0;
    bindCards();
  }
  function openArticle(id) {
    const a = articles.find(x=>x.id===id); if(!a) return;
    $("modalArt").className = "modal-art " + visualClass(a.category);
    $("modalArt").innerHTML = `<span class="visual-glyph">${escapeHTML(a.glyph || "✦")}</span>`;
    $("modalMeta").innerHTML = meta(a);
    $("modalTitle").textContent = a.title;
    $("modalSummary").textContent = a.summary;
    $("modalBody").textContent = a.body || "";
    $("articleModal").classList.add("open"); $("articleModal").setAttribute("aria-hidden","false"); document.body.style.overflow="hidden";
    $("articleModal").querySelector(".modal-close").focus();
  }
  function closeArticle() { $("articleModal").classList.remove("open"); $("articleModal").setAttribute("aria-hidden","true"); document.body.style.overflow=""; }
  function bindCards() {
    document.querySelectorAll("[data-article]").forEach(el => {
      el.addEventListener("click",()=>openArticle(el.dataset.article));
      el.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openArticle(el.dataset.article);}});
    });
  }
  $("filters").addEventListener("click",e=>{const b=e.target.closest("[data-filter]");if(!b)return;activeCategory=b.dataset.filter;renderFilters();render();});
  $("searchInput").addEventListener("input",e=>{searchTerm=e.target.value.trim().toLowerCase();render();});
  document.querySelectorAll(".category-card").forEach(b=>b.addEventListener("click",()=>{activeCategory=b.dataset.category;renderFilters();render();$("latest").scrollIntoView({behavior:"smooth"});}));
  $("articleModal").addEventListener("click",e=>{if(e.target.hasAttribute("data-close"))closeArticle();});
  document.addEventListener("keydown",e=>{if(e.key==="Escape")closeArticle();});
  $("menuToggle").addEventListener("click",()=>{const open=$("mainNav").classList.toggle("open");$("menuToggle").setAttribute("aria-expanded",String(open));});
  document.querySelectorAll(".main-nav a").forEach(a=>a.addEventListener("click",()=>{$("mainNav").classList.remove("open");$("menuToggle").setAttribute("aria-expanded","false");}));
  $("year").textContent = new Date().getFullYear();
  renderFilters(); render();
})();