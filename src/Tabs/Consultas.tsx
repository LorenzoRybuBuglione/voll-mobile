import { VStack, Text } from "native-base";
import { CardConsulta } from "../componentes/CardConsulta";
import { Titulo } from "../componentes/Titulo";

export default function Consultas() {
  return (
    <VStack p={3}>
      <Titulo color="blue.500">Minhas Consultas</Titulo>
      <CardConsulta
        nome="Dr. André Cunha"
        especialidade="Cardiologista"
        data="20/10/2023"
        foto="https://github.com/LorenzoRybuBuglione.png"
      foiAtendido
      foiAgendado
      />
    </VStack>
  );
}
