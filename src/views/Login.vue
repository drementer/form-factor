<template>
  <main class="login" main>
    <form action="/home" class="login__form form" form>
      <Input
        type="text"
        value="drementer"
        label="Kullanıcı Adı"
				info="Kullanıcı adınız"
				error="Boş bırakılamaz"
        required
      ></Input>
      <Input
        type="password"
        value="drementer"
        label="Şifre"
				info="Şifreniz"
				error="Boş bırakılamaz"
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
    Input,
  },
};
</script>
