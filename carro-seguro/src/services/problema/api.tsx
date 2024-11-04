
const API_URL_PROBLEMAS = "http://localhost:8080/problemas";

// Interface para o problema do carro
export interface ProblemaCarro {
  dcProblema: string;
  idCarro: number;
  tpPecaProblema: string;
}

// Função para enviar um problema (POST)
export async function enviarProblema(dcProblema: string, tpPecaProblema: string) {
  const problema: ProblemaCarro = {
    dcProblema,
    idCarro: 1, // ID fixo do carro
    tpPecaProblema,
  };

  try {
    const response = await fetch(API_URL_PROBLEMAS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(problema),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Erro ao enviar o problema:", errorText);
      throw new Error(`Erro ao enviar problema: ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Erro ao enviar problema:", error);
    throw error;
  }
}

// Função para obter todos os problemas (GET)
export async function obterProblemas(): Promise<ProblemaCarro[]> {
  try {
    const response = await fetch(API_URL_PROBLEMAS, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Erro ao obter problemas.");
    }

    return await response.json();
  } catch (error) {
    console.error("Erro ao obter problemas:", error);
    throw error;
  }
}
