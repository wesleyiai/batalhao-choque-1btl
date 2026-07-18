document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("batalhao-nome").textContent = CONFIG.batalhao;
  document.getElementById("batalhao-subtitulo").textContent = CONFIG.subtitulo;
  document.getElementById("efetivo-nome").textContent = CONFIG.efetivo;

  renderMetas();
  renderResumo();
  renderFiltros();
  renderPrints("todos");
  setupLightbox();
});

function renderMetas() {
  const container = document.getElementById("metas-container");
  container.innerHTML = "";

  CONFIG.metas.forEach(meta => {
    const pct = meta.meta > 0 ? Math.round((meta.atual / meta.meta) * 100) : 0;
    const larguraBarra = Math.min(100, pct);
    const card = document.createElement("div");
    card.className = "meta-card";
    card.innerHTML = `
      <div class="meta-header">
        <span class="meta-icone">${meta.icone}</span>
        <span class="meta-nome">${meta.nome}</span>
      </div>
      <div class="meta-numeros">
        <span class="meta-atual">${meta.atual}</span>
        <span class="meta-separador">/</span>
        <span class="meta-alvo">${meta.meta}</span>
      </div>
      <div class="barra-fundo">
        <div class="barra-preenchida" style="width: ${larguraBarra}%"></div>
      </div>
      <div class="meta-pct">${pct}%</div>
    `;
    container.appendChild(card);
  });
}

function renderResumo() {
  const totalAtual = CONFIG.metas.reduce((s, m) => s + m.atual, 0);
  const totalMeta = CONFIG.metas.reduce((s, m) => s + m.meta, 0);
  const pctGeral = totalMeta > 0 ? Math.round((totalAtual / totalMeta) * 100) : 0;
  const larguraBarra = Math.min(100, pctGeral);

  document.getElementById("resumo-pct").textContent = pctGeral + "%";
  document.getElementById("resumo-barra").style.width = larguraBarra + "%";
}

function renderFiltros() {
  const container = document.getElementById("filtros-container");
  const categorias = [{ id: "todos", nome: "Todos" }, ...CONFIG.categoriasPrint.map(c => ({ id: c.id, nome: c.nome }))];

  container.innerHTML = "";
  categorias.forEach((cat, i) => {
    const btn = document.createElement("button");
    btn.className = "filtro-btn" + (i === 0 ? " ativo" : "");
    btn.textContent = cat.nome;
    btn.dataset.categoria = cat.id;
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filtro-btn").forEach(b => b.classList.remove("ativo"));
      btn.classList.add("ativo");
      renderPrints(cat.id);
    });
    container.appendChild(btn);
  });
}

function renderPrints(categoria) {
  const container = document.getElementById("prints-container");
  const vazio = document.getElementById("prints-vazio");
  container.innerHTML = "";

  const lista = categoria === "todos"
    ? CONFIG.prints
    : CONFIG.prints.filter(p => p.categoria === categoria);

  if (lista.length === 0) {
    vazio.style.display = "block";
    return;
  }
  vazio.style.display = "none";

  lista.slice().reverse()
    .sort((a, b) => (b.destaque ? 1 : 0) - (a.destaque ? 1 : 0))
    .forEach(print => {
    const catInfo = CONFIG.categoriasPrint.find(c => c.id === print.categoria);
    const card = document.createElement("div");
    card.className = "print-card" + (print.destaque ? " print-destaque" : "");

    const imagemHtml = print.categoria === "info"
      ? `
      <div class="print-antesdepois-imgs">
        <div class="print-img-wrap">
          <span class="print-img-label">Antes</span>
          <img src="${print.arquivoAntes}" alt="Antes" loading="lazy" class="print-img">
        </div>
        <div class="print-img-wrap">
          <span class="print-img-label">Depois</span>
          <img src="${print.arquivoDepois}" alt="Depois" loading="lazy" class="print-img">
        </div>
      </div>`
      : `<img src="${print.arquivo}" alt="${print.descricao || ''}" loading="lazy" class="print-img">`;

    card.innerHTML = `
      ${print.destaque ? `<span class="print-destaque-selo">⭐ Destaque do Treino</span>` : ""}
      ${imagemHtml}
      <div class="print-info">
        <span class="print-categoria">${catInfo ? catInfo.icone + " " + catInfo.nome : print.categoria}</span>
        <span class="print-data">${print.data || ""}</span>
        ${print.descricao ? `<p class="print-desc">${print.descricao}</p>` : ""}
      </div>
    `;
    container.appendChild(card);
  });
}

function setupLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("print-img")) {
      lightboxImg.src = e.target.src;
      lightbox.classList.add("aberto");
    }
  });

  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("aberto");
    lightboxImg.src = "";
  });
}
