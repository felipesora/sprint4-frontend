"use client";

import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation'; // Importando usePathname

import perfil from '../../imagens/icone-perfil.png';
import linha from '../../imagens/icone-linha.png';
import logout from '../../imagens/icone-sair.png';

import Menu from '../Menu/Menu';

export default function Cabecalho() {
    const router = useRouter(); // Usando useRouter de next/navigation
    const pathname = usePathname(); // Obtendo o pathname atual

    const getTitulo = () => {
        switch (pathname) {
            case '/diagnostico':
                return 'Diagnóstico de Problemas';
            case '/faq':
                return 'FAQ de Manutenção';
            case '/contato':
                return 'Contato';
            case '/integrantes':
                return 'Integrantes';
            case '/conta':
                return 'Conta';
            case '/oficinas':
                return 'Oficinas';
            // case '/PaginaInicial':
            //     return 'Introdução';
            default:
                return 'Bem-vindo à CarroSeguro';
        }
    };

    function handleLogout() {
        if (typeof window !== 'undefined') {
            localStorage.removeItem("loggedIn");
        }
        router.push("/"); // Usando router.push para navegação
    }

    function handleConta() {
        router.push("/conta"); // Usando router.push para navegação
    }

    return (
        <header>
            <div className='div_cabecalho'>
                <h1 className="titulo_cabecalho">{getTitulo()}</h1>
                <div className='div_botoes_cabecalho'>
                    <button onClick={handleConta} className='botao_icones_cabecalho'>
                        <Image src={perfil} alt="icone de perfil" className="icones_cabecalho" />
                    </button>
                    <Image src={linha} alt="linha" className="icones_cabecalho" />
                    <button onClick={handleLogout} className='botao_icones_cabecalho'>
                        <Image src={logout} alt="icone de logout" className="icones_cabecalho" />
                    </button>
                </div>
            </div>
            <Menu />
        </header>
    );
}
