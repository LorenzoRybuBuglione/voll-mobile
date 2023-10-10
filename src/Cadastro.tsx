import { ScrollView, Image, Box, Checkbox, Text } from "native-base";
import { useState } from "react";
import Logo from "./assets/Logo.png";
import { Botao } from "./componentes/Botao";
import { EntradaTexto } from "./componentes/EntradaTexto";
import { Titulo } from "./componentes/Titulo";
import { cadastrarPaciente } from "./servicos/PacienteServico";
import { secoes } from "./utils/CadastroEntradasTexto";

export default function Cadastro() {
  const [numSecao, setNumSecao] = useState(0);
  const [dados, setDados] = useState({} as any);
  const [planos, setPlanos] = useState([] as number[]);

  function avancarSecao() {
    if (numSecao < secoes.length - 1) {
      setNumSecao(numSecao + 1);
    } else {
      cadastrar();
      console.log(dados);
      console.log(planos);
    }
  }

  function voltarSecao() {
    if (numSecao > 0) {
      setNumSecao(numSecao - 1);
    } else {
    }
  }

  function atualizarDados(id: string, valor: string) {
    setDados({ ...dados, [id]: valor });
  }

  async function cadastrar() {
    const resultado = await cadastrarPaciente({
      cpf: dados.cpf,
      nome: dados.nome,
      email: dados.email,
      endereco: {
        cep: dados.cep,
        rua: dados.rua,
        numero: dados.numero,
        estado: dados.estado,
        complemento: dados.complemento,
      },
      senha: dados.senha,
      telefone: dados.telefone,
      possuiPlanoSaude: planos.length > 0,
      planosSaude: planos,
      imagem: dados.imagem,
    });
    if (!resultado) {
      console.log("Erro ao fazer cadastro");
    }
  }

  return (
    <ScrollView flex={1} padding={50}>
      <Image source={Logo} alt="Logo Voll" alignSelf="center" />
      <Titulo>{secoes[numSecao].titulo}</Titulo>
      <Box>
        {secoes[numSecao].entradaTexto.map((entrada) => {
          return (
            <EntradaTexto
              key={entrada.label}
              label={entrada.label}
              placeholder={entrada.placeholder}
              secret={entrada.secret}
              value={dados[entrada.name]}
              onChangeText={(text) => atualizarDados(entrada.name, text)}
            />
          );
        })}
      </Box>

      {secoes[numSecao].checkbox && (
        <Box>
          <Text color="blue.800" fontSize="md" fontWeight="bold" mt={2} mb={2}>
            Selecione o plano:
          </Text>
          {secoes[numSecao].checkbox.map((item) => {
            return (
              <Checkbox
                key={item.id}
                value={item.value}
                onChange={() => {
                  setPlanos((planosAnteriores) => {
                    if (planosAnteriores.includes(item.id)) {
                      return planosAnteriores.filter((id) => id !== item.id);
                    }
                    return [...planosAnteriores, item.id];
                  });
                }}
                isChecked={planos.includes(item.id)}
              >
                {item.value}
              </Checkbox>
            );
          })}
        </Box>
      )}

      {numSecao > 0 && (
        <Botao
          label="Voltar"
          bgColor="gray.400"
          onPress={() => voltarSecao()}
        />
      )}
      <Botao
        label={numSecao == 2 ? "Finalizar" : "Avançar"}
        marginTop={numSecao === 0 ? 10 : 4}
        mb={20}
        onPress={() => avancarSecao()}
      />
    </ScrollView>
  );
}
