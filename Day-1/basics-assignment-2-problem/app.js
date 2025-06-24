const app = Vue.createApp({
  data() {
    return {
      alertText: "hii!",
      outputValue: "",
      outputValue2: "",
    };
  },
  methods: {
    showAlert() {
      alert(this.alertText);
    },
    inputValue(e) {
      this.outputValue = e.target.value;
    },
    inputValue2(e) {
      this.outputValue2 = e.target.value;
    },
  },
});

app.mount("#assignment");
