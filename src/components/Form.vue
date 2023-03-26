<template>
  <form
    :action="action"
    :metho="method"
    class="form"
    :enctype="enctype"
    @submit="formValidate"
    form
  >
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'Form',
  data: () => {
    return {};
  },
  props: {
    action: String,
    method: String,
    enctype: String,
  },
  components: {},
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
};
</script>

<style lang="scss">
.form {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1em;

  width: 100%;

  @include mq(xs) {
    width: 22rem;
  }

  &__item {
    flex-grow: 1;
    flex-basis: 0;
  }

  &__buttons {
    display: flex;
    gap: 1rem;
  }
}
</style>
