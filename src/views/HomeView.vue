<script setup lang="ts">
  import BookItem from '../components/BookItem.vue'
  import axios from "axios";

  const books = [
    { id: "1", title: "A metamorfose",    price: "R$ 39.90", img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/15cab231238407.5647ac117cafe.jpg" },
    { id: "2", title: "O continente",     price: "R$ 50.00", img: "https://m.media-amazon.com/images/I/413fSHB6vjL.jpg" },
    { id: "8", title: "Evaluna",          price: "R$ 70.00", img: "https://m.media-amazon.com/images/I/91vygdXh7KL.jpg" },
    { id: "4", title: "Camilo Mortágua",  price: "R$ 40.00", img: "https://m.media-amazon.com/images/I/71U-rNTpj7L.jpg" },
    { id: "5", title: "Os miseráveis",    price: "R$ 49.90", img: "https://m.media-amazon.com/images/I/51rEZlikPkL.jpg" },
    { id: "6", title: "O estrangeiro",    price: "R$ 29.90", img: "https://m.media-amazon.com/images/I/914tiaSYpnL.jpg" },
    { id: "7", title: "O vale do terror", price: "R$ 69.90", img: "https://m.media-amazon.com/images/I/81W1IC+jMaL.jpg" },
    { id: "3", title: "Borra de café",    price: "R$ 34.90", img: "https://imagens.lelivros.org/2015/04/Baixar-Livro-As-Mil-e-Uma-Noites-Mansour-Challita-em-PDF-ePub-e-Mobi1.jpg" }
  ];

  const popBooks = [
    {id: "10", title: "Morte Sul Peste Oeste", price: "R$ 50.00", img: "https://s3.amazonaws.com/img.iluria.com/product/78CD3B/13383BB/450xN.jpg"},
    {id: "11", title: "Cem anor de solidão", price: "R$ 50.00", img: "https://m.media-amazon.com/images/I/81SQPrWU7SL.jpg"}
  ];

  const visited = [
    {id: "12", title: "La Patagônia Rebelde", price: "R$ 90.00", img: "https://m.media-amazon.com/images/I/51OsQZy1AVL.jpg"},
    {id: "13", title: "Nosotros decimos no", price: "R$ 50.00", img: "https://m.media-amazon.com/images/I/81QTOPTMyyL.jpg"},
    {id: "13", title: "Martin Fierro", price: "R$ 30.00", img: "https://www.bemparana.com.br/wp-content/uploads/2022/07/1537221628-5ba024c8d82af_img_livro_o_gaucho_martin_fierro.jpg"},
    {id: "13", title: "A conquista do pão", price: "R$ 60.00", img: "https://static21.minhalojanouol.com.br/livrariaterralivre/produto/multifotos/hd/20220909114716_5957994043_DZ.jpg"}
  ];
</script>

<template>
  <main class="row">
    <aside>
    <h2>Mais populares</h2>
    <h3>Melhores avaliados</h3>
    <div class="pop-container">
      <BookItem 
        :id="book.id"
        :title="book.title"
        :price="book.price"
        :img="book.img"
        v-for="(book) in popBooks" />
    </div>
  </aside>

  <section class="main">
    <h2>QUAL SERÁ TUA PRÓXIMA LEITURA?</h2>
    <div>
      <form action="/product" method="GET" name="book-search" id="search-form">
        <input type="text" name="search-bar" id="search-bar" placeholder="Busque por título, autor, editora ou ISBN..."/>
        <input type="submit" value="Buscar" id="search-button"/>
      </form>
    </div>
    <h5>Destaques de novembro</h5>
    <div class="books-container">
      <BookItem 
        :id="book.id"
        :title="book.title"
        :price="book.price"
        :img="book.img"
        v-for="(book) in books" />
    </div>

      <h2>Você visitou:</h2>
      <h5>Resgate o livro que você estava buscando</h5>
      <div class="books-container" id="visited-area">
        <BookItem 
        :id="book.id"
        :title="book.title"
        :price="book.price"
        :img="book.img"
        v-for="(book) in visited" />
                
      </div>
  </section>

  </main>
</template>
