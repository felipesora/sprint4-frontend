"use client";

import React, { useState } from 'react';
import { enviarProblema } from '../../services/problema/api';
import { buscarPecasPorTipo, Peca } from '../../services/pecas/api';
import Link from 'next/link';

export default function Diagnostico() {
    const [pecas, setPecas] = useState<Peca[]>([]); 
    const [descricao, setDescricao] = useState<string>('');
    const [tipoProblema, setTipoProblema] = useState<string>('');
    const [precoTotal, setPrecoTotal] = useState<number>(0);
    const [mensagemResposta, setMensagemResposta] = useState<string>('');
    const [enviadoComSucesso, setEnviadoComSucesso] = useState<boolean>(false);
    const [mostrarPecas, setMostrarPecas] = useState<boolean>(false); 

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await enviarProblema(descricao, tipoProblema);
            setMensagemResposta('Seu problema foi relatado com sucesso. Nossa equipe entrará em contato com você em breve para fornecer suporte e orientações. Obrigado por escolher a Porto Seguro.');
            setDescricao('');
            setTipoProblema('');
            setEnviadoComSucesso(true);
            setMostrarPecas(true); 
        } catch (error) {
            setMensagemResposta('Erro ao enviar o problema. Por favor, tente novamente.');
            console.error("Erro ao enviar problema:", error);
        }
    };

    const handleTipoProblemaChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const novoTipoProblema = e.target.value;
        setTipoProblema(novoTipoProblema);
    
        if (novoTipoProblema) {
            try {
                const resultadoPecas = await buscarPecasPorTipo(novoTipoProblema);
                
                const pecasFiltradas = resultadoPecas.filter(peca => peca.tpPecaProblema === novoTipoProblema);
                setPecas(pecasFiltradas);
    
                
                if (pecasFiltradas.length > 0) {
                    const total = pecasFiltradas.reduce((acc, peca) => acc + peca.preco, 0);
                    const media = total / pecasFiltradas.length; // Calcula a média
                    setPrecoTotal(media);
                } else {
                    setPrecoTotal(0); // Se não houver peças, o preço total é 0
                }
            } catch (error) {
                console.error("Erro ao buscar peças:", error);
            }
        } else {
            setPecas([]);
            setPrecoTotal(0);
        }
    };
    

    return (
        <main>
            <div id="container_main">
                <div id="container_diagnostico">
                    <h1 className="titulo_main">Descreva o problema do seu carro</h1>
                    <p className="descritivo">
                        Aqui você tem a oportunidade de detalhar os problemas que está enfrentando com seu carro. Com base na sua descrição, nossa plataforma fornecerá possíveis soluções para ajudá-lo a identificar e resolver a situação de forma eficaz. Preencha o formulário abaixo com o máximo de detalhes possível para que possamos oferecer a melhor assistência. Quanto mais informações você fornecer, mais preciso será o nosso suporte.
                    </p>
                </div>
                <form className='form_diagnostico' onSubmit={handleSubmit}>
                    <div className='div_form'>
                        <label htmlFor="idDescricao"><strong>Descrição do Problema:</strong></label>
                        <input
                            type="text"
                            name="descricao"
                            id="idDescricao"
                            className="input"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                            required
                        />
                    </div>

                    <div className='div_form'>
                        <label htmlFor="idTipoProblema"><strong>Selecione o provável tipo do problema:</strong></label>
                        <select
                            name="tipoProblema"
                            id="idTipoProblema"
                            className="input input_select"
                            value={tipoProblema}
                            onChange={handleTipoProblemaChange}
                            required
                        >
                            <option value="" disabled>Selecione uma opção</option>
                            <option value="Motor">Problema no motor</option>
                            <option value="Bateria">Problema na bateria</option>
                            <option value="Transmissão">Problema na transmissão</option>
                            <option value="Freio">Problema nos freios</option>
                            <option value="Elétrico">Problema elétrico</option>
                            <option value="Suspensão">Problema na suspensão</option>
                            <option value="Pneu">Problema nos pneus</option>
                            <option value="Amortecedor">Problema no amortecedor</option>
                            <option value="Filtro">Problema no filtro</option>
                        </select>
                    </div>

                    <div className='div_btn'>
                        <button type="submit" className='btn_enviar_problema'>Enviar Problema</button>
                    </div>
                </form>

                {/* Exibe as peças e o preço total somente se enviado com sucesso e mostrarPecas for true */}
                {enviadoComSucesso && mostrarPecas && (
                    <div>
                        <h2 className='subtitulo_tabela_pecas'>Peças recomendadas:</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Descrição da Peça</th>
                                    <th>Preço (R$)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pecas.map((peca) => (
                                    <tr key={peca.idPeca}>
                                        <td>{peca.descricao}</td>
                                        <td>R$ {peca.preco.toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <h3 className='orçamento_pecas'>Orçamento médio estimado: R$ {precoTotal.toFixed(2)}</h3>
                        <div className="div_btn_oficinas">
                            <p className='mensagem_link_oficinas'>Para ver oficinas parceiras <Link href="/oficinas" className='link_oficinas'>Clique aqui</Link></p>
                        </div>
                    </div>
                )}

                {/* Exibe a mensagem somente se o envio for bem-sucedido */}
                {enviadoComSucesso && (
                    <div id="resposta_botao">
                        {mensagemResposta}
                    </div>
                )}
            </div>
        </main>
    );
}
