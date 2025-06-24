const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      warningText: "none",
    };
  },
  watch: {
    counter() {
      if (this.counter === 37) {
        this.warningText = "Not there yet";
        setTimeout(() => {
          this.counter = 0;
          this.warningText = "none";
        }, 5000);
      } else if (this.counter > 37) {
        this.warningText = "Too much!";
        setTimeout(() => {
          this.counter = 0;
          this.warningText = "none";
        }, 5000);
      }
    },
  },
  methods: {
    increment(num) {
      this.counter += num;
    },
  },
});

app.mount("#assignment");
