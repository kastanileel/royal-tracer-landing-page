<script setup>
import {  RouterView } from 'vue-router'
import {onMounted, ref} from "vue";

const imagePaths = [
  'src/assets/showcase/example1.png',
  'src/assets/showcase/malteAlternative.png',
  'src/assets/showcase/background2.png',
  // Add more image paths as needed
];

let currImageIndex = ref(0);

onMounted(() => {
  setInterval(() => {
    currImageIndex.value = (currImageIndex.value + 1) % imagePaths.length;
  }, 5000);
});

</script>

<template>
  <header>

    <img alt="Vue logo" class="logo" :src="imagePaths[currImageIndex]" />


    <div class="content-overlay">
      <div class="blurredField">
        <h1 class="typewriter">ROYAL TRAYCER</h1>
      </div>
    </div>

  </header>
  <section>
    <h1> The Project</h1>
  </section>
  <section>
    <h1> The Team</h1>
  </section>


</template>
<style scoped>
header {
  width: 100%;
  line-height: 1.5;
  background-color: white;
  display: flex;
  flex-direction: row;
  box-sizing: border-box; /* New addition */
}

.logo {
  margin: 0 auto; /* Adjusted */
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}



h1 {
  color: #ffffff;
  font-size: 60px;
  font-weight: bold;
  font-family: "Consolas", monospace;
}

.content-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-55%, -50%);
  text-align: center;
  z-index: 1; /* Ensure this content is displayed above the background image */
  font-family: "Fira Code Medium", monospace;
}


.blurredField {
  backdrop-filter: blur(10px);
  height: 110%;
  width: 110%;
}


.typewriter {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typewriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: typing 2s steps(40, end),
  blink-caret 1s steps(1) infinite; /* Continuous blinking */

}

/* The typing effect */
@keyframes typing {
  from {
    width: 0
  }
  to {
    width: 100%
  }
}

/* The blinking cursor effect */
@keyframes blink-caret {
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}

</style>
