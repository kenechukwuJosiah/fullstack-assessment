<template>
  <div class="min-h-screen bg-[#1b1b29] text-white px-4 flex flex-col pb-4">
    <section>
      <nav class="flex justify-between items-center py-4">
        <h1 class="text-xl font-bold">DASHBOARD</h1>
        <!-- <div class="flex items-center space-x-4">
          <img
            src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Profile"
            class="w-14 h-14 rounded-full border-2 border-gray-300"
          />
        </div> -->
      </nav>
    </section>
    <section class="flex w-full gap-4 flex-grow">
      <sidebar></sidebar>

      <div class="flex-1 flex flex-col">
        <main class="flex-1">
          <router-view />
        </main>
      </div>
    </section>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
export default {
  name: "App",
  components: {
    Sidebar,
  },
};
</script>

<style>
/* Add any custom styles here */
</style>
