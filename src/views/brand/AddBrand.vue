<template>
  <main class="add-brand">
    <Form
      class="add-brand__form"
      enctype="multipart/form-data"
      form
      @submit="formSend"
    >
      <Input
        class="form__item"
        type="text"
        label="Marka İsmi"
        name="brandName"
        :error-text="errorText"
        :mutedText="mutedText"
        form-item
        focus
        required
      />
			<Textarea
        class="form__item"
        label="Marka Açıklaması"
        name="brandDescription"
				:max-lenght="140"
				:min-lenght=15
        form-item
      />
      <UploadInput
        class="form__item"
        accept=".png,.webp,.jpg,.jpeg"
        label="Marka Görseli"
        @upload="getUploadedFiles"
      />
			<Input
        class="form__item"
        type="text"
        label="Görsel SEO"
        name="imageSeo"
				info-text="Marka görseli yüklendiğinde görsel için SEO"
        form-item
      />
      <button class="button form__button" type="submit" form-button="submit">
        marka ekle
      </button>
    </Form>
  </main>
</template>

<script>
import Form from '@/components/Form.vue';
import Input from '@/components/Input.vue';
import UploadInput from '@/components/UploadInput.vue';
import Textarea from '@/components/Textarea.vue';

import { addBrand } from '@/service/index.js';

export default {
  name: 'AddBrand',
  data: () => {
    return {
      errorText: 'Boş bırakılamaz!',
      mutedText: 'Zorunlu',
      uploadedFiles: [],
    };
  },
  components: {
    Input,
    UploadInput,
    Form,
		Textarea
  },
  mounted() {
    const vm = this;
    const form = document.querySelector('[form]');

    form.submit = () => {
      vm.formSend();
    };
  },
  methods: {
    getUploadedFiles: function (uploadedFiles) {
      this.uploadedFiles = uploadedFiles;
    },
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
      let vm = this;
      const form = document.querySelector('[form]');

      let data = {};
      let formData = new FormData(form);
      let uploadedFiles = vm.uploadedFiles;

      // In order to use Axios, we need to convert the data type from form/data to object
      formData.forEach((value, key) => (data[key] = value));
      data.files = uploadedFiles;

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
      /* if (!isFormValid) return; */

      addBrand(formData);
      vm.$router.push({ path: '/brands' });
    },
  },
};
</script>

<style lang="scss">
.add-brand {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
}
</style>
