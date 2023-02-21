<template>
  <div class="input">
    <label class="input__label">
      <span>
        {{ label }}
        <span class="-muted" v-if="mutedText">{{ mutedText }}</span>
      </span>
      <input
        class="input__core"
        :name="name"
        :type="type"
        :value="value"
        :placeholder="placeholder"
        :maxlength="maxLenght"
        :minlength="minLenght"
        :required="required"
        @input="validate"
        autocomplete="off"
        input
        :only-number="onlyNumber"
        :only-letter="onlyLetter"
      />
      <span v-if="errorText" class="input__error">{{ errorText }}</span>
    </label>
    <p v-if="infoText" class="input__info">{{ infoText }}</p>
  </div>
</template>

<style lang="scss">
.input {
  $this: #{&};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding: 0.5em;

  color: $white;
  font-size: 1rem;

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

    @at-root #{$this}.-error & {
      color: red;
      border-color: red;
    }

    color: inherit;
    font-size: 1.2em;

    background-color: rgba($dark-green, 0.3);

    border: 1px solid rgba($light-green, 0.4);
    border-radius: 7px;
    outline: 0;

    &:hover:not(:invalid) {
      background-color: rgba($dark-green, 0.5);
    }

    &:focus:not(:invalid) {
      border-color: $green;
      background-color: rgba($dark-green, 0.5);
    }

    &:invalid {
      color: red;
      border-color: red;
      background-color: rgba(red, 0.1);
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
  }
}
</style>

<script>
export default {
  name: 'Input',
  data: () => {
    return {
      errorClass: '-error',
    };
  },
  props: {
    type: {
      type: String,
      default: 'text',
    },
    name: String,
    value: String,
    placeholder: String,
    required: Boolean,
    label: String,
    infoText: String,
    errorText: String,
    maxLenght: Number,
    minLenght: Number,
    onlyNumber: Boolean,
    onlyLetter: Boolean,
    mutedText: String,
  },
  methods: {
    validate: function (e) {
      let element = e.target;

      element.value = element.value.replaceAll(' ', '');

      let isOnylNumber = element.hasAttribute('only-number');
      let isOnlyLetter = element.hasAttribute('only-letter');
      let isRequired = element.hasAttribute('required');
      let isNull = element.value == '';

      if (isOnylNumber) this.numberMask(element);
      if (isOnlyLetter) this.letterMask(element);

      if (isRequired && isNull) {
        this.error(true);
        return;
      }

      this.error(false);
    },
    numberMask: function (element) {
      element.value = element.value.replace(/[^\d]/g, '');
    },
    letterMask: function (element) {
      element.value = element.value.replace(/[^a-zA-Z]/g, '');
    },
    error: function (error = true) {
      let parentElement = this.$el;

      if (error) {
        parentElement.classList.add(this.errorClass);
        return;
      }

      parentElement.classList.remove(this.errorClass);
    },
  },
};
</script>
