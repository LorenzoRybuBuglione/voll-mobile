import { ScrollView, Image, Box, Checkbox, Text } from "native-base";
import { useState } from "react";
import Logo from "./assets/Logo.png";
import { Botao } from "./componentes/Botao";
import { EntradaTexto } from "./componentes/EntradaTexto";
import { Titulo } from "./componentes/Titulo";
import { secoes } from "./utils/CadastroEntradasTexto";

export default function Cadastro() {
  const [numSecao, setNumSecao] = useState(0);


  function avancarSecao() {
    if (numSecao < secoes.length - 1) {
      setNumSecao(numSecao + 1);
    } else {
    }
  }

  function voltarSecao() {
    if (numSecao > 0) {
      setNumSecao(numSecao - 1);
    } else {
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
              label={entrada.label}
              placeholder={entrada.placeholder}
              secret={entrada.secret}
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
              <Checkbox key={item.id} value={item.value}>
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
        label="Avançar"
        marginTop={numSecao === 0 ? 10 : 4}
        mb={20}
        onPress={() => avancarSecao()}
      />
    </ScrollView>
  );
}
