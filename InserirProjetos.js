// -- PROJETOS

// Inserindo Projetos
db.projetos.insertMany([
    {
        "_id": ObjectId(),
        "status": "Em andamento",
        "descricao": "Prédio de 6 andares",
        "orcamento": 4000000,
        "endereco": {
            "rua": "Rua das Flores",
            "numero": 123,
            "bairro": "Centro",
            "cidade": "São Paulo",
            "estado": "SP",
            "cep": "01000-000"
        },
        "materiais": [
            {
                "_id": ObjectId("651a4f8e9a3d2d5e2f2f2e01"),
                "descricao": "Cimento",
                "quantidade": 80
            },
            {
                "_id": ObjectId("651a4f8e9a3d2d5e2f2f2e02"),
                "descricao": "Areia",
                "quantidade": 150
            },
            {
                "_id": ObjectId("651a4f8e9a3d2d5e2f2f2e04"),
                "descricao": "Tijolo",
                "quantidade": 100
            }
        ],
        "engenheiros": [
            { 
                "_id": ObjectId("603d2d5e4e2f2e4d4f1c1f10"),
                "nome": "João Souza" 
            },
            { 
                "_id": ObjectId("603d2d5e4e2f2e4d4f1c1f12"),
                "nome": "Carlos Almeida" 
            }
        ],
    },
    {
        "_id": ObjectId(),
        "status": "Concluído",
        "descricao": "Casa de primeiro andar",
        "orcamento": 500000,
        "endereco": {
            "rua": "Avenida Brasil",
            "numero": 456,
            "bairro": "Jardins",
            "cidade": "Rio de Janeiro",
            "estado": "RJ",
            "cep": "20000-000"
        },
        "materiais": [
            {
                "_id": ObjectId("651a4f8e9a3d2d5e2f2f2e03"),
                "descricao": "Tinta",
                "quantidade": 5
            },
            {
                "_id": ObjectId("651a4f8e9a3d2d5e2f2f2e06"),
                "descricao": "Argamassa",
                "quantidade": 6
            }
        ],
        "engenheiros": [
            { 
                "_id": ObjectId("603d2d5e4e2f2e4d4f1c1f12"),
                "nome": "Carlos Almeida" 
            }
        ],
    },
    {
        "_id": ObjectId(),
        "status": "Planejado",
        "descricao": "Casa média",
        "orcamento": 300000,
        "endereco": {
            "rua": "Praça Central",
            "numero": 789,
            "bairro": "Centro",
            "cidade": "Curitiba",
            "estado": "PR",
            "cep": "80000-000"
        },
        "materiais": [
            {
                "_id": ObjectId("651a4f8e9a3d2d5e2f2f2e06"),
                "descricao": "Argamassa",
                "quantidade": 50
            },
            {
                "_id": ObjectId("651a4f8e9a3d2d5e2f2f2e04"),
                "descricao": "Tijolo",
                "quantidade": 500
            },
        ],
        "engenheiros": [
            {
                "_id": ObjectId("603d2d5e4e2f2e4d4f1c1f11"),
                "nome": "Maria Ferreira" 
            },
            {
                "_id": ObjectId("603d2d5e4e2f2e4d4f1c1f14"),
                "nome": "Lucas Pereira" 
            }
        ],
    },
    {
        "_id": ObjectId(),
        "status": "Em andamento",
        "descricao": "Escola",
        "orcamento": 800000,
        "endereco": {
            "rua": "Rua dos Estudantes",
            "numero": 321,
            "bairro": "Vila Nova",
            "cidade": "Porto Alegre",
            "estado": "RS",
            "cep": "90000-000"
        },
        "materiais": [
            {
                "_id": ObjectId("651a4f8e9a3d2d5e2f2f2e01"),
                "descricao": "Cimento",
                "quantidade": 70
            },
            {
                "_id": ObjectId("651a4f8e9a3d2d5e2f2f2e05"),
                "descricao": "Telha",
                "quantidade": 50
            }
        ],
        "engenheiros": [
            { 
                "_id": ObjectId("603d2d5e4e2f2e4d4f1c1f11"),
                "nome": "Maria Ferreira" 
            }
        ],
    },
    {
        "_id": ObjectId(),
        "status": "Concluído",
        "descricao": "Casa pequena",
        "orcamento": 120000,
        "endereco": {
            "rua": "Rua das Saúde",
            "numero": 654,
            "bairro": "Hospitalar",
            "cidade": "Belo Horizonte",
            "estado": "MG",
            "cep": "30000-000"
        },
        "materiais": [
            {
                "_id": ObjectId("651a4f8e9a3d2d5e2f2f2e06"),
                "descricao": "Argamassa",
                "quantidade": 40
            },
            {
                "_id": ObjectId("651a4f8e9a3d2d5e2f2f2e02"),
                "descricao": "Areia",
                "quantidade": 30
            }
        ],
        "engenheiros": [
            { 
                "_id": ObjectId("603d2d5e4e2f2e4d4f1c1f13"),
                "nome": "Ana Costa" 
            }
        ]
    }
]);
