<template>
  <div class="pt-20 flex justify-center items-center text-gray-500">
    <transition name="fade" v-if="isLoading">
      <pulse-loader></pulse-loader>
    </transition>

    <transition name="fade" v-if="!isLoading">
      <div class="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <form @submit.prevent="speak">
          <h1 class="text-2xl font-bold text-center mb-6">Text-to-Speech</h1>
          <div class="p-2"></div>
          <div class="mb-4" v-if="voiceList.length">
            <label for="voices" class="block text-sm font-medium text-gray-700"
              >Select a voice</label
            >
            <select
              class="mt-1 block w-full rounded-md h-10 border-gray-300 shadow-sm focus:ring-teal-500 focus:border-teal-500"
              id="voices"
              v-model="selectedVoice"
            >
              <option
                v-for="(voice, index) in voiceList"
                :key="index"
                :value="index"
              >
                {{ voice.name }} ({{ voice.lang }})
              </option>
            </select>
          </div>
          <div class="p-2"></div>
          <div class="mb-4">
            <label
              for="text-input"
              class="block text-sm font-medium text-gray-700"
              >Enter text</label
            >
            <textarea
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-teal-500 focus:border-teal-500"
              id="text-input"
              v-model="text"
              rows="6"
              required
            ></textarea>
          </div>
          <div class="p-2"></div>
          <button
            type="submit"
            class="w-full bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Speak
          </button>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  name: "TextToSpeech",
  components: {
    PulseLoader,
  },
  data() {
    return {
      isLoading: true,
      text: "",
      selectedVoice: 0,
      synth: window.speechSynthesis,
      voiceList: [],
      speech: new window.SpeechSynthesisUtterance(),
    };
  },
  mounted() {
    this.loadVoices();
    this.listenForSpeechEvents();
  },
  methods: {
    loadVoices() {
      this.voiceList = this.synth.getVoices();
      if (this.voiceList.length) {
        this.isLoading = false;
      }
      this.synth.onvoiceschanged = () => {
        this.voiceList = this.synth.getVoices();
        setTimeout(() => {
          this.isLoading = false;
        }, 800);
      };
    },
    listenForSpeechEvents() {
      this.speech.onstart = () => {
        this.isLoading = true;
      };
      this.speech.onend = () => {
        this.isLoading = false;
      };
    },
    speak() {
      this.speech.text = this.text;
      this.speech.voice = this.voiceList[this.selectedVoice];
      this.synth.speak(this.speech);
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity ease 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
