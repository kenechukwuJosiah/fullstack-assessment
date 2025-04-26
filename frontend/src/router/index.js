import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import Animation from "@/views/Animation.vue";
import VirtualLab from "@/views/VirtualLab.vue";
import TextToSpeech from "@/views/TextToSpeech.vue";

const routes = [
  { path: "/", name: "Dashboard", default: true, component: Dashboard },
  { path: "/text-to-speech", name: "TextToSpeech", component: TextToSpeech },
  { path: "/animation", name: "Animation", component: Animation },
  { path: "/virtual-lab", name: "VirtualLab", component: VirtualLab },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
