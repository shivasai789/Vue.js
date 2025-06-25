<template>
  <ul>
    <div>
      <user-data @add-user="AddUserDetails"></user-data>
    </div>
    <div>
      <active-users
        v-for="user in users"
        :key="user.id"
        :id="user.id"
        :username="user.username"
        :age="user.age"
      ></active-users>
    </div>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          id: "shiva",
          username: "shiva",
          age: 21,
        },
        {
          id: "vijay",
          username: "vijay",
          age: 24,
        },
      ],
    };
  },
  methods: {
    AddUserDetails(username, age) {
      const newUser = {
        id: username,
        username: username,
        age: age,
      };
      this.users.push(newUser);
    },
  },
};
</script>

<style>
#app ul {
  display: flex;
  height: 100vh;
}
#app ul div {
  min-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
