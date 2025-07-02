<template>
  <section class="container">
    <!-- <h2>{{ userName }}</h2>
    <p>{{ user.age }}</p> -->
    <userData :firstName="user.firstName" :lastName="user.lastName" />
    <button @click="setAge">update age</button>
    <div>
      <!-- <input type="text" placeholder="FirstName" @input="FirstName" />
      <input type="text" placeholder="LastName" @input="LastName" /> -->
      <input type="text" placeholder="FirstName" v-model="user.firstName" />
      <input type="text" placeholder="LastName" ref="lastNameInput" />
      <button @click="setLastName">set last name</button>
    </div>
  </section>
  <!-- <modernComposition /> -->
</template>

<script setup>
import {
  computed,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  provide,
  reactive,
  ref,
  toRef,
  watch,
} from 'vue';
// import modernComposition from './modernComposition.vue';
import userData from './userData.vue';

const user = reactive({
  firstName: '',
  lastName: '',
  age: 31,
});
const lastNameInput = ref(null);

const userName = computed(function () {
  return user.firstName + ' ' + user.lastName;
});

provide('age', toRef(user, 'age'));

watch([userName, user], function (newValues, oldValues) {
  console.log('OldUserName: ', oldValues[0]);
  console.log('newUserName: ', newValues[0]);
  console.log('OldAge: ', oldValues[1]);
  console.log('newAge: ', newValues[1]);
});

function setLastName() {
  user.lastName = lastNameInput.value.value;
}

onBeforeMount(function () {
  console.log('Before Mount');
});

onMounted(function () {
  console.log('on Mounted');
});

onBeforeUpdate(function () {
  console.log('Before Update');
});

onUpdated(function () {
  console.log('on Updated');
});

onBeforeUnmount(function () {
  console.log('Before Unmount');
});

onUnmounted(function () {
  console.log('on Unmounted');
});

// function FirstName(event) {
//   user.firstName = event.target.value;
// }

// function LastName(event) {
//   user.lastName = event.target.value;
// }

// setTimeout(() => {
//   user.name = 'Max';
//   user.age = 32;
// }, 2000);

function setAge() {
  user.age = 32;
}
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
