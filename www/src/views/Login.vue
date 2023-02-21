<template>
  <main class="login" main>
    <form action="/home" class="form login__form" form>
      <Input
        type="text"
        value="drementer"
        label="Kullanıcı Adı"
        error-text="Hatalı veya eksik girdiniz!"
        only-letter
        required
      ></Input>
      <Input
        type="password"
        value="drementer"
        label="Şifre"
        info-text="İpucu - Ben kimim?"
        error-text="Hatalı veya eksik girdiniz!"
        required
      ></Input>
      <button class="button form__button" type="submit">giriş yap</button>
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
