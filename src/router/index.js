import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'; // Substitua com os seus componentes

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: "/cursos",
    name: "cursos",
    component: () => import("../views/CursosView.vue"),
  },
  {
    path: "/curso/:id",
    name: "curso",
    component: () => import("../views/CursoByIdView.vue"),
  },
  {
    path: "/contato",
    name: "contato",
    component: () => import("../views/ContatoView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
