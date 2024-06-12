import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  // redirect: '/login',
  routes: [
    {
      path: "/",
      component: () => import("@/layouts/defaults.vue"),
      redirect: "/login",
      children: [
        {
          path: "/:pathMatch(.*)*",
          name: "not-found",
          component: () => import("@/pages/not-found.vue"),
        },
        {
          path: "/home",
          name: "home",
          component: () => import("@/pages/home.vue"),
        },
      ],
    },

    {
      path: "/",
      component: () => import("@/layouts/authLayouts.vue"),
      children: [
        {
          path: "/login",
          name: "login",
          component: () => import("@/pages/auth/login.vue"),
        },
      ],
    },
  ],
});

router.beforeEach((to, from) => {
  const isLoggedin = JSON.parse(localStorage.getItem("user"));

  if (!isLoggedin && to.name != "login") {
    return { name: "login" };
  }
});

export default router;
