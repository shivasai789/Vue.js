<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="fetch">Load Submitted Experiences</base-button>
      </div>
      <ul>
        <p v-if="isLoading">Loading...</p>
        <p v-else-if="!isLoading && error">{{ error }}</p>
        <p v-else-if="!isLoading && results && results.length === 0">
          No feedbacks found!
        </p>
        <survey-result
          v-else
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  props: ['results', 'fetch-data', 'is-loading', 'error'],
  components: {
    SurveyResult,
  },
  methods: {
    fetch() {
      this.$emit('fetch-data');
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
