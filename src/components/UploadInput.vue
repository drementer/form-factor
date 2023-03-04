<template>
  <div class="input -upload">
    <label class="input__label">
      <span>
        {{ label }}
        <span class="-muted" v-if="mutedText">{{ mutedText }}</span>
      </span>
      <div class="input__core">
        <div class="button -fit" type="button" upload-button>Dosya Seç</div>
        <span upload-file-text>Seçilmedi</span>
      </div>
      <input
        class="input__core -hidden"
        name="files[]"
        type="file"
        :required="required"
        :accept="accept"
        :multiple="multiple"
        upload-input
      />
      <span v-if="errorText" class="input__error">{{ errorText }}</span>
    </label>
    <p v-if="infoText" class="input__info">{{ infoText }}</p>
  </div>
</template>

<script>
export default {
  name: 'UploadInput',
  data: () => {
    return {
      errorClass: '-error',
    };
  },
  props: {
    required: Boolean,
    label: String,
    infoText: String,
    errorText: String,
    mutedText: String,
    multiple: Boolean,
    accept: String,
  },
  methods: {
    validate: function (e) {
      let element = e.target;
      let vm = this;
    },
    error: function (error = true) {
      let vm = this;
      let parentElement = vm.$el;

      if (error) {
        parentElement.classList.add(vm.errorClass);
        return;
      }

      parentElement.classList.remove(vm.errorClass);
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  &__core {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    gap: 0.5em;

    padding: 0.5em 1rem 0.5rem 0.5rem;
  }
}
</style>
