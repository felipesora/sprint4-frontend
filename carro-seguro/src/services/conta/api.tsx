
const API_URL = "http://localhost:8080/usuario";

// Interface para o usuário
export interface Usuario {
  emailUsuario: string;
  idUsuario: number;
  nmUsuario: string;
  senhaUsuario: string; 
  usCPF: string; 
}

// Função para fazer o login
export async function login(email: string, senha: string) {
  try {
    const response = await fetch(API_URL);
    const usuarios: Usuario[] = await response.json(); 

    // Procura um usuário com o email e senha fornecidos
    const usuario = usuarios.find(
      (user) => user.emailUsuario === email && user.senhaUsuario === senha
    );

    if (usuario) {
      // Salva o ID do usuário no localStorage para uso futuro
      localStorage.setItem("userId", usuario.idUsuario.toString());

      return {
        success: true,
        user: usuario,
      };
    } else {
      return {
        success: false,
        message: "Email ou senha incorretos.",
      };
    }
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    return {
      success: false,
      message: "Erro ao fazer login.",
    };
  }
}

// Função para cadastrar um usuário
export async function cadastrarUsuario(usuario: { emailUsuario: string; nmUsuario: string; senhaUsuario: string; usCPF: string }) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Erro ao cadastrar usuário:", errorText);
      throw new Error(`Erro ao cadastrar usuário: ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Erro ao cadastrar:", error);
    throw error;
  }
}

// Função para obter os dados de um usuário específico pelo ID
export async function obterUsuarioPorId(idUsuario: number): Promise<Usuario> {
  try {
    const response = await fetch(`${API_URL}/${idUsuario}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Erro ao buscar os dados do usuário.");
    }

    return await response.json(); // Retorna os dados do usuário
  } catch (error) {
    console.error("Erro ao buscar usuário por ID:", error);
    throw error;
  }
}

// Função para atualizar dados do usuário
export async function atualizarUsuarioPorId(idUsuario: number, usuario: Usuario) {
  try {
    const response = await fetch(`${API_URL}/${idUsuario}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Erro ao atualizar usuário:", errorText);
      throw new Error(`Erro ao atualizar usuário: ${errorText}`);
    }

    return await response.json(); // Retorna os dados atualizados do usuário
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    console.error("Detalhes do erro:", error); // Logando o erro completo
    throw error;
  }
}

// Função para excluir um usuário pelo ID
export async function excluirUsuarioPorId(idUsuario: number) {
  try {
    const response = await fetch(`${API_URL}/${idUsuario}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Erro ao excluir o usuário.");
    }

    return true; // Retorna true se a exclusão foi bem-sucedida
  } catch (error) {
    console.error("Erro ao excluir o usuário:", error);
    throw error;
  }
}
