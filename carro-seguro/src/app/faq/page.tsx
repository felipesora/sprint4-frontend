
export default function FAQ(){
    return(
        <main>
        <div id="container_main">
            <div id="container_faq">
                <h1 className="titulo_main">Perguntas Frequentes sobre Manutenção</h1>
                <h2 className="subtitulo">1. Como verificar o nível do óleo?</h2>
                <p className="descritivo">Para verificar o nível do óleo, primeiro certifique-se de que o motor está frio e o carro está estacionado em uma superfície plana. Retire a vareta do óleo, limpe-a com um pano, insira novamente e retire para verificar o nível. O óleo deve estar entre as marcas de mínimo e máximo.</p>

                <h2 className="subtitulo">2. Com que frequência devo trocar os filtros de ar?</h2>
                <p className="descritivo">Os filtros de ar devem ser trocados a cada 12.000 a 15.000 km, ou conforme indicado no manual do proprietário do seu veículo. A troca regular dos filtros de ar ajuda a manter o motor funcionando de maneira eficiente.</p>

                <h2 className="subtitulo">3. O que fazer quando a luz do motor acende?</h2>
                <p className="descritivo">Quando a luz do motor acende, é importante verificar o código de erro utilizando um scanner OBD-II. Isso pode indicar problemas variados, desde uma tampa de combustível mal fechada até problemas mais sérios no motor. Consulte um mecânico para um diagnóstico preciso.</p>

                <h2 className="subtitulo">4. Como manter a pressão dos pneus correta?</h2>
                <p className="descritivo faq_descritivo4">Verifique a pressão dos pneus regularmente, pelo menos uma vez por mês. Utilize um medidor de pressão de pneus e compare com os valores recomendados no manual do proprietário do seu veículo. Pneus corretamente calibrados melhoram a segurança e a eficiência do combustível.</p>
            </div>

        </div>
    </main>
    );
}