const app = Vue.createApp({
  data() {
    return {
      inputText: "",
      isToggle: false,
      inputBg: "",
    };
  },
  computed: {
    handleStyles() {
      console.log(this.inputText);
      if (this.inputText === "user1") {
        return { user1: true };
      } else if (this.inputText === "user2") {
        return { user2: true };
      } else if (this.isToggle === true) {
        return { hidden: true };
      } else {
        return { visible: true };
      }
      return {};
    },
    handleBg() {
      return { backgroundColor: this.inputBg };
    },
  },
  methods: {
    handleInput(e) {
      console.log(e.target.value);
      this.inputText = e.target.value;
    },
    toggleBtn() {
      this.isToggle = !this.isToggle;
    },
    updateBg(e) {
      this.inputBg = e.target.value;
    },
  },
});

app.mount("#assignment");
