<template>
    <main class="row">
        <article>
            <figure class="product-image">
                <img src="https://imagens.lelivros.org/2015/04/Baixar-Livro-As-Mil-e-Uma-Noites-Mansour-Challita-em-PDF-ePub-e-Mobi1.jpg"/>
            </figure>
        </article>
        <aside>
            <h2 style="text-transform: uppercase;">A borra de café</h2>
            <h3>Mário Benedetti</h3>
            <div><span class="info">Produto indisponível!</span></div>
            <div style="display:flex;justify-content: space-between;margin-top: 40px;">
                <div id="buttons">
                    <button name="add-to-cart" disabled>Adicionar ao carrinho</button>
                    <button name="buy-now" disabled>Comprar agora</button>
                    <button name="add-wish-list">Adicionar à lista de desejos</button>
                    <button name="add-wish-list">Versão e-book</button>
                </div>
                <div>
                    <span id="price">R$ 34.90</span><br/>
                    <span id="rate">34 mil gostaram</span>
                </div>
            </div>
            <p>
                Em <em>A borra do café</em>, Mario Benedetti mescla memória e invenção e resgata as lembranças de sua infância em Montevidéu para construir uma narrativa lírica, profunda, sobre as surpresas e as dificuldades do amadurecimento. Com seu peculiar lirismo e habilidade narrativa, o autor relata pequenos acontecimentos de uma vida distante, fazendo com que o leitor reconheça a si mesmo. Na figura do jovem Claudio, o consagrado escritor uruguaio, autor de A trégua, reinventa muitas passagens marcantes de sua própria vida: as brincadeiras de rua com os amigos, as constantes mudanças de bairro com a família, a trágica morte da mãe e a descoberta do amor e do sexo. Em seu texto de apresentação do livro, a escritora Martha Medeiros destaca que toda história de infância corre o risco de parecer piegas. Mas que, no caso Benedetti, a narrativa escapa desta sina, graças ao talento do escritor. "Fosse um manifesto político ou uma história contemporânea, sua emoção permaneceu desinfetada de lugares-comuns", descreve.
            </p>
            <p>
                <strong>O autor: </strong>Um dos mais importantes escritores uruguaios da atualidade, Mario Benedetti nasceu em 14 de setembro de 1920, em Paso de los Toros, Uruguai. Trabalhou como vendedor, taquígrafo, contador, funcionário público e jornalista. Entre 1938 e 1945, morou em Buenos Aires. Ao retornar a Montevidéu, passou a trabalhar no semanário Marcha. Nesse mesmo ano, publicou o primeiro livro de poesias, La víspera indeleble. Nos anos seguintes, Benedetti lançaria a primeira coletânea de ensaios, Peripecia y novela (1948), a primeira de contos, Esta mañana (1949), e o primeiro romance, Quién de nosotros (1953). Em 1959, com a publicação do livro de contos Montevideanos, consagrou-se como escritor. E, no ano seguinte, o lançamento de A Trégua lhe rendeu fama internacional. Por questões políticas, abandonou o Uruguai em 1973. Nos 12 anos de exílio morou na Argentina, Peru, Cuba e Espanha. Traduzido em todo o mundo, Benedetti é considerado um dos mais importantes escritores uruguaios da atualidade.
            </p>
        </aside>
    </main>
</template>

<style>
.info {padding: 5px 30px;background-color: wheat;border-radius: 2px;border: solid 1px violet;margin-bottom: 30px;}
.product-image img { max-height: 60vh }
#buttons {display: flex;flex-direction: column;width: 200px;}
button {padding: 5px 30px;margin-bottom: 5px}
p { font-size: 13px; line-height: 18px; }
#price, #rate { text-align: right; float: right}
#price { font-size: 20px;font-weight: bold;line-height: 30px; }
#rate { font-style: italic; }
</style>