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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding: 0.5rem;

  font-size: 16px;

  .-muted {
    opacity: 0.5;
    font-size: 0.85em;
  }

  &.-error &__error {
    display: block;
  }

  &.-error &__core {
    color: red;
    border-color: red;
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

    font-size: 1.2em;

    border: 1px solid rgba(black, 0.6);
    border-radius: 7px;
    outline: 0;
  }

  &__error {
    display: none;

    margin: 0;
    padding: 0;

    color: red;
    font-size: 0.8em;
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
      let value = element.value.trim();

      let isOnylNumber = element.hasAttribute('only-number');
      let isOnlyLetter = element.hasAttribute('only-letter');
      let isRequired = element.hasAttribute('required');
      let isNull = value == '';

      if (isOnylNumber) this.numberMask(element);
      if (isOnlyLetter) this.letterMask(element);

      if (isRequired && isNull) {
        this.setError(true);
        return;
      }

      this.setError(false);
    },
    numberMask: function (element) {
      element.value = element.value.replace(/[^\d]/g, '');
    },
    letterMask: function (element) {
      element.value = element.value.replace(/[^a-zA-Z]/g, '');
    },
    setError: function (error = true) {
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
