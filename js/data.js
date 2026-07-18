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
    { id: "treinos", nome: "Treinos", atual: 10, meta: 20, icone: "🏋️" },
    { id: "patrulhas", nome: "Patrulhas", atual: 0, meta: 10, icone: "🛡️" }
  ],

  // -----------------------------------------------------------
  // CATEGORIAS DOS PRINTS
  // Não precisa mexer aqui. São os 2 filtros que aparecem na
  // galeria de prints do site.
  // -----------------------------------------------------------
  categoriasPrint: [
    { id: "treinos", nome: "Treinos", icone: "🏋️" },
    { id: "operacoes", nome: "Operações", icone: "🚨" }
  ],

  // -----------------------------------------------------------
  // SEUS PRINTS
  // Para adicionar um print novo:
  //   1. Coloque o arquivo de imagem dentro da pasta "fotos"
  //   2. Copie uma linha do exemplo abaixo e cole antes do "]"
  //   3. "categoria" tem que ser um destes: treinos, operacoes
  //   4. "antes" = como estava a situação antes
  //      "depois" = o que aconteceu / resultado
  //
  // Exemplo (remova as barras // do começo das linhas para ativar):
  // { categoria: "treinos", arquivo: "fotos/treino1.png", data: "18/07/2026", antes: "Efetivo com dificuldade na formação de abordagem", depois: "Formação treinada e aprovada por todos os presentes" },
  // -----------------------------------------------------------
  prints: [

  ]
};
