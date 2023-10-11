import { ScrollView, Box, VStack } from "native-base";
import { Titulo } from "../componentes/Titulo";
import { CardConsulta } from "../componentes/CardConsulta";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Botao } from "../componentes/Botao";
import { useState } from "react";
import { buscarEspecialistaPorEstado } from "../servicos/EspecialistaServico";

interface Especialista {
  nome: string;
  imagem: string;
  especialidade: string;
  id: string;
}

export default function Explorar({ navigation }) {
  const [estado, setEstado] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [resultadoBusca, setResultadoBusca] = useState([]);

  async function buscar() {
    if (!estado || !especialidade) return null;

    const resultado = await buscarEspecialistaPorEstado(estado, especialidade);
    if (resultado) {
      setResultadoBusca(resultado);
      console.log(resultado);
    }
  }

  async function agendar() {}

  return (
    <ScrollView p={3} flex={1}>
      <Box
        w="100%"
        borderRadius="lg"
        p={3}
        mt={10}
        shadow="1"
        borderRightRadius="md"
      >
        <EntradaTexto
          placeholder="Digite a especialidade"
          value={especialidade}
          onChangeText={setEspecialidade}
        />
        <EntradaTexto
          placeholder="Digite a sua localização"
          value={estado}
          onChangeText={setEstado}
        />
        <Botao label="Buscar" marginTop={3} mb={0} onPress={() => buscar()} />
      </Box>
      <Titulo color="blue.500">Resultado da Busca</Titulo>

      {resultadoBusca.map((especialista: Especialista, index) => (
        <VStack
          flex={1}
          w="100%"
          alignItems="flex-start"
          bgColor="white"
          key={index}
        >
          <CardConsulta
            nome={especialista.nome}
            especialidade={especialista.especialidade}
            foto={especialista.imagem}
            onPress={() =>
              navigation.navigate("Agendamento", {
                especialistaID: especialista.id,
              })
            }
            centralizado
          />
        </VStack>
      ))}
    </ScrollView>
  );
}
