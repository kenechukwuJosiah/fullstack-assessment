<template>
  <div>
    <button
      @click="toggleSidebar"
      class="lg:hidden fixed top-4 right-4 z-50 bg-[#287450] text-white p-2 rounded-md"
    >
      ☰
    </button>

    <aside
      :class="[
        'fixed top-0 left-0 h-full w-64 bg-[#318d62c7] text-white p-4 transform transition-transform duration-300 z-40',
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full rounded',
        'lg:translate-x-0 lg:static lg:block',
      ]"
    >
      <h2 class="text-lg font-bold text-center mb-4">Fullstack Assessment</h2>
      <hr class="border-[0.5px] border-b-gray-300 mb-4" />

      <ul class="space-y-2">
        <li>
          <router-link
            to="/"
            class="block hover:bg-green-600 p-2 rounded capitalize"
            @click="handleLinkClick"
          >
            Dashboard / Graph
          </router-link>
        </li>
        <li>
          <router-link
            to="/text-to-speech"
            class="block hover:bg-green-600 p-2 rounded"
            @click="handleLinkClick"
          >
            Text To Speech
          </router-link>
        </li>
        <li>
          <router-link
            to="/animation"
            class="block hover:bg-green-600 p-2 rounded"
            @click="handleLinkClick"
          >
            Animation
          </router-link>
        </li>
      </ul>
    </aside>

    <div
      v-if="isSidebarOpen"
      @click="isSidebarOpen = false"
      class="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-30 transition-opacity duration-300"
    ></div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const handleLinkClick = () => {
  if (window.innerWidth < 1024) {
    isSidebarOpen.value = false;
  }
};
</script>

<style scoped>
/* Optional: smoother transitions */
aside {
  will-change: transform;
}
</style>
