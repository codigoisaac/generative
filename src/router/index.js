import { createRouter, createWebHistory } from "vue-router";
import LabyrinthView from "../views/LabyrinthView.vue";
import WavesView from "../views/WavesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/dissolvingLabyrinth",
      name: "Dissolving Labyrinth",
      component: LabyrinthView,
    },
    {
      path: "/wonderingWaves",
      name: "Wandering Waves",
      component: WavesView,
    },
  ],
});

export default router;
