<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3>OUTPUT COURSE GOAL</h3>
  <p v-if="goal.showGoals">{{ goal.courseGoal }}</p>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->

  <button @click="ToggleGoals">Toggle Goals</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script setup>
import { reactive } from 'vue';

// const courseGoal = ref('Vue.js');
// const showGoals = ref(false);
// const goal = ref({
//   courseGoal: 'Vue.js',
//   showGoals: false,
// });
const goal = reactive({
  courseGoal: 'Vue.js',
  showGoals: false,
});

function ToggleGoals() {
  // showGoals.value = !showGoals.value;
  // goal.value.showGoals = !goal.value.showGoals;
  goal.showGoals = !goal.showGoals;
}

// export default {
// data() {
//   return {
//     courseGoal: 'Vue.js',
//     showGoals: false,
//   };
// },
// methods: {
//   ToggleGoals() {
//     this.showGoals = !this.showGoals;
//   },
// },
// };
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
