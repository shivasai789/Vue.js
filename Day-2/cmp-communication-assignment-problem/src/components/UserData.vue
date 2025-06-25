<template>
  <form @submit.prevent="AddUser">
    <label>Username</label>
    <input type="text" v-model="username" />
    <br />
    <label>Age</label>
    <input type="number" v-model="age" />
    <br />
    <button>submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      age: "",
    };
  },
  methods: {
    AddUser() {
      this.$emit("add-user", this.username, this.age);
      this.username = "";
      this.age = "";
    },
  },
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
