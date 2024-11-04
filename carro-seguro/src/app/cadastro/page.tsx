"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { cadastrarUsuario } from "../../services/conta/api";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

  async function handleCadastro(event: React.FormEvent) {
    event.preventDefault();

    const usuario = {
      emailUsuario: email,
      nmUsuario: nome,
      senhaUsuario: senha,
      usCPF: cpf,
    };

    try {
      await cadastrarUsuario(usuario); 
      alert("Cadastro realizado com sucesso!");
      router.push("/"); 
    } catch (error) {
      console.error("Erro ao cadastrar:", error); 
      alert("Erro ao cadastrar! Verifique os dados e tente novamente.");
    }
  }

  return (
    <div className="container_cadastro">
      <h1 className="titulo_form_cadastro">Cadastro</h1>
      <div className="div_texto_cadastro">
        <p>Crie um cadastro para ter uma experiência melhor ao usar nosso site! Já possui uma conta? <Link href='/' className='link_form_cadastro'>Faça login aqui</Link></p>
        <form onSubmit={handleCadastro}>
          <label htmlFor="nome" className="texto_form_cadastro">Nome Completo:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            className="input input_cadastro"
            onChange={(e) => setNome(e.target.value)}
            required
            placeholder="Digite seu nome completo"
          />
          <label htmlFor="email" className="texto_form_cadastro">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            className="input input_cadastro"
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Digite seu email"
          />
          <label htmlFor="cpf" className="texto_form_cadastro">CPF:</label>
          <input
            type="text"
            id="cpf"
            value={cpf}
            className="input input_cadastro"
            onChange={(e) => setCpf(e.target.value)}
            required
            placeholder="Digite seu CPF"
          />
          <label htmlFor="senha" className="texto_form_cadastro">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            className="input input_cadastro"
            onChange={(e) => setSenha(e.target.value)}
            required
            placeholder="Digite sua senha"
          />
          <p className="campos_obrigatorios">*Todos os campos são obrigatórios.</p>
          <button type="submit" className="button botao_cadastro">Cadastrar-se</button>
        </form>
      </div>
    </div>
  );
}
