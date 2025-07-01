<template>
  <base-container v-if="authorized" title="Vuex">
    <h1>{{ normalizeCounter }}</h1>
    <button @click="inc">Add</button>
    <button @click="increase({ value: 10 })">Add 10</button>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import UserAuth from './components/UserAuth.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    BaseContainer,
    UserAuth,
  },
  computed: {
    // counter() {
    //   return this.$store.getters.normalizeCounter;
    // },
    ...mapGetters('counter', ['normalizeCounter']),
    ...mapGetters(['authorized']),
  },
  methods: {
    // add() {
    //   this.$store.commit('increment');
    // },
    // add() {
    // this.$store.commit('increase', { value: 20 });
    // this.$store.commit({
    //   type: 'increase',
    //   value: 10,
    // });
    // this.$store.dispatch('increment');

    // },

    // ...mapActions(['increment', 'increase']),
    ...mapActions('counter', { inc: 'increment', increase: 'increase' }),
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
