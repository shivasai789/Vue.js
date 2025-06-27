import { createApp } from 'vue';

import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './components/teams/TeamsList.vue';
import UserList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamFooter from './components/teams/TeamFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/teams',
    },
    {
      name: 'teams',
      path: '/teams',
      components: {
        default: TeamsList,
        footer: TeamFooter,
      },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
      beforeEnter(to, from, next) {
        console.log('Global beforeeach');
        next();
      },
    },
    {
      name: 'users',
      path: '/users',
      component: UserList,
    },
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return {
      left: 0,
      top: 0,
    };
  },
});

// navigation guard (authentication)
router.beforeEach(function (to, from, next) {
  // next(false)
  // if (to.name === 'team-members') {
  //   next();
  // } else {
  //   next({ name: 'team-members', params: { teamId: 't1' } });
  // }
  next();
});

const app = createApp(App);

app.use(router);

app.mount('#app');
