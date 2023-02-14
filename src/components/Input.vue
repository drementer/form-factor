<template>
  <div class="input">
    <label class="input__label">
      <span>
        {{ label }}
        <span class="-muted" v-if="required">Required</span>
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
        @input="masks"
        autocomplete="off"
        input
      />
      <span v-if="error" class="input__error">{{ error }}</span>
    </label>
    <p v-if="info" class="input__info">{{ info }}</p>
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
    info: String,
    error: String,
    maxLenght: Number,
    minLenght: Number,
  },
  methods: {
    masks: function (e) {
      let element = e.target;
      let value = element.value.trim();
      let isRequired = element.hasAttribute('required');
      let isNull = value == '';
      let parentElement = this.$el;

      this.parentElement = parentElement;

      if (isRequired && isNull) {
        this.setError(true);
        return;
      }

      this.setError(false);
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
