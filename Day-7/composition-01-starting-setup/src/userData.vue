<template>
  <h2>{{ userName }}</h2>
  <p>{{ age }}</p>
</template>

<script>
import { computed, inject } from 'vue';
export default {
  props: ['firstName', 'lastName'],
  //   setup(props, context) {
  setup(props) {
    const userName = computed(function () {
      return props.firstName + ' ' + props.lastName;
    });

    const age = inject('age');

    // context.$emit()

    return {
      userName,
      age,
    };
  },
};
</script>
