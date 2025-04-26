<template>
  <div class="min-h-screen bg-[#1b1b29] text-white px-4 flex flex-col pb-4">
    <section>
      <nav class="flex justify-between items-center py-4">
        <h1 class="text-xl font-bold">DASHBOARD</h1>
        <div class="flex items-center space-x-4">
          <img
            src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Profile"
            class="w-14 h-14 rounded-full border-2 border-gray-300"
          />
        </div>
      </nav>
    </section>
    <section class="flex w-full gap-4 flex-grow">
      <!-- Sidebar -->
      <aside class="w-64 bg-[#36b177] text-white p-4 rounded-md">
        <h2 class="text-lg font-bold text-center mb-2">Fullstack Assessment</h2>
        <div class="p-1"></div>
        <div class="my-2">
          <hr class="border-[0.5px] border-b-gray-300 my-2" />
        </div>
        <div class="p-1"></div>
        <ul class="mt-4">
          <li>
            <RouterLink
              to="/"
              class="block hover:bg-green-600 p-2 rounded capitalize"
              >Dashboard / Graph</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/text-to-speech"
              class="block hover:bg-green-600 p-2 rounded"
              >Text To Speech</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/animation"
              class="block hover:bg-green-600 p-2 rounded"
              >Animation</RouterLink
            >
          </li>
        </ul>
      </aside>

      <!-- Main Content -->
      <div class="flex-1 flex flex-col">
        <!-- Navbar -->

        <!-- Dashboard Area -->
        <main class="flex-1">
          <router-view />
        </main>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* Add any custom styles here */
</style>
