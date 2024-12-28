<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Account',
  data () {
    return {
      name: String,
      hello: this.$route.params.hello
    }
  },
  created () {
    
  },
  methods: {

  }
});
</script>

<template>
  <main class="row">
    <aside>
      <ul>
        <li>Sair</li>
      </ul>
    </aside>
    <section class="main">
      <h1>Minha conta</h1>
      <p class="success">{{ hello }}, teu cadastro foi realizado com sucesso!</p>
      <div class="account-container">
        <div class="account-item">
          <img src="../assets/img/order.png" alt="Meus pedidos" title="Meus pedidos"/>
          <RouterLink to="/my-orders">Meus pedidos</RouterLink>
        </div>
        <div class="account-item">
          <img src="../assets/img/wish-list.png" alt="Lista de desejos" title="Lista de desejos"/>
          <RouterLink to="/my-wish-list">Lista de desejos</RouterLink>
        </div>
        <div class="account-item">
          <img src="../assets/img/my-data.png" alt="Meus dados" title="Meus dados"/>
          <RouterLink to="/my-data">Meus dados</RouterLink>
        </div>
        <div class="account-item">
          <img src="../assets/img/invoices.png" alt="Meus chamados" title="Meus chamados"/>
          <RouterLink to="/my-invoices"> Minhas faturas </RouterLink>
        </div>
        <div class="account-item">
          <img src="../assets/img/support.png" alt="Meus chamados" title="Meus chamados"/>
          <RouterLink to="/support"> Meus chamados </RouterLink>
        </div>
      </div>

    </section>
  </main>
</template>

<style>
.success { 
  background-color: #d4edda; 
  border: 1px solid #c3e6cb; 
  border-radius: .25rem; 
  color: #155724; 
  padding: .75rem 1.25rem; 
}

.account-container {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5rem;
}

.account-item {
  border: 1px solid #CCC;
  border-radius: .50rem;
  font-size: .75em;
  margin: .2rem;
  padding: 2rem;
  text-align: center;
}

img {
  display: block;
  margin: auto;
  margin-bottom: 5px;
  height: 50px;
  width: 50px;
}

li { list-style: disclosure-closed; }
</style>