const API_URL_MECANICOS = "http://localhost:8080/mecanico";

// Interface para as oficinas
export interface Oficina {
  enderecoOficina: string;
  nomeOficina: string;
  zonaMecanico: string;
}

// Função para obter todas as oficinas (GET)
export async function listarOficinas(): Promise<Oficina[]> {
  try {
    const response = await fetch(API_URL_MECANICOS, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Erro ao listar oficinas.");
    }

    return await response.json();
  } catch (error) {
    console.error("Erro ao listar oficinas:", error);
    throw error;
  }
}
