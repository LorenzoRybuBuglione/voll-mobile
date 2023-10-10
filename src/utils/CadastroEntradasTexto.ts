const secoes = [
  {
    id: 1,
    titulo: "Insira alguns dados básicos:",
    entradaTexto: [
      {
        id: 1,
        label: "Nome",
        placeholder: "Insira seu nome completo",
        name: "nome",
      },
      {
        id: 2,
        label: "E-mail",
        placeholder: "Insira seu endereço de e-mail",
        name: "email",
      },
      {
        id: 3,
        label: "Crie sua Senha",
        placeholder: "Insira sua senha",
        secret: true,
        name: "senha",
      },
      {
        id: 4,
        label: "Repita sua Senha",
        placeholder: "Repita senha",
        secret: true,
        name: "confirmaSenha",
      },
      {
        id: 5,
        label: "CPF",
        placeholder: "Insira seu CPF",
        name: "cpf",
      },
      {
        id: 6,
        label: "Foto de Perfil",
        placeholder: "Link da foto",
        name: "imagem",
      },
    ],
  },
  {
    id: 2,
    titulo: "Agora, mais alguns dados sobre você:",
    entradaTexto: [
      {
        id: 1,
        label: "CEP",
        placeholder: "Insira seu CEP",
        name: "cep",
      },
      {
        id: 2,
        label: "Rua",
        placeholder: "Insira seu endereço",
        name: "rua",
      },
      {
        id: 3,
        label: "Número",
        placeholder: "Insira o número",
        name: "numero",
      },
      {
        id: 4,
        label: "Complemento",
        placeholder: "Insira o complemento",
        name: "complemento",
      },
      {
        id: 5,
        label: "Telefone",
        placeholder: "(00) 98765-4321",
        name: "telefone",
      },
      {
        id: 5,
        label: "Estado",
        placeholder: "Seu Estado",
        name: "estado",
      },
    ],
  },
  {
    id: 3,
    titulo: "Para finalizar, quais são os seus planos de saúde?",
    entradaTexto: [],
    checkbox: [
      {
        id: 1,
        value: "Sulamerica",
      },
      {
        id: 2,
        value: "Unimed",
      },
      {
        id: 3,
        value: "Bradesco",
      },
      {
        id: 4,
        value: "Amil",
      },
      {
        id: 5,
        value: "Biosaúde",
      },
      {
        id: 6,
        value: "Biovida",
      },
      {
        id: 7,
        value: "Outros",
      },
    ],
  },
];

export { secoes };
