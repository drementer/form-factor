<template>
  <div class="textarea">
    <label class="textarea__label">
      <span>
        {{ label }}
        <span class="-muted" v-if="mutedText">{{ mutedText }}</span>
      </span>
      <textarea
        class="textarea__core"
        :name="name"
        :value="value"
        :placeholder="placeholder"
        :maxlength="maxLenght"
        :minlength="minLenght"
        :required="required"
        @input="
          ($event) => {
            validate($event), resize($event);
          }
        "
        autocomplete="off"
        input
        :autofocus="focus"
      >
      </textarea>
      <span v-if="errorText" class="textarea__error">{{ errorText }}</span>
    </label>
    <p v-if="infoText" class="textarea__info">{{ infoText }}</p>
  </div>
</template>

<script>
export default {
  name: 'Input',
  data: () => {
    return {
      errorClass: '-error',
    };
  },
  props: {
    name: String,
    value: String,
    placeholder: String,
    required: Boolean,
    label: String,
    infoText: String,
    errorText: String,
    maxLenght: Number,
    minLenght: Number,
    mutedText: String,
    focus: Boolean,
  },
  methods: {
    validate: function (e) {
      let vm = this;
      let element = e.target;

      let isRequired = element.hasAttribute('required');
      let isNull = element.value == '';

      vm.error(false);
      if (isRequired && isNull) vm.error(true);
    },
    error: function (error = true) {
      let vm = this;
      let parentElement = vm.$el;

      parentElement.classList.remove(vm.errorClass);
      if (error) parentElement.classList.add(vm.errorClass);
    },
    resize: function (e) {
      let vm = this;
      let element = e.target;

      element.style.height = 'auto';
      element.style.height = element.scrollHeight + 'px';
    },
  },
};
</script>

<style lang="scss">
.textarea {
  $this: #{&};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding: 0;

  font-size: 1.125rem;

  .-muted {
    opacity: 0.5;
    font-size: 0.85em;
  }

  &__label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: flex-start;
    gap: 5px;

    width: 100%;
  }

  &__core {
    margin: 0;
    padding: 0.5em 1em;

    height: max-content;
    min-height: 70px !important;
    max-height: 500px;

    color: inherit;
    font-size: 1em;

    background-color: rgba($dark-green, 0.3);

    border: 1px solid rgba($light-green, 0.4);
    border-radius: $border-radius;

    resize: none;
    overflow-y: hidden;
    outline: 0;

    &:hover:not(:invalid) {
      background-color: rgba($dark-green, 0.5);
    }

    &:focus-visible:not(:invalid) {
      border-color: $green;
      background-color: rgba($dark-green, 0.5);
    }

    @at-root #{$this}.-error & {
      color: red;
      border-color: red;
    }
  }

  &__error {
    display: none;

    margin: 0;
    padding: 0;

    color: red;
    font-size: 0.8em;

    @at-root #{$this}.-error & {
      display: block;
    }
  }

  &__info {
    margin: 5px 0 0;
    padding: 0;

    font-size: 0.8em;
    opacity: 0.8;
  }
}
</style>
