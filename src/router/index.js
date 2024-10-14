import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'; 

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
  {
    path: '/:catchAll(.*)',  // Captura todas as rotas desconhecidas
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory('/wb-cursos/'),
  routes,
});

export default router;
