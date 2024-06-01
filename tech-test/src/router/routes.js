const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "login",
        component: () => import("pages/LoginPage.vue"),
      },
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("pages/TheDashboard.vue"),
      },
      {
        path: "/leads",
        name: "leads",
        component: () => import("pages/AllLeads.vue"),
      },
      {
        path: "/inbox",
        name: "inbox",
        component: () => import("pages/MasterInbox.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
