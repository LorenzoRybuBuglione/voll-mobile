import { ScrollView, Divider } from "native-base";
import { Botao } from "../componentes/Botao";
import { CardConsulta } from "../componentes/CardConsulta";
import { Titulo } from "../componentes/Titulo";

export default function Consultas() {
  return (
    <ScrollView p={3}>
      <Titulo color="blue.500">Minhas Consultas</Titulo>
      <Botao label="Agendar Nova Consulta" marginTop={5} mb={5} />
      <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Próximas Consultas</Titulo>
      <CardConsulta
        nome="Dr. André Cunha"
        especialidade="Cardiologista"
        data="20/10/2023"
        foto="https://github.com/LorenzoRybuBuglione.png"
        foiAgendado
      />
      <Divider mt={5}/>

      <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Consultas Passadas</Titulo>
      <CardConsulta
        nome="Dr. André Cunha"
        especialidade="Cardiologista"
        data="20/10/2023"
        foto="https://github.com/LorenzoRybuBuglione.png"
        foiAtendido
      />
      <CardConsulta
        nome="Dr. André Cunha"
        especialidade="Cardiologista"
        data="20/10/2023"
        foto="https://github.com/LorenzoRybuBuglione.png"
        foiAtendido
      />
      <CardConsulta
        nome="Dr. André Cunha"
        especialidade="Cardiologista"
        data="20/10/2023"
        foto="https://github.com/LorenzoRybuBuglione.png"
        foiAtendido
      />
    </ScrollView>
  );
}
