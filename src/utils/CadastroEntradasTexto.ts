const secoes = [
  {
    id: 1,
    titulo: "Insira alguns dados básicos:",
    entradaTexto: [
      {
        id: 1,
        label: "Nome",
        placeholder: "Insira seu nome completo",
      },
      {
        id: 2,
        label: "E-mail",
        placeholder: "Insira seu endereço de e-mail",
      },
      {
        id: 3,
        label: "Crie sua Senha",
        placeholder: "Insira sua senha",
        secret: true,
      },
      {
        id: 4,
        label: "Repita sua Senha",
        placeholder: "Repita senha",
        secret: true,
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
      },
      {
        id: 2,
        label: "Endereço",
        placeholder: "Insira seu endereço",
      },
      {
        id: 3,
        label: "Número",
        placeholder: "Insira o número",
      },
      {
        id: 4,
        label: "Complemento",
        placeholder: "Insira o complemento",
      },
      {
        id: 5,
        label: "Telefone",
        placeholder: "(00) 98765-4321",
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
      {
        id: 8,
        value: "Não tenho plano",
      },
    ],
  },
];

export { secoes };
