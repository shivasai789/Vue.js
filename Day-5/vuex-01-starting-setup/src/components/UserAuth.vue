<template>
  <button v-if="!authorized" @click="login">login</button>
  <button v-else @click="logout">logout</button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['authorized']),
  },
  methods: {
    ...mapActions(['login', 'logout']),
  },
};
</script>
