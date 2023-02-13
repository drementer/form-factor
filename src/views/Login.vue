<template>
  <main class="login" main>
    <form action="/home" class="login__form form" form>
      <input type="text" value="drementer" required />
      <input type="password" value="drementer" required />
      <button>giriş yap</button>
    </form>
  </main>
</template>

<style lang="scss">
.login {
  display: flex;
  justify-content: center;
  align-items: center;

	height: 100%;
}
</style>

<script>
export default {
  name: 'Login',
};
</script>
