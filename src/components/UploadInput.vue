<template>
  <div class="input -upload">
    <label class="input__label">
      <span>
        {{ label }}
        <span class="-muted" v-if="mutedText">{{ mutedText }}</span>
      </span>
      <div class="input__core">
        <button
          class="button -fit"
          type="button"
          @click="focusInput"
          upload-button
        >
          Dosya Seç
        </button>
        <span class="input__selected-file">{{ selectedFile }}</span>
      </div>
      <input
        class="input__core -hidden"
        name="files[]"
        type="file"
        :required="required"
        :accept="accept"
        :multiple="multiple"
        upload-input
        @change="getFiles"
      />
      <span v-if="errorText" class="input__error">{{ errorText }}</span>
    </label>
    <p v-if="infoText" class="input__info">{{ infoText }}</p>
  </div>
</template>

<script>
import { uploadFiles } from '@/service/index.js';

export default {
  name: 'UploadInput',
  data: () => {
    return {
      errorClass: '-error',
      uploadedFiles: [],
      uploadingFiles: [],
      selectedFile: 'Seçilmedi',
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
    error: function (error = true) {
      let vm = this;
      let parentElement = vm.$el;

      parentElement.classList.add(vm.errorClass);
      if (!error) parentElement.classList.remove(vm.errorClass);
    },
    focusInput: function () {
      let uploadInput = document.querySelector('[upload-input]');
      uploadInput.click();
    },
    isFileExist: function (fileName) {
      let vm = this;
      let status = false;

      status = vm.uploadedFiles.some((item) => item.originalname == fileName);
      return status;
    },
    getFiles: function (e) {
      let vm = this;
      let element = e.target;
      let files = Object.entries(element.files);

      files.forEach((file) => {
        file = file[1];

        let fileName = file.name;
        let isDublicate = vm.isFileExist(fileName);
        let status = isDublicate;

        if (status) return;

        vm.uploadingFiles.push(file);
      });

      uploadFiles(vm.uploadingFiles).then((res) => {
        let isMultiple = vm.multiple;

        let uploadedFiles = res;
        let lastUploadedFile = uploadedFiles.slice(-1)[0];

        uploadedFiles.forEach((file) => {
          vm.uploadedFiles.push(file);
        });

        if (isMultiple) {
          vm.$emit('upload', vm.uploadedFiles);
        } else {
          vm.$emit('upload', vm.uploadedFiles.slice(-1));
        }

        vm.selectedFile = lastUploadedFile.originalname;
        vm.uploadingFiles = [];
      });
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
