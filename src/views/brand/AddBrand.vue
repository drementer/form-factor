<template>
  <section class="add-brand">
    <form
      action="/home"
      class="form add-brand__form"
      @submit="formValidate"
      form
			enctype="multipart/form-data"
    >
      <Input
        class="form__item"
        type="text"
        label="Marka İsmi"
        :error-text="errorText"
        form-item
        only-letter
        required
      />
      <UploadInput accept=".png,.webp,.jpg,.jpeg" label="Marka Logosu" required />
      <button class="button form__button" type="submit" form-button="submit">
        marka ekle
      </button>
    </form>
  </section>
</template>

<style lang="scss">
.add-brand {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
}
</style>

<script>
import Input from '@/components/Input.vue';
import UploadInput from '@/components/UploadInput.vue';

export default {
  name: 'AddBrand',
  data: () => {
    return {
      errorText: 'Boş bırakılamaz.',
      errorClass: '-error',
    };
  },
  components: {
    Input,
    UploadInput,
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
  mounted() {},
};
</script>
