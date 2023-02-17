<template>
  <main class="home" main>
		<Input value="test2" required="false" label="aaa"></Input>
  </main>
</template>

<script>
import Input from '@/components/Input.vue';

export default {
  name: 'HomeView',
  components: {
		Input,
  },
};
</script>
