import api from "./api";

export async function fazerLogin(email: string, senha: string) {
  if (!email || !senha) return null;
  try {
    const resultado = await api.post("/auth/login", {
      email: email,
      senha: senha,
    });
    console.log(resultado.data);
    return resultado.data;
  } catch (e) {
    console.log(e);
  }
}
