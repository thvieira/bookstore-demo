<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

export default defineComponent({
  name: 'App',
  data() {
    return { 
      currentYear: new Date().getFullYear()
    }
  }
});
</script>

<template>

  <header>
    <h1>Bookstore Demo</h1>
    <p>A livraria de <b>testes</b> mais incrível do continente.</p>
  </header>

  <nav>
    <RouterLink to="/">Início</RouterLink>
    <RouterLink to="/categories">Categorias</RouterLink>
    <RouterLink to="/blog">Blog</RouterLink>
    <RouterLink to="/ranking">Mais vendidos</RouterLink>
    <RouterLink to="/login">Minha conta</RouterLink>
    <RouterLink to="/cart">Carrinho</RouterLink>
    <RouterLink to="/contact">Contato</RouterLink>
  </nav>

  <RouterView />

  <footer class="footer">
    <p>&copy; {{currentYear}} Bookstore Demo</p>
  </footer>

</template>

<style scoped>

</style>
