import { VStack, Text, Avatar } from "native-base";
import { Botao } from "./Botao";

interface CardProps {
  nome: string;
  foto: string;
  especialidade: string;
  data?: string;
  foiAtendido?: boolean;
  foiAgendado?: boolean;
  centralizado?: boolean;
  onPress?: () => void;
}

export function CardConsulta({
  nome,
  foto,
  especialidade,
  data,
  foiAgendado,
  foiAtendido,
  centralizado,
  onPress
}: CardProps) {
  return (
    <VStack
      w="100%"
      bgColor={foiAtendido ? "blue.100" : "white"}
      p={5}
      borderRadius="lg"
      shadow="2"
      mb={5}
    >
      <VStack flexDir="row" alignSelf={centralizado ? "center" : "flex-start"}>
        <Avatar source={{ uri: foto }} size="lg" />
        <VStack pl={4}>
          <Text fontSize="md" bold>
            {nome}
          </Text>
          <Text>{especialidade}</Text>
          {data && <Text>{data}</Text>}
        </VStack>
      </VStack>
      <Botao
        marginTop={4}
        label={foiAgendado ? "Cancelar" : "Agendar Consulta"}
        onPress={onPress}
      />
    </VStack>
  );
}
