<template>
  <main class="login" main>
    <form action="/home" class="login__form form" form>
      <Input
        type="text"
        value="drementer"
        label="Kullanıcı Adı"
        info-text="Kullanıcı adınız"
        error-text="Boş bırakılamaz"
        only-letter
        required
      ></Input>
      <Input
        type="text"
        value="drementer"
        label="Şifre"
        info-text="Şifreniz"
        error-text="Boş bırakılamaz"
        only-number
        required
      ></Input>
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
import Input from '@/components/Input.vue';

export default {
  name: 'Login',
  components: {
    Input
  },
};
</script>
