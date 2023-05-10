import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/Home.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/Circulatory-System",
      name: "CircSys",
      component: () => import('@/views/CirculatorySystem.vue')
    },
    {
      path: "/Digestive-System",
      name: "DigSys",
      component: () => import('@/views/DigestiveSystem.vue'),
    },
    {
      path: "/Respiratory-System",
      name: "RespSys",
      component: () => import('@/views/RespiratorySystem.vue'),
    },
    {
      path: "/Reproduction-and-Parental-Behavior",
      name: "RepSysParBeh",
      component: () => import('@/views/ReproductionParentalBehavior.vue'),
    },
    {
      path: "/Evolution",
      name: "Evolution",
      component: () => import('@/views/Evolution.vue'),
    },
    {
      path: "/Conservation-Status",
      name: "ConsStat",
      component: () => import('@/views/ConservationStatus.vue'),
    },
    {
      path: "/Resources",
      name: "Resources",
      component: () => import('@/views/Resources.vue'),
    },
  ]
    
})
export default router
