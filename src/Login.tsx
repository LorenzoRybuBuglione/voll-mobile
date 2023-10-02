import { VStack, Image, Text, Box, Link } from "native-base";
import { TouchableOpacity } from "react-native";
import Logo from "./assets/Logo.png";
import { Botao } from "./componentes/Botao";
import { EntradaTexto } from "./componentes/EntradaTexto";
import { Titulo } from "./componentes/Titulo";

export default function Login() {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" padding={50}>
      <Image source={Logo} alt="Logo Voll" />
      <Titulo>Faça login em sua conta</Titulo>
      <Box>
        <EntradaTexto label="E-mail" placeholder="Insira seu E-mail" />
        <EntradaTexto
          label="Senha"
          placeholder="Insira sua Senha"
          secret={true}
        />
      </Box>
      <Botao label="Entrar" />
      <Link href="https://www.google.com" marginTop={2}>
        Esqueceu a sua senha?
      </Link>
      <Box
        width="100%"
        flexDirection="row"
        justifyContent="center"
        marginTop={8}
      >
        <Text>Ainda não tem cadastro?</Text>
        <TouchableOpacity>
          <Text color="blue.500" fontWeight="semibold">
            {" "}
            Faça o seu Cadastro
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
