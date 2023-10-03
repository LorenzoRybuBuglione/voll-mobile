import { VStack, Text, ScrollView, Avatar, Divider } from "native-base";
import { Titulo } from "../componentes/Titulo";

export default function Perfil() {
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
          Lorenzo Rybu Buglione
        </Titulo>
        <Text>6 de Junho de 2000</Text>
        <Text>São Paulo</Text>
        <Divider />
        <Titulo color="blue.500" mb={1}>
          Histórico Médico
        </Titulo>
        <Text>Sinusite</Text>
        <Text>Bronquite</Text>
      </VStack>
    </ScrollView>
  );
}
