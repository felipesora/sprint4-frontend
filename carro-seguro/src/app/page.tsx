// src/app/page.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "../services/conta/api"; // Importa a função de login da API

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

  async function handleLogin(event: React.FormEvent) {
    event.preventDefault();

    try {
      const result = await login(email, senha);

      if (result.success) {
        alert("Login realizado com sucesso!");
        router.push("/pagina-inicial"); 
      } else {
        alert(result.message || "Usuário ou senha incorretos!");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro ao fazer login. Tente novamente.");
    }
  }

  return (
    <div className="container_login">
      <h1 className="titulo_form">Entre na Conta</h1>
      <div className="div_texto_login">
        <p>
          Entre na sua conta para ter uma experiência melhor ao usar nosso site! Ainda não possui uma conta?{" "}
          <Link href="/cadastro" className="link_form">Cadastre-se aqui</Link>
        </p>
        <form onSubmit={handleLogin}>
          <label htmlFor="email" className="texto_form">Email:</label>
          <input
            type="email"
            value={email}
            className="input_login"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="senha" className="texto_form">Senha:</label>
          <input
            type="password"
            value={senha}
            className="input_login"
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <div>
            <button type="submit" className="button">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
