import Vue from 'vue';
import Router from 'vue-router';
import MainView from './views/MainView.vue';
import About from './views/About.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'mainview',
      component: MainView,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
