<template>
  <div class="container mrgnbtm">
    <button @click="userCreate({ name: 'burak' })">Create Users</button>
    <button @click="fetchUsers()">get users</button>
		<div>{{ users }}</div>
  </div>
</template>

<script>
import { getUsers, createUser } from '../services/index.js';

export default {
  name: 'User',
  data() {
    return {
      users: [],
      numberOfUsers: 0,
    };
  },
  methods: {
    fetchUsers() {
      getUsers().then((res) => {
        this.users = res;
        this.numberOfUsers = this.users.length;
      });
    },
    userCreate(data) {
      createUser(data).then((res) => {
        this.fetchUsers();
      });
    },
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>
