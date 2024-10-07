// -- ÍNDICES

// Um índice para o campo preco para filtrar pelo preço.
db.materiais.createIndex({ preco: 1 })

// Um índice para o campo status para otimizar buscas por status de projeto.
db.projetos.createIndex({ status: 1 });