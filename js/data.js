// ============================================================
// ARQUIVO DE DADOS DO SITE
// É AQUI QUE VOCÊ ATUALIZA SUAS METAS E ADICIONA SEUS PRINTS.
// Não precisa mexer em mais nenhum outro arquivo do site.
// ============================================================

const CONFIG = {
  // Nome do batalhão (aparece no topo do site)
  batalhao: "BATALHÃO CHOQUE 1BTL",

  // Subtítulo (aparece embaixo do nome do batalhão)
  subtitulo: "Painel de Metas Individuais",

  // Seu nome / patente (aparece no site)
  efetivo: "Wesley",

  // -----------------------------------------------------------
  // SUAS METAS
  // Para atualizar seu progresso, troque apenas o número "atual".
  // Para mudar o objetivo, troque o número "meta".
  // -----------------------------------------------------------
  metas: [
    { id: "abates", nome: "Abates de Traficantes", atual: 91, meta: 15, icone: "🎯" },
    { id: "prisoes", nome: "Prisões", atual: 137, meta: 25, icone: "🚔" },
    { id: "treinos", nome: "Treinos", atual: 10, meta: 20, icone: "🏋️" }
  ],

  // -----------------------------------------------------------
  // CATEGORIAS DOS PRINTS
  // Não precisa mexer aqui. São os 3 filtros que aparecem na
  // galeria de prints do site.
  // -----------------------------------------------------------
  categoriasPrint: [
    { id: "treinos", nome: "Treinos", icone: "🏋️" },
    { id: "operacoes", nome: "Operação/Blitz", icone: "🚨" },
    { id: "info", nome: "Info", icone: "📊" }
  ],

  // -----------------------------------------------------------
  // SEUS PRINTS
  // Existem 2 formatos de linha diferentes, dependendo da categoria:
  //
  // ── Para "treinos" ou "operacoes" (1 print só) ──────────────
  //   1. Coloque o arquivo de imagem dentro da pasta "fotos"
  //   2. Cole uma linha assim antes do "]":
  //      { categoria: "treinos", arquivo: "fotos/treino1.png", data: "18/07/2026", descricao: "Treino de abordagem" },
  //   3. "destaque: true" é opcional — só coloque quando você foi
  //      o destaque daquele treino. Adiciona o selo "⭐ Destaque do
  //      Treino" e o print aparece primeiro na categoria Treinos.
  //      Exemplo com destaque:
  //      { categoria: "treinos", arquivo: "fotos/treino2.png", data: "18/07/2026", descricao: "Treino de abordagem", destaque: true },
  //
  // ── Para "info" (comprovar números — 2 prints: antes e depois) ──
  //   1. Coloque os 2 arquivos de imagem dentro da pasta "fotos"
  //      (o print de ANTES e o print de DEPOIS das suas informações)
  //   2. Cole uma linha assim antes do "]":
  //      { categoria: "info", arquivoAntes: "fotos/antes1.png", arquivoDepois: "fotos/depois1.png", data: "18/07/2026", descricao: "Comprovação de abates e prisões" },
  // -----------------------------------------------------------
  prints: [

  ]
};
