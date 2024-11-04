import Image from 'next/image';
import erro404 from '@/imagens/erro-404.png';

export default function NotFound() {
    return (
        <div>
            <Image src={erro404} alt="imagem de erro 404 - Not Found" className='imagem_erro_404'/>
        </div>
    )
}
