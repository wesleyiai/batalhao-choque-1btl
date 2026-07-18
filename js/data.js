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
    { id: "abates",    nome: "Abates de Traficantes", atual: 0, meta: 20, icone: "🎯" },
    { id: "prisoes",   nome: "Prisões",                atual: 0, meta: 15, icone: "🚔" },
    { id: "treinos",   nome: "Treinos",                atual: 0, meta: 10, icone: "🏋️" },
    { id: "patrulhas", nome: "Patrulhas",               atual: 0, meta: 10, icone: "🛡️" }
  ],

  // -----------------------------------------------------------
  // SEUS PRINTS
  // Para adicionar um print novo:
  //   1. Coloque o arquivo de imagem dentro da pasta "fotos"
  //   2. Copie uma linha do exemplo abaixo e cole antes do "]"
  //   3. "categoria" tem que ser um destes: abates, prisoes, treinos, patrulhas
  //
  // Exemplo (remova as barras // do começo das linhas para ativar):
  // { categoria: "abates", arquivo: "fotos/abate1.png", data: "18/07/2026", descricao: "Abate na base do porto" },
  // -----------------------------------------------------------
  prints: [

  ]
};
