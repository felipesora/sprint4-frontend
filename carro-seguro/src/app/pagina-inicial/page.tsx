import Image from 'next/image';

import mulherCarro from '../../imagens/mulher-carro.png';
import icon24h from '../../imagens/icone-24horas.png';
import iconCarro from '../../imagens/icone-carro.png';
import iconFerramentas from '../../imagens/icone-ferramentas.png';
import iconRating from '../../imagens/icone-rating.png';
import iconEngrenagem from '../../imagens/icone-engrenagem.png';
import iconInovacao from '../../imagens/icone-inovação.png';


export default function PaginaInicial(){
    return(
        <main>
        <div id="container_main">
            <div id="container_quem_somos">
                <h1 className="titulo_main">Soluções rápidas para seus problemas com o carro</h1>
                <h2 className="subtitulo">Quem somos?</h2>
                <div className="texto_imagem">
                    <div className="paragrafo_descritivo">
                        <p className="descritivo descritivo01">A Porto Seguro é uma das maiores seguradoras do Brasil, oferecendo uma ampla gama de serviços para proteger você e seu patrimônio. Nossa missão é proporcionar tranquilidade e segurança em todos os momentos da sua vida. Desde seguros de automóveis, residenciais, empresariais até seguros de vida e saúde, estamos comprometidos em oferecer soluções personalizadas que atendam às suas necessidades específicas.</p>
                        <p className="descritivo descritivo01">Com décadas de experiência no mercado, nossa equipe de especialistas está sempre pronta para oferecer o melhor atendimento, garantindo que você tenha o suporte necessário quando mais precisar. Na Porto Seguro, acreditamos que proteger o que é importante para você é a nossa maior responsabilidade, e estamos dedicados a manter a sua confiança através de serviços de alta qualidade e inovação constante. Junte-se a milhões de clientes satisfeitos que confiam na Porto Seguro para manter suas vidas e seus bens protegidos.</p>
                    </div>
                    <Image src={mulherCarro} alt="Mulher dentro carro" className="imagem01"/>
                </div>
            </div>
            <div id="container_serviços">
                <h2 className="subtitulo">Nossos Serviços</h2>
                <p className="descritivo">Oferecemos diversos serviços para garantir que você esteja sempre protegido na estrada. Nossos principais serviços incluem:</p>
                <ul className="lista_main">
                    <li className="li_main">
                        <Image src={icon24h} alt="Ícone 24 horas" className="icone_li"/>
                        <div>
                            <strong>Assistência 24 horas:</strong>
                            <p>Estamos disponíveis para ajudá-lo em emergências a qualquer hora do dia ou da noite.</p>
                        </div>
                        </li>
                    <li className="li_main">
                        <Image src={iconCarro} alt="Ícone de um carro" className="icone_li"/>
                        <div>
                            <strong>Seguro Auto:</strong>
                            <p>Cobertura completa para seu veículo, incluindo proteção contra roubo, acidentes e danos.</p>
                        </div>
                        </li>
                    <li className="li_main">
                        <Image src={iconFerramentas} alt="Ícone de ferramentas" className="icone_li"/>
                        <div>
                            <strong>Manutenção Preventiva:</strong>
                            <p>Dicas e orientações para manter seu carro em perfeitas condições.</p>
                        </div>
                        </li>
                </ul>
            </div>
            <div id="container_escolher_porto">
                <h2 className="subtitulo">Por que escolher a Porto Seguro?</h2>
                <p className="descritivo">Na Porto Seguro, entendemos a importância de oferecer serviços confiáveis e de alta qualidade. Aqui estão algumas razões para escolher a Porto Seguro:</p>
                <ul className="lista_main">
                    <li className="li_main">
                        <Image src={iconRating} alt="Ícone de uma estrela dentro de um quadrado" className="icone_li"/>
                        <div>
                            <strong>Experiência:</strong>
                            <p>Mais de 70 anos de experiência no mercado de seguros.</p>
                        </div>
                        </li>
                    <li className="li_main">
                        <Image src={iconEngrenagem} alt="Ícone de uma mão segurando uma engrenagem" className="icone_li"/>
                        <div>
                            <strong>Atendimento:</strong>
                            <p>Nosso atendimento é focado em entender e resolver suas necessidades específicas.</p>
                        </div>
                        </li>
                    <li className="li_main">
                        <Image src={iconInovacao} alt="Ícone de uma cabeça com uma lâmpada" className="icone_li"/>
                        <div>
                            <strong>Inovação:</strong>
                            <p>Utilizamos tecnologia de ponta para oferecer os melhores serviços e soluções para nossos clientes.</p>
                        </div>
                        </li>
                </ul>
            </div>

        </div>
    </main>
    );
}