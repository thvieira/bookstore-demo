<template>
  <div class="book-item">
    <figcaption>
      <img :src="img" :alt="title" :title="title"/>
      <span class="book-title">{{title}}</span>
    </figcaption>
    <p class="price">R$ {{price}}</p>
    <button class="look" @click="addToCart(id)">Adicionar ao Carrinho</button>
    <button class="look" @click="$emit('comprar', id)">Comprar agora</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from "axios";

export default defineComponent({
    name: "Main View",
    emits: ['comprar'],
    props: {
      id: String,
      title: String,
      price: String,
      img: String
    },
    methods: {
      addToCart(bookId) {
        console.log(`Add item to the cart. ID = ${bookId}.`);
      }
    }
});
</script>

<style scoped>

</style>
