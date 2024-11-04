import Link from "next/link";

export default function Rodape(){
    return(
        <footer>
        <Link href='/integrantes' className="links link_footer">Integrantes</Link>
        <p className="copyright">© 2024 Porto Seguro. Todos os direitos reservados.</p>
    </footer>
    );
}