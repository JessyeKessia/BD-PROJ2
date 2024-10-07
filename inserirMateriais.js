// -- MATERIAIS

// Inserindo documentos na coleção materiais
db.materiais.insertMany([
    {
        "_id": ObjectId("651a4f8e9a3d2d5e2f2f2e01"), 
        "descricao": "Cimento",
        "preco": 30.50,
        "estoque": 50000
    },
    {
        "_id": ObjectId("651a4f8e9a3d2d5e2f2f2e02"), 
        "descricao": "Areia",
        "preco": 45.70,
        "estoque": 20000
    },
    {
        "_id": ObjectId("651a4f8e9a3d2d5e2f2f2e03"), 
        "descricao": "Tinta",
        "preco": 50.90,
        "estoque": 15000
    },
    {
        "_id": ObjectId("651a4f8e9a3d2d5e2f2f2e04"), 
        "descricao": "Tijolo",
        "preco": 3.80,
        "estoque": 50000
    },
    {
        "_id": ObjectId("651a4f8e9a3d2d5e2f2f2e05"), 
        "descricao": "Telha",
        "preco": 30.70,
        "estoque": 50000
    },
    {
        "_id": ObjectId("651a4f8e9a3d2d5e2f2f2e06"), 
        "descricao": "Argamassa",
        "preco": 20.30,
        "estoque": 35000
    }
]);
