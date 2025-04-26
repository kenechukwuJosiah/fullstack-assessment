<template>
  <div>
    <div ref="animatedBox" class="box">Animated Box</div>
    <button @click="triggerAnimation" class="animate-btn">
      Trigger Animation
    </button>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  mounted() {
    // Initial animation on mount
    gsap.from(this.$refs.animatedBox, {
      duration: 1,
      y: -100,
      opacity: 0,
      ease: "bounce",
    });
  },
  methods: {
    triggerAnimation() {
      // Cool animations triggered on button click
      const box = this.$refs.animatedBox;
      gsap
        .timeline()
        .to(box, {
          duration: 0.5,
          rotation: 360,
          scale: 1.2,
          borderRadius: "50%",
          ease: "power2.inOut",
        })
        .to(box, { duration: 0.5, scale: 1, ease: "elastic.out(1, 0.3)" })
        .to(box, {
          duration: 0.5,
          x: 100,
          backgroundColor: "#ff5722",
          ease: "power2.inOut",
        })
        .to(box, {
          duration: 0.5,
          x: 0,
          backgroundColor: "#4caf50",
          ease: "power2.inOut",
        })
        .to(box, {
          duration: 0.5,
          width: "300px",
          height: "100px",
          borderRadius: "20px",
          ease: "power2.inOut",
        })
        .to(box, {
          duration: 0.5,
          width: "200px",
          height: "200px",
          borderRadius: "10px",
          ease: "elastic.out(1, 0.3)",
        });
    },
  },
};
</script>

<style scoped>
.box {
  width: 200px;
  height: 200px;
  background-color: #4caf50;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  border-radius: 10px;
  text-align: center;
}

.animate-btn {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.animate-btn:hover {
  background-color: #1976d2;
}
</style>
