<template>
  <li>
    <h2>{{ name }} {{ isFavourite === "1" ? "(Favourite)" : "" }}</h2>
    <button @click="ToggleDetails">
      {{ detailsVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="ToggleFavourite">
      {{ isFavourite === "1" ? "Remove" : "Add" }} Favourite
    </button>
    <ul v-if="detailsVisible">
      <li><strong>Phone: </strong> {{ phoneNumber }}</li>
      <li><strong>Email: </strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  //   props: ["name", "phoneNumber", "emailAddress", "isFavourite"],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavourite: {
      type: String,
      required: false,
      default: "0",
      validator: function (value) {
        return value === "1" || value === "0";
      },
    },
  },
  emits: ["toggle-favourite"],
  //   emits: {
  //     "toggle-favourite": function(id){
  //         if(id){
  //             return true
  //         }
  //         return false
  //     }
  //   },
  data() {
    return {
      detailsVisible: false,
      friend: {
        id: "shiva",
        name: "shiva sai",
        phone: "0123 456 789",
        email: "shiva@gmail.com",
      },
    };
  },
  methods: {
    ToggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
    ToggleFavourite() {
      this.$emit("toggle-favourite", this.id);
    },
  },
};
</script>
