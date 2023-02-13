<template>
  <div class="home">
		<Input value="test2" required="false" label="aaa"></Input>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Input from '@/components/Input.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
		Input,
  },
};
</script>
