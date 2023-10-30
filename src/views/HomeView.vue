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
        @removerItem="(id) => apagar(id)"

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

<script lang="ts">
  import { defineComponent } from 'vue';
  import BookItem from '@/components/BookItem.vue'
  import axios from "axios";

  export default defineComponent({
    name: "Main View",
    components: {
      BookItem
    },
    data() {
      return {
        books: [],
        popBooks: [
          {id: "10", title: "Morte Sul Peste Oeste", price: "R$ 50.00", img: "https://s3.amazonaws.com/img.iluria.com/product/78CD3B/13383BB/450xN.jpg"},
          {id: "11", title: "Cem anor de solidão", price: "R$ 50.00", img: "https://m.media-amazon.com/images/I/81SQPrWU7SL.jpg"}
        ],
        visited: [
          {id: "12", title: "La Patagônia Rebelde", price: "R$ 90.00", img: "https://m.media-amazon.com/images/I/51OsQZy1AVL.jpg"},
          {id: "13", title: "Nosotros decimos no", price: "R$ 50.00", img: "https://m.media-amazon.com/images/I/81QTOPTMyyL.jpg"},
          {id: "14", title: "Martin Fierro", price: "R$ 30.00", img: "https://4.bp.blogspot.com/-i1PwlA8hk1Y/UUtmugkCa2I/AAAAAAAAKqM/wlWetsReves/s1600/CAPA_MART%25C3%258DN+FIERRO+%25284%2529.JPG"},
          {id: "15", title: "A conquista do pão", price: "R$ 60.00", img: "https://static21.minhalojanouol.com.br/livrariaterralivre/produto/multifotos/hd/20220909114716_5957994043_DZ.jpg"}
        ]
      }
    },
    async beforeMount() {
      this.books = await axios.get("http://localhost:3000/books")
        .then(  (response) => response.data )                       // em caso de sucesso.
        .catch( (error)    => console.log("API FAILS: " + error) ); // em caso de falha.
    }
  });
</script>


