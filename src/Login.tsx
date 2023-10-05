import { VStack, Image, Text, Box, Link, useToast } from "native-base";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import Logo from "./assets/Logo.png";
import { Botao } from "./componentes/Botao";
import { EntradaTexto } from "./componentes/EntradaTexto";
import { Titulo } from "./componentes/Titulo";
import { fazerLogin } from "./servicos/AutenticacaoServico";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    async function verificarLogin() {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        navigation.replace("Tabs");
      }
      setLoading(false);
    }
    verificarLogin();
  }, []);

  async function login() {
    const resultado = await fazerLogin(email, senha);
    if (resultado) {
      const { token } = resultado;
      AsyncStorage.setItem("token", token);
      const tokenDecodificado = jwtDecode(token) as any;
      const pacienteID = tokenDecodificado.id;
      AsyncStorage.setItem("pacienteID", pacienteID);

      navigation.replace("Tabs");
    } else {
      toast.show({
        title: "Erro no Login",
        description: "O e-mail e/ou senha não conferem",
        backgroundColor: "red.500",
      });
    }
  }

  if (loading) {
    return null;
  }

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" padding={50}>
      <Image source={Logo} alt="Logo Voll" />
      <Titulo>Faça login em sua conta</Titulo>
      <Box>
        <EntradaTexto
          label="E-mail"
          placeholder="Insira seu E-mail"
          value={email}
          onChangeText={setEmail}
        />
        <EntradaTexto
          label="Senha"
          placeholder="Insira sua Senha"
          value={senha}
          onChangeText={setSenha}
          secret={true}
        />
      </Box>
      <Botao label="Entrar" onPress={login} />
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
        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
          <Text color="blue.500" fontWeight="semibold">
            {" "}
            Faça o seu Cadastro
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
