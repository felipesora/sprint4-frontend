const API_URL_PECAS = "http://localhost:8080/pecas"; 

// Interface para as peças
export interface Peca {
    idPeca: number;
    descricao: string;
    preco: number;
    tpPecaProblema: string; 
}


// Função para buscar peças por tipo de problema (GET)
export async function buscarPecasPorTipo(tipoProblema: string): Promise<Peca[]> {
    try {
        const response = await fetch(`${API_URL_PECAS}?tipoProblema=${tipoProblema}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Erro ao buscar peças.");
        }

        return await response.json();
    } catch (error) {
        console.error("Erro ao buscar peças:", error);
        throw error;
    }
}
