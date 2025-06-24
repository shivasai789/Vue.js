const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish course and learn Vue!",
      courseGoalDescA: "Learn Vue!",
      courseGoalDescB: "Master Vue!",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const random = Math.random();
      if (random <= 0.5) {
        return this.courseGoalDescA;
      }
      return this.courseGoalDescB;
    },
  },
});

app.mount("#user-goal");
