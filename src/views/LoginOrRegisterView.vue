<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Login',
   methods: {
    go() {
        this.$router.push({ path: '/account' });
    }
  }
});
</script>

<template>
  <main>
    <h1>Minha conta</h1>
    <p>Você não está autenticado no sistema. Por favor, entre com seu endereço de e-mail ou crie teu cadastro agora mesmo.</p>
    <div class="flex-container">
      <div id="login-area" class="flex-area">
        <h2>Entrar</h2>
        <form name="login" method="POST" class="flex-container">
          <input type="email" name="email" id="login-email" placeholder="Teu e-mail"/>
          <input type="password" name="password" id="login-password" placeholder="Tua senha"/>
          <input type="submit" value="Entrar" name="submit" id="submit-login"/>
        </form>
        <p class="wrong-password"><a ref="#">Esqueceu tua senha?</a></p>
      </div>
      <div id="registration-area" class="flex-area">
        <h2>Cadastrar</h2>
        <form ref="form" action="/account" name="register" method="POST" class="flex-container" @submit.prevent="go">
          <input type="text" name="name" id="register-name" placeholder="Teu nome" required/>
          <input type="email" name="email" id="register-mail" placeholder="Teu e-mail" required/>
          <input type="password" name="password" id="register-pass" placeholder="Tua senha" required/>
          <input type="password" name="confirm-password" id="register-confirm-pass" placeholder="Confirme tua senha" required/>
          <select name="user-type" id="register-user-type" required>
            <option value="pf">Pessoa Física</option>
            <option value="pj">Pessoa Jurídica</option>
          </select>
          <div id="terms-of-use-area">
              <input type="checkbox" name="terms-of-use" id="terms-of-use"/> 
              <label for="gdpr" id="acept-terms-of-use">Aceitar os <a href="#">termos de uso</a>.</label>
          </div>
          <input type="submit" value="Salvar" name="submit" id="submit-register"/>
        </form>
        <!--
        Fail: invalid e-mail.
        Fail: name should not be empty.
        Fail: Password should have 5 or more digits.
        Fail: Password should contain letters.
        Fail: Password should contain numbers.
        Fail: the confirm password doesn't match.
        -->
      </div>
    </div>
  </main>
</template>

<style>
main { margin: auto; padding: 4em 0; width: 80%; }
form { flex-direction: column; }
input, select { margin: 0.25em; padding: 0.5em; }
input[type="submit"] { cursor: pointer; }
.flex-container { display: flex }
.flex-area { padding: 0 2em; width: 50%; }
#login-area { border-right: 1px solid #CCC; }
#acept-terms-of-use { font-size: 0.7em; margin-left: 5px; }
#terms-of-use-area { display: flex; align-items: center; padding: 0.5em; }
.wrong-password { 
  cursor: pointer;
  font-size: 0.75em;  
  margin-top: 30px; 
  text-align: center;
  text-decoration: underline;
}
</style>