<template>
  <main class="login" main>
    <form action="/home" class="form login__form" @submit="formValidate" form>
      <Input
        class="form__item"
        type="text"
        value="drementer"
        label="Kullanıcı Adı"
        :error-text="errorText"
        form-item
        only-letter
        required
      ></Input>
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
      ></Input>
      <button class="button form__button" type="submit" form-button="submit">
        giriş yap
      </button>
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
  data: () => {
    return {
      errorText: 'Boş bırakılamaz.',
      errorClass: '-error',
    };
  },
  components: {
    Input,
  },
  methods: {
    formValidate: function (e) {
      const vm = this;
      const form = e.target;
      const formItems = form.querySelectorAll('[form-item]');

      const errorClass = vm.errorClass;

      let isItemsValid = false;
      let isFormValid = false;
      let status = false;

      e.preventDefault();

      isItemsValid = !Array.from(formItems).some((item) =>
        item.classList.contains(errorClass)
      );

      isFormValid = form.checkValidity();

      status = isItemsValid && isFormValid;

      if (!status) return;

      form.submit();
    },
  },
};
</script>
