<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import BookItem from './components/BookItem.vue'

const currentYear = new Date().getFullYear();

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

</script>

<template>

<header>
  <h1>Bookstore Demo</h1>
  <p>A livraria de <b>testes</b> mais incrível do continente.</p>
</header>

<nav>
  <RouterLink to="/">Início</RouterLink>
  <RouterLink to="#">Categorias</RouterLink>
  <RouterLink to="#">Blog</RouterLink>
  <RouterLink to="#">Mais vendidos</RouterLink>
  <RouterLink to="#">Minha conta</RouterLink>
  <RouterLink to="#">Carrinho</RouterLink>
  <RouterLink to="#">Contato</RouterLink>
</nav>

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
    <h3>Lançamentos</h3>
    <div class="news-container">
      <div class="news-item">

      </div>
    </div>
  </aside>
  <section class="main">
    <h2>QUAL SERÁ TUA PRÓXIMA LEITURA?</h2>
    <h5>Destaques de novembro</h5>
    <div class="books-container">
      <BookItem 
        :id="book.id"
        :title="book.title"
        :price="book.price"
        :img="book.img"
        v-for="(book) in books" />
    </div>
  </section>
</main>

  <footer class="footer">
    <p>&copy; {{currentYear}} Bookstore Demo</p>
  </footer>

  <RouterView />
</template>

<style scoped>

</style>
