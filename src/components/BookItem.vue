<script setup lang="ts">
defineProps<{
  id: string,
  title: string,
  price: string,
  img: string
}>()
</script>

<template>
  <div class="book-item">
    <figcaption>
      <img :src="img" :alt="title" :title="title"/>
      <span class="book-title">{{title}}</span>
    </figcaption>
    <p class="price">{{price}}</p>
    <button class="look">Ver</button>
  </div>
</template>

<style scoped>

</style>
