<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <p>{{ user.age }}</p>
  </section>
  <modern-composition></modern-composition>
</template>

<script>
import { reactive } from 'vue';
import modernComposition from './modernComposition.vue';

export default {
  components: {
    modernComposition,
  },
  setup() {
    // ref() -> used with any data strings,numbers,obj,...
    // const name = ref('Maximilian');
    // const age = ref(31);

    // reactive() -> only used with obj
    const user = reactive({
      name: 'Maximilian',
      age: 31,
    });

    setTimeout(function () {
      // name.value = 'Max';
      // age.value = 32;
      user.name = 'Max';
      user.age = 32;
    }, 2000);

    return {
      // userName: name,
      // userAge: age,
      user,
    };
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
