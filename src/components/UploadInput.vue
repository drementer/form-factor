<template>
  <div class="input -upload">
    <label class="input__label">
      <span>
        {{ label }}
        <span class="-muted" v-if="mutedText">{{ mutedText }}</span>
      </span>
      <div class="input__core">
        <div class="button -fit" type="button" upload-button>Dosya Seç</div>
        <span upload-file-text>Henüz seçilmedi</span>
      </div>
      <input
        class="input__core -hidden"
        name="files[]"
        type="file"
				:required="required"
        :accept="accept"
        :multiple="multiple"
      />
      <span v-if="errorText" class="input__error">{{ errorText }}</span>
    </label>
    <p v-if="infoText" class="input__info">{{ infoText }}</p>
  </div>
</template>

<style lang="scss" scoped>
.input {
  &__core {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    gap: 1em;

    padding: 0.5em;
  }
}
</style>

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
