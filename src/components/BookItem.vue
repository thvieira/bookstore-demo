<template>
  <div class="book-item">
    <div class="infos">
      <figcaption>
        <img :src="img" :alt="title" :title="title"/>
        <span class="book-title">{{title}}</span>
      </figcaption>
      <p class="price">R$ {{price}}</p>
    </div>
    <div class="actions">  
      <button class="look" @click="addToCart(id)">Adicionar ao Carrinho</button>
      <button class="look" @click="$emit('buy', id)">Comprar agora</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Main View",
    emits: ['buy'],
    props: {
      id: String,
      title: String,
      price: String,
      img: String
    },
    methods: {
      addToCart(bookId: any) {
        console.log(`Add item to the cart. ID = ${bookId}.`);
      }
    }
});
</script>

<style scoped>

</style>
