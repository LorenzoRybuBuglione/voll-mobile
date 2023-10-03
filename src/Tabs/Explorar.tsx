import { ScrollView, Box } from "native-base";
import { Titulo } from "../componentes/Titulo";
import { CardConsulta } from "../componentes/CardConsulta";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Botao } from "../componentes/Botao";

export default function Explorar() {
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
        <EntradaTexto placeholder="Digite a especialidade" />
        <EntradaTexto placeholder="Digite a sua localização" />
        <Botao label="Buscar" marginTop={3} mb={0} />
      </Box>
      <Titulo color="blue.500">Resultado da Busca</Titulo>
      <CardConsulta
        nome="Dr. André Cunha"
        especialidade="Cardiologista"
        foto="https://github.com/LorenzoRybuBuglione.png"
        centralizado
      />
      <CardConsulta
        nome="Dr. André Cunha"
        especialidade="Cardiologista"
        foto="https://github.com/LorenzoRybuBuglione.png"
        centralizado
      />
      <CardConsulta
        nome="Dr. André Cunha"
        especialidade="Cardiologista"
        foto="https://github.com/LorenzoRybuBuglione.png"
        centralizado
      />
    </ScrollView>
  );
}
