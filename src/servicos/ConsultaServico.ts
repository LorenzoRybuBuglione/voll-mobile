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

export async function cancelarConsulta(
    consultaID:string,
  ) {
    try {
      const resultado = await api.delete(`/consulta/${consultaID}`);
      return resultado.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }