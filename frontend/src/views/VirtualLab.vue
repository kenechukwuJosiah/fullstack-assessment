<template>
  <section class="p-6 bg-white rounded-xl shadow-lg mb-6">
    <h2 class="text-2xl font-bold mb-4 text-[#36b177]">Launch Virtual Labs</h2>

    <p class="text-gray-700 mb-4">
      Our virtual labs simulate real-world environments to help you gain
      hands-on experience. Purchase access to explore advanced scenarios,
      practice modules, and certifications.
    </p>

    <div v-if="hasPurchased">
      <p class="mb-4 text-green-700 font-medium">
        ✅ Access granted! You can now interact with the virtual lab below.
      </p>
      <iframe
        src="https://3dp-dei.vlabs.ac.in/"
        width="100%"
        height="500"
        class="rounded border border-gray-300"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>

    <div v-else class="text-gray-700">
      <p class="mb-4">
        🔒 You don't currently have access to this lab. Please complete your
        purchase to proceed.
      </p>
      <div class="p-2"></div>
      <button
        @click="simulatePurchase"
        class="bg-[#36b177] text-white px-6 mt-4 py-2 rounded hover:bg-green-700 transition"
      >
        Launch Virtual Lab
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const hasPurchased = ref(false);

const simulatePurchase = () => {
  hasPurchased.value = true;
};
</script>
