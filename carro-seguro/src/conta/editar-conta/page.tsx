"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { atualizarUsuarioPorId, Usuario, obterUsuarioPorId } from "../../../services/conta/api";

export default function EditarConta() {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const router = useRouter();

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      alert("Usuário não logado. Redirecionando para a página de login.");
      router.push("/"); // Redireciona para a página de login se o usuário não estiver logado
      return;
    }

    async function fetchUsuario() {
      try {
        const idUsuario = userId ? parseInt(userId, 10) : 0; // Convertendo para número
        const dadosUsuario = await obterUsuarioPorId(idUsuario); // Buscando os dados do usuário
        setUsuario(dadosUsuario);
      } catch (error) {
        console.error("Erro ao carregar os dados do usuário:", error);
        alert("Erro ao carregar dados do usuário. Tente novamente mais tarde.");
      } finally {
        setLoading(false); // Finaliza o estado de carregamento
      }
    }

    fetchUsuario();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (usuario) {
      try {
        await atualizarUsuarioPorId(usuario.idUsuario, usuario); // Enviando os dados atualizados para a API
        alert("Dados atualizados com sucesso!");
        router.push("/conta"); // Redirecionando para a página de conta
      } catch (error) {
        console.error("Erro ao atualizar dados do usuário:", error);
        alert("Erro ao atualizar dados do usuário. Tente novamente.");
      }
    } else {
      alert("Nenhum dado de usuário encontrado para atualização.");
    }
  };

  if (loading) {
    return <p>Carregando...</p>; // Exibe uma mensagem de carregamento
  }

  if (!usuario) {
    return <p>Nenhum usuário encontrado.</p>; // Mensagem caso não encontre o usuário
  }

  return (
<div id="container_main_editar_conta">
  <div id="container_editar_conta">
    <h1 className="titulo_editar_conta">Atualização de Conta</h1>
    <form onSubmit={handleSubmit}>
      <p className="texto_conta">Atualize os campos abaixo:</p>
      
      <ul className="ul_editar_conta">
        <li className="li_editar_conta">
          <label htmlFor="idNome"><strong>Nome:</strong></label>
          <input
            type="text"
            name="nome"
            id="idNome"
            className="input"
            value={usuario.nmUsuario}
            required
            onChange={(e) => setUsuario({ ...usuario, nmUsuario: e.target.value })}
          />
        </li>
        <li className="li_editar_conta">
          <label htmlFor="idEmail"><strong>Email:</strong></label>
          <input
            type="email"
            name="email"
            id="idEmail"
            className="input"
            value={usuario.emailUsuario}
            required
            onChange={(e) => setUsuario({ ...usuario, emailUsuario: e.target.value })}
          />
        </li>
        <li className="li_editar_conta">
          <label htmlFor="idCPF"><strong>CPF:</strong></label>
          <input
            type="text"
            name="cpf"
            id="idCPF"
            className="input"
            value={usuario.usCPF}
            required
            onChange={(e) => setUsuario({ ...usuario, usCPF: e.target.value })}
          />
        </li>
        <li className="ultimo_li li_editar_conta">
          <label htmlFor="idSenha"><strong>Senha:</strong></label>
          <input
            type="text"
            name="senha"
            id="idSenha"
            className="input"
            value={usuario.senhaUsuario}
            required
            onChange={(e) => setUsuario({ ...usuario, senhaUsuario: e.target.value })}
          />
        </li>
      </ul>

      <button type="submit" className="link_editar_conta">Atualizar</button>
    </form>
  </div>
</div>

  );
}
