"use client";

import { useEffect, useState } from "react";
import { obterUsuarioPorId, Usuario, excluirUsuarioPorId } from "../../services/conta/api";
import { useRouter } from "next/navigation";
import Link from "next/link";


export default function Conta() {
  const [usuario, setUsuario] = useState<Usuario | null>(null); 
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
        // Garantindo que userId não seja null e convertendo para número
        const idUsuario = userId ? parseInt(userId, 10) : 0; // Aqui estamos definindo um valor padrão caso não seja uma string válida.
        
        const dadosUsuario = await obterUsuarioPorId(idUsuario); // Chama a função para buscar dados do usuário
        setUsuario(dadosUsuario);
      } catch (error) {
        console.error("Erro ao carregar os dados do usuário:", error);
        alert("Erro ao carregar dados do usuário. Tente novamente mais tarde.");
      }
    }

    fetchUsuario();
  }, [router]);

  if (!usuario) {
    return <p>Carregando...</p>;
  }

  // Função para lidar com a exclusão da conta
  async function handleExcluirConta() {
    if (confirm("Tem certeza de que deseja excluir sua conta? Esta ação não pode ser desfeita.")) {
      try {
        const userId = localStorage.getItem("userId");
        if (!userId) {
          alert("Usuário não encontrado.");
          return;
        }

        const idUsuario = parseInt(userId, 10);
        await excluirUsuarioPorId(idUsuario); // Chama a função para excluir o usuário
        localStorage.removeItem("userId"); // Remove o ID do usuário do localStorage
        alert("Conta excluída com sucesso.");
        router.push("/"); // Redireciona para a página inicial ou de login
      } catch (error) {
        console.error("Erro ao excluir a conta:", error);
        alert("Erro ao excluir a conta. Tente novamente.");
      }
    }
  }

  return (
    <div id="container_main_conta">
      <div id="container_conta">
        <h1 className="titulo_conta">Minha Conta</h1>
        <p className="texto_conta">Abaixo estão seus dados cadastrados no sistema:</p>
        <ul className="ul_conta">
          <li><strong>Nome:</strong> {usuario.nmUsuario}</li>
          <li><strong>Email:</strong> {usuario.emailUsuario}</li>
          <li><strong>CPF:</strong> {usuario.usCPF}</li>
          <li className="ultimo_li"><strong>Senha:</strong> {usuario.senhaUsuario}</li>
        </ul>
        <div className="botoes_conta">
          <Link href='/conta/editar-conta' className='link_editar_conta'>Editar</Link>
          <button className="btn_excluir_conta" onClick={handleExcluirConta}>Excluir Conta</button>
        </div>
      </div>
    </div>
  );
}
