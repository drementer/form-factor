<template>
  <section class="add-brand">
    <Form class="add-brand__form" enctype="multipart/form-data">
      <Input
        class="form__item"
        type="text"
        label="Marka İsmi"
        :error-text="errorText"
        form-item
        only-letter
        required
      />
      <UploadInput
        accept=".png,.webp,.jpg,.jpeg"
        label="Marka Logosu"
        required
      />
      <button class="button form__button" type="submit" form-button="submit">
        marka ekle
      </button>
    </Form>
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
import Form from '@/components/Form.vue';
import Input from '@/components/Input.vue';
import UploadInput from '@/components/UploadInput.vue';

export default {
  name: 'AddBrand',
  data: () => {
    return {
      errorText: 'Boş bırakılamaz!',
    };
  },
  components: {
    Input,
    UploadInput,
    Form,
  },
  methods: {},
  mounted() {},
};
</script>
