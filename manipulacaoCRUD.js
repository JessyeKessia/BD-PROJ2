// Operações de manipulação

// Consultas com pelo menos filtros diversos (IN, GT, etc), sem projeção

// Consulta com filtros diversos (IN, GT, etc) e sem projeção 1: Retorna todos os projetos que tem na sua descrição casa e estão com um orcamento maior que R$ 120.000
db.projetos.find({
    descricao: { $regex: /Casa/i }, 
    orcamento: { $gt: 120000 }
})

// Consulta com filtros diversos (IN, GT, etc) e sem projeção 2: Retorna todos os materiais em que o estoque está acima de 30000.
db.materiais.find({
    "estoque": { "$gt": 30000 }
});

// Consulta com Projeção 1: Retorna a descrição do projeto e o nome dos engenheiros que estão cuidado dos projetos "Em andamento"
db.projetos.find(
    { status: "Em andamento" },  
    { descricao: 1, "engenheiros.nome": 1, _id: 0 }  
);

// Consulta com Projeção 2: Retorna a descrição e o endereço dos projetos localizados em São Paulo
db.projetos.find(
    { "endereco.cidade": "São Paulo" }, 
    { descricao: 1, "endereco": 1, _id: 0 }  
);

// Consulta com apenas projeção e sem filtro: Retorna a descrição dos produtos e seu preço
db.materiais.find({}, { descricao: 1, preco: 1, _id: 0 });

// Consulta com acesso a elemento de array: retorna todos os projetos que o engenheiro Calors Almeida trabalha como primeiro engenheiro;
db.projetos.find({
    "engenheiros.0.nome": "Carlos Almeida"
});

// Consulta com acesso a estrutura/objeto embutido: retorna os projetos que tem na sua descrição o material "Cimento" com a quantidade necessária para a construção.
db.projetos.find(
    { "materiais.descricao": "Cimento" },
    { "materiais.descricao": 1, "materiais.quantidade.$": 1, _id: 0 }
)

// Consulta com sort, limit, filtro e projeções: retorna 3 projetos que tenham o orçamento maior que R$ 100.000, mostrando a sua descrição, o seu orçamento e os materiais necessário para a sua construção. Além disso, ordena pelo orçamento, do mais barato ao mais caro.
db.projetos.find(
    { "orcamento": { $gt: 100000 } },
    { "descricao": 1, "orcamento": 1, "materiais.descricao": 1, _id: 0 } 
).sort({ "orcamento": -1 }) 
 .limit(3);




