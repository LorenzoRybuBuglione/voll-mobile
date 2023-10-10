import { VStack, Text, ScrollView, Avatar, Divider } from "native-base";
import { useEffect, useState } from "react";
import { Titulo } from "../componentes/Titulo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { pegarDadosPaciente } from "../servicos/PacienteServico";
import { Paciente } from "../Interfaces/Paciente";
import { Botao } from "../componentes/Botao";

export default function Perfil({ navigation }) {
  const [dadosPaciente, setDadosPaciente] = useState({} as Paciente);

  useEffect(() => {
    async function dadosPaciente() {
      const pacienteId = await AsyncStorage.getItem("pacienteID");
      if (!pacienteId) return null;
      const resultado = await pegarDadosPaciente(pacienteId);
      if (resultado) {
        setDadosPaciente(resultado);
        console.log(resultado);
      }
    }
    dadosPaciente();
  }, []);

  function deslogar() {
    AsyncStorage.removeItem("token");
    AsyncStorage.removeItem("pacienteID");
    navigation.replace("Login");
  }

  return (
    <ScrollView flex={1}>
      <VStack flex={1} alignItems="center" p={5}>
        <Titulo color="blue.500">Meu Perfil</Titulo>
        <Avatar
          source={{ uri: "https://github.com/LorenzoRybuBuglione.png" }}
          mt={5}
          size="xl"
        />
        <Titulo color="blue.500">Informaçōes Pessoais</Titulo>
        <Titulo fontSize="lg" mb={1}>
          {dadosPaciente?.nome}
        </Titulo>
        <Text>{dadosPaciente?.email}</Text>
        <Text>{dadosPaciente?.endereco?.estado}</Text>
        <Divider />
        <Titulo color="blue.500" mb={1}>
          Planos de Saúde
        </Titulo>
        {dadosPaciente?.planosSaude?.map((plano, index) => (
          <Text key={index}>{plano}</Text>
        ))}
        <Botao label="Deslogar" onPress={deslogar} />
      </VStack>
    </ScrollView>
  );
}
