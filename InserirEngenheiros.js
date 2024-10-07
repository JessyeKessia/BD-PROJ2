// -- ENGENHEIRO

// Inserindo documentos na coleção engenheiros
db.engenheiros.insertMany([
    {
        "_id": ObjectId("603d2d5e4e2f2e4d4f1c1f10"), 
        "nome": "João Souza",
        "telefone": ["11987654321", "11991234567"],
        "especialidade": "Hidráulica"
    },
    {
        "_id": ObjectId("603d2d5e4e2f2e4d4f1c1f11"), 
        "nome": "Maria Ferreira",
        "telefone": ["11999887766", "11993456789"],
        "especialidade": "Geotecnia"
    },
    {
        "_id": ObjectId("603d2d5e4e2f2e4d4f1c1f12"), 
        "nome": "Carlos Almeida",
        "telefone": ["11999999999", "11988888888", "11988698878"],
        "especialidade": "Estruturas",
    },
    {
        "_id": ObjectId("603d2d5e4e2f2e4d4f1c1f13"),
        "nome": "Ana Costa",
        "telefone": ["11977777777"]
    },
    {
        "_id": ObjectId("603d2d5e4e2f2e4d4f1c1f14"), 
        "nome": "Lucas Pereira",
        "telefone": ["11977777777", "11966666666"],
        "especialidade": "Saneamento"
    }
]);
