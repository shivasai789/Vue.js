const app = Vue.createApp({
  data() {
    return {
      goals: [],
      itemContent: "",
      showItems: true,
    };
  },
  methods: {
    addTask() {
      this.goals.push(this.itemContent);
      this.itemContent = "";
    },
    toggleBtn() {
      this.showItems = !this.showItems;
    },
  },
});

app.mount("#assignment");
