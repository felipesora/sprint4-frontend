
import Link from "next/link";

export default function Menu(){
    return(
        <ul className="ul_links">
            <li><Link href='/pagina-inicial' className='links'>Início</Link></li>
            <li><Link href='/diagnostico' className='links'>Diagnóstico</Link></li>
            <li><Link href='/faq' className='links'>FAQ</Link></li>
            <li><Link href='/contato' className='links'>Contato</Link></li>
        </ul>
    );
}