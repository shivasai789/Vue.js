<template>
  <base-container>
    <h2>Active Users</h2>
    <base-search
      @search="updateSearch"
      :search-term="enteredSearchTerm"
    ></base-search>
    <div>
      <button @click="sort('asc')" :class="{ selected: sorting === 'asc' }">
        Sort Ascending
      </button>
      <button @click="sort('desc')" :class="{ selected: sorting === 'desc' }">
        Sort Descending
      </button>
    </div>
    <ul>
      <user-item
        v-for="user in displayedUsers"
        :key="user.id"
        :user-name="user.fullName"
        :id="user.id"
        @list-projects="$emit('list-projects', $event)"
      ></user-item>
    </ul>
  </base-container>
</template>

<script>
import UserItem from './UserItem.vue';
import { ref, computed, watch } from 'vue';

export default {
  components: {
    UserItem,
  },
  props: ['users'],
  setup(props) {
    const enteredSearchTerm = ref('');
    const activeSearchTerm = ref('');
    const sorting = ref(null);

    const availableUsers = computed(() => {
      if (!props.users) return [];
      if (activeSearchTerm.value) {
        return props.users.filter((usr) =>
          usr.fullName.includes(activeSearchTerm.value)
        );
      }
      return props.users;
    });

    const displayedUsers = computed(() => {
      if (!sorting.value) return availableUsers.value;

      return availableUsers.value.slice().sort((u1, u2) => {
        if (sorting.value === 'asc') {
          return u1.fullName.localeCompare(u2.fullName);
        } else {
          return u2.fullName.localeCompare(u1.fullName);
        }
      });
    });

    function updateSearch(val) {
      enteredSearchTerm.value = val;
    }

    function sort(mode) {
      sorting.value = mode;
    }

    watch(enteredSearchTerm, (val) => {
      setTimeout(() => {
        if (val === enteredSearchTerm.value) {
          activeSearchTerm.value = val;
        }
      }, 300);
    });

    return {
      enteredSearchTerm,
      activeSearchTerm,
      sorting,
      availableUsers,
      displayedUsers,
      updateSearch,
      sort,
    };
  },
  // data() {
  //   return {
  //     enteredSearchTerm: '',
  //     activeSearchTerm: '',
  //     sorting: null,
  //   };
  // },
  // computed: {
  //   availableUsers() {
  //     let users = [];
  //     if (this.activeSearchTerm) {
  //       users = this.users.filter((usr) =>
  //         usr.fullName.includes(this.activeSearchTerm)
  //       );
  //     } else if (this.users) {
  //       users = this.users;
  //     }
  //     return users;
  //   },
  //   displayedUsers() {
  //     if (!this.sorting) {
  //       return this.availableUsers;
  //     }
  //     return this.availableUsers.slice().sort((u1, u2) => {
  //       if (this.sorting === 'asc' && u1.fullName > u2.fullName) {
  //         return 1;
  //       } else if (this.sorting === 'asc') {
  //         return -1;
  //       } else if (this.sorting === 'desc' && u1.fullName > u2.fullName) {
  //         return -1;
  //       } else {
  //         return 1;
  //       }
  //     });
  //   },
  // },
  // methods: {
  //   updateSearch(val) {
  //     this.enteredSearchTerm = val;
  //   },
  //   sort(mode) {
  //     this.sorting = mode;
  //   },
  // },
  // watch: {
  //   enteredSearchTerm(val) {
  //     setTimeout(() => {
  //       if (val === this.enteredSearchTerm) {
  //         this.activeSearchTerm = val;
  //       }
  //     }, 300);
  //   },
  // },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
