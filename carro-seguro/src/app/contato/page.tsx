'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import iconTelefone from '../../imagens/icone-telefone.png';
import iconEmail from '../../imagens/icone-email.png';

export default function Contato() {
  
  const inputMensagem = useRef<HTMLInputElement | null>(null);
  const [respostaMensagem, setRespostaMensagem] = useState<string>('');

  const btnContatoClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const mensagemUsuario = inputMensagem.current?.value.trim();

    if ( mensagemUsuario) {
      setRespostaMensagem(
        'Obrigado por entrar em contato conosco. Recebemos sua mensagem e nossa equipe retornará o mais breve possível. Agradecemos por escolher a Porto Seguro.'
      );
      
      if (inputMensagem.current) inputMensagem.current.value = '';
    }
  };

  return (
    <main>
      <div id="container_main">
        <div id="container_contato">
          <h1 className="titulo_main">Entre em Contato</h1>
          <div id="box_icones">
            <div className="flex_contato">
              <Image src={iconTelefone} alt="Ícone de telefone" className='icones_contato'/>
              <p>0800-123-456</p>
            </div>
            <div className="flex_contato flex_contato2">
              <Image src={iconEmail} alt="Ícone de e-mail" className='icones_contato'/>
              <p>suporte@portoseguro.com.br</p>
            </div>
          </div>
          <div id="dados_contato">
            <form action="#">
              <label className="texto_dados">Mensagem:</label>
              <div>
                <input type="text" id="id_mensagem_usuario" name="mensagem_usuario" required ref={inputMensagem} />
              </div>
              <button id="btnContato" className="botao_enviar botao_contato" onClick={btnContatoClick}>
                Enviar
              </button>
            </form>
          </div>
          <div id="resposta_botao">
            {respostaMensagem && <p className="resposta_botao">{respostaMensagem}</p>}
          </div>
        </div>
      </div>
    </main>
  );
}
