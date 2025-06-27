<template>
  <learning-survey></learning-survey>
  <user-experiences
    @fetch-data="fetchData"
    :results="results"
    :is-loading="isLoading"
    :error="error"
  ></user-experiences>
</template>

<script>
import axios from 'axios';
import LearningSurvey from './components/survey/LearningSurvey.vue';
import UserExperiences from './components/survey/UserExperiences.vue';

export default {
  components: {
    LearningSurvey,
    UserExperiences,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  methods: {
    async fetchData() {
      try {
        this.isLoading = true;
        const res = await axios.get(
          'https://vue-sample-2d3ee-default-rtdb.asia-southeast1.firebasedatabase.app/sample.json'
        );
        if (res.status === 200) {
          this.isLoading = false;
          console.log(res.data);
          const data = [];
          for (let id in res.data) {
            data.push({
              id: id,
              name: res.data[id].userName,
              rating: res.data[id].rating,
            });
          }
          this.results = data;
        }
      } catch (e) {
        this.isLoading = false;
        this.error = 'Unable to fetch feedback. Please try again later!';
      }
    },
  },
  mounted() {
    this.fetchData();
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
