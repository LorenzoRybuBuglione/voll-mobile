import api from "./api";

export async function agendarConsulta(
  data: Date,
  especialistaID: string,
  pacienteID: string
) {
  try {
    const resultado = await api.post("/consulta", {
      especialista: especialistaID,
      paciente: pacienteID,
      data,
    });
    return resultado.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
