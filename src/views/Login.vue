<template>
  <main class="login" main>
    <Form action="/home" class="login__form">
      <Input
        class="form__item"
        type="text"
        value="drementer"
        label="Kullanıcı Adı"
        :error-text="errorText"
        form-item
        only-letter
        required
      />
      <Input
        class="form__item"
        type="password"
        value="drementer"
        label="Şifre"
        info-text="İpucu - Ben kimim?"
        :error-text="errorText"
        form-item
        required
        focus
      />
      <button class="button form__button" type="submit" form-button="submit">
        giriş yap
      </button>
    </Form>
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
import Form from '@/components/Form.vue';
import Input from '@/components/Input.vue';

export default {
  name: 'Login',
  data: () => {
    return {
      errorText: 'Boş bırakılamaz!',
    };
  },
  components: {
    Input,
    Form,
  },
  methods: {},
};
</script>
