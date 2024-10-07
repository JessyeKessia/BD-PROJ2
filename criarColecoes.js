// Criando a coleção 'projetos'
db.createCollection("projetos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["status", "descricao", "orcamento", "endereco", "materiais", "engenheiros"],
      properties: {
        _id: {
          bsonType: "objectId",
          description: "Chave primária do projeto, campo obrigatório"
        },
        status: {
          bsonType: "string",
          description: "Campo status obrigatório"
        },
        descricao: {
          bsonType: "string",
          description: "Campo descrição obrigatório"
        },
        orcamento: {
          bsonType: "int",
          description: "Campo orçamento obrigatório"
        },
        endereco: {
          bsonType: "object",
          required: ["rua", "numero", "bairro", "cidade", "estado", "cep"],
          properties: {
            rua: {
              bsonType: "string",
              description: "Campo rua obrigatório"
            },
            numero: {
              bsonType: "int",
              description: "Campo número obrigatório"
            },
            bairro: {
              bsonType: "string",
              description: "Campo bairro obrigatório"
            },
            cidade: {
              bsonType: "string",
              description: "Campo cidade obrigatório"
            },
            estado: {
              bsonType: "string",
              description: "Campo estado obrigatório"
            },
            cep: {
              bsonType: "string",
              description: "Campo CEP obrigatório"
            }
          }
        },
        materiais: {
          bsonType: "array",
          description: "Lista de materiais necessários para o projeto",
          items: {
            bsonType: "object",
            required: ["_id", "descricao", "quantidade"],
            properties: {
              _id: {
                bsonType: "objectId",
                description: "Chave primária do material, campo obrigatório"
              },
              descricao: {
                bsonType: "string",
                description: "Nome do material, campo obrigatório"
              },
              quantidade: {
                bsonType: "int",
                description: "Quantidade do material, campo obrigatório"
              }
            }
          }
        },
        engenheiros: {
          bsonType: "array",
          description: "Lista de engenheiros envolvidos no projeto",
          items: {
            bsonType: "object",
            required: ["_id", "nome"],
            properties: {
              _id: {
                bsonType: "objectId",
                description: "Chave primária do engenheiro, campo obrigatório"
              },
              nome: {
                bsonType: "string",
                description: "Nome do engenheiro, campo obrigatório"
              }
            }
          }
        }
      }
    }
  }
});
// Criando a coleção 'materiais'
db.createCollection("materiais", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "descricao", "preco", "estoque"],
      properties: {
        _id: {
          bsonType: "objectId",
          description: "Chave primária do material, campo obrigatório"
        },
        descricao: {
          bsonType: "string",
          description: "Descrição do material, campo obrigatório"
        },
        preco: {
          bsonType: "double",
          description: "Preço do material, campo obrigatório"
        },
        estoque: {
          bsonType: "int",
          description: "Quantidade em estoque do material, campo obrigatório"
        }
      }
    }
  }
});
// Criando a coleção 'engenheiros'
db.createCollection("engenheiros", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "nome", "telefone"],
      properties: {
        _id: {
          bsonType: "objectId",
          description: "Chave primária do engenheiro, campo obrigatório"
        },
        nome: {
          bsonType: "string",
          description: "Nome do engenheiro, campo obrigatório"
        },
        telefone: {
          bsonType: "array",
          description: "Lista de números de telefone do engenheiro, campo obrigatório",
          items: {
            bsonType: "string",
            description: "Número de telefone válido"
          }
        },
        especialidade: {
          bsonType: "string",
          description: "Especialidade do engenheiro, campo opcional"
        }
      }
    }
  }
});


