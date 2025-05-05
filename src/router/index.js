import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Tables from "../views/Tables.vue";
import Billing from "../views/Billing.vue";
import VirtualReality from "../views/VirtualReality.vue";
import RTL from "../views/Rtl.vue";
import Profile from "../views/Profile.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";

const requireAuth = (to, from, next) => {
  const isAuthenticated = localStorage.getItem("auth") === "true";
  if (!isAuthenticated && to.name !== "Login") {
    next({ name: "Login" });
  } else {
    next();
  }
};


const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/dashboard-default",
    beforeEnter: requireAuth,
  },
  {
    path: "/dashboard-default",
    name: "Dashboard",
    component: Dashboard,
    beforeEnter: requireAuth,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
    beforeEnter: requireAuth,
    
  },
  {
    path: "/billing",
    name: "Facturacion-Ventas",
    component: Billing,
    beforeEnter: requireAuth,
  },
  {
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
    beforeEnter: requireAuth,
  },
  {
    path: "/rtl-page",
    name: "RTL",
    component: RTL,
    beforeEnter: requireAuth,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: requireAuth,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
    
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});


export default router;
