import { ScrollView, Divider } from "native-base";
import { useEffect, useState } from "react";
import { Botao } from "../componentes/Botao";
import { CardConsulta } from "../componentes/CardConsulta";
import { Titulo } from "../componentes/Titulo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { pegarConsultasPaciente } from "../servicos/PacienteServico";

interface Especialista {
  id: string;
  nome: string;
  imagem: string;
  especialidade: string;
}

interface Consulta {
  id: string;
  data: string;
  especialista: Especialista;
}

export default function Consultas() {
  const [consultasProximas, setConsultasProximas] = useState<Consulta[]>([]);
  const [consultasPassadas, setConsultasPassadas] = useState<Consulta[]>([]);

  useEffect(() => {
    async function pegarConsultas() {
      const pacienteID = AsyncStorage.getItem("pacienteID");
      if (!pacienteID) return;

      const todasConsultas: Consulta[] = await pegarConsultasPaciente(
        await pacienteID
      );

      const agora = new Date();

      const proximas = todasConsultas.filter(
        (consulta) => new Date(consulta.data) > agora
      );
      const passadas = todasConsultas.filter(
        (consulta) => new Date(consulta.data) <= agora
      );

      setConsultasProximas(proximas);
      setConsultasPassadas(passadas);
    }
    pegarConsultas();
  }, []);

  return (
    <ScrollView p={3}>
      <Titulo color="blue.500">Minhas Consultas</Titulo>
      <Botao label="Agendar Nova Consulta" marginTop={5} mb={5} />
      <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>
        Próximas Consultas
      </Titulo>

      {consultasProximas?.map((consulta) => {
        <CardConsulta
          key={consulta.id}
          nome={consulta?.especialista?.nome}
          especialidade={consulta?.especialista?.especialidade}
          data={consulta?.data}
          foto={consulta?.especialista?.imagem}
          foiAgendado
        />;
      })}

      <Divider mt={5} />

      <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>
        Consultas Passadas
      </Titulo>
      

      {consultasPassadas?.map((consulta) => {
        <CardConsulta
          key={consulta.id}
          nome={consulta?.especialista?.nome}
          especialidade={consulta?.especialista?.especialidade}
          data={consulta?.data}
          foto={consulta?.especialista?.imagem}
          foiAtendido
        />;
      })}
    </ScrollView>
  );
}
