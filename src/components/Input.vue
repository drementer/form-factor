<template>
  <div class="input">
    <label>
			<span v-if="label">{{ label }}</span>
      <input
        :type="type"
        :name="name"
        :value="value"
        :required="required"
				:placeholder="placeholder"
				input
      />
    </label>
  </div>
</template>

<script>
export default {
  name: 'Input',
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
  },
};
</script>

<style></style>
