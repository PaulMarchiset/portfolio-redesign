import { createApp } from 'vue';
import App from './App.vue';
import routes from '~pages';
import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '@/components/Page404.vue'; 
import { createHead } from "@unhead/vue"
import './index.css';
import V3ScrollLock from 'v3-scroll-lock'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...routes,
    {
      path: '/:catchAll(.*)', 
      component: NotFound,
    },
  ],
});
const app = createApp(App);
const head = createHead()
app.use(router);
app.use(head);
app.use(V3ScrollLock, {})
app.mount('#app');


