<template>
  <main class="login" main>
    <form class="form login__form" form @submit="formSend">
      <Input
        class="form__item"
        type="text"
        name="userName"
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
        name="password"
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
    </form>
  </main>
</template>

<script>
import Input from '@/components/Input.vue';

export default {
  name: 'Login',
  data: () => {
    return {
      errorText: 'Boş bırakılamaz!',
      userName: 'drementer',
      password: 'drementer',
    };
  },
  components: {
    Input,
  },
  mounted() {
    const vm = this;
    const form = document.querySelector('[form]');

    form.submit = () => {
      vm.formSend();
    };
  },
  methods: {
    formValidate: function () {
      const vm = this;
      const form = document.querySelector('[form]');
      const formItems = form.querySelectorAll('[form-item]');
      const submitButton = form.querySelector('[form-button=submit]');

      const errorClass = vm.errorClass;

      let isItemsValid = false;
      let isFormValid = false;
      let status = false;

      isItemsValid = !Array.from(formItems).some((item) =>
        item.classList.contains(errorClass)
      );

      isFormValid = form.checkValidity();

      status = isItemsValid && isFormValid;

      if (!status) return false;

      submitButton.classList.remove('-disable');
      return true;
    },
    getFormData: function () {
      const form = document.querySelector('[form]');

      let data = {};
      let formData = new FormData(form);

      // In order to use Axios, we need to convert the data type from form/data to object
      formData.forEach((value, key) => (data[key] = value));

      return data;
    },
    formSend: function () {
      const vm = this;
      const isFormValid = vm.formValidate();
      const formData = vm.getFormData();

      const userName = vm.userName;
      const password = vm.password;

      if (userName != formData.userName) return;
      if (password != formData.password) return;
      if (!isFormValid) return;

      vm.$router.push({ name: 'home' });
    },
  },
};
</script>

<style lang="scss">
.login {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
}
</style>
