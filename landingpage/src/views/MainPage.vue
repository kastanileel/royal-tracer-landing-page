<script setup>
import {  RouterView } from 'vue-router'
import router from "@/router";
import {onMounted, ref} from "vue";

const teamMembers = [
  {
    name: "Marcel Treptow",
    role: "Product Owner",
    github: "https://github.com/marceltreptow",
  },
  {
    name: "Johannes Möst",
    role: "Scrum Master",
    github: "https://github.com/mj0stjo",
  },
  {
    name: "Daniel Stempfle",
    role: "Domain Expert",
    github: "https://github.com/kastanileel"
  },
  {
    name: "Niklas Paul",
    role: "Chief Architect",
    github: "https://github.com/KneeClass03",
  },
  {
    name: "Florian Mayer",
    role: "DevOps Engineer",
    github: "https://github.com/superflo22",
  },
  {
    name: "Timo Pfaff",
    role: "Developer",
    github: "https://github.com/t1mo1s",
  },
  {
    name: "Malte Schmitz",
    role: "Developer",
    github: "https://github.com/ML200",
  }
  // Add more team members as needed
];

const imagePaths = [
  '/src/assets/showcase/example1.png',
  '/src/assets/showcase/malteAlternative.png',
  '/src/assets/showcase/background2.png',
  // Add more image paths as needed
];

let currImageIndex = ref(0);

onMounted(() => {
  setInterval(() => {
    currImageIndex.value = (currImageIndex.value + 1) % imagePaths.length;
  }, 5000);
});

const redirectToEditor = () => {
  window.location.href = 'https://editor.royaltracer.com';
};

</script>

<template>
  <div>
    <header style="min-height: 100vh">
      <img alt="Vue logo" class="logo" :src="imagePaths[currImageIndex]" />
      
      <div class="content-overlay">
        <div class="blurredField">
          <h1 class="typewriter">ROYAL TRACER</h1>
        </div>
        <button @click="redirectToEditor" class="tryBtn">Try here!</button>
      </div>
    </header>
  </div>
  <div class="content">
    <section class="about">
      <div class="aboutText">
        <h1>About the Project</h1>
        <p>
          Royal Tracer "Alexandria" is an advanced tool designed to integrate seamlessly into various workflows, offering both innovation and practicality. Our product stands out for its use of C++ for high efficiency and optimized performance, ensuring it can handle intensive tasks with ease.
          <br>
          <br>
          At its core, Royal Tracer utilizes ray tracing, a technique demanding significant computational resources. We've engineered our tool to be compatible with both GPU and CPU rendering, thanks to OpenCL. This approach makes Royal Tracer accessible to a wide range of users, regardless of their hardware setup.
          <br>
          <br>
          The architecture of Royal Tracer is notably modular, allowing for interchangeability of key components like the editor, ray tracer, and storage management. This design not only facilitates easy maintenance and upgrades but also lets users customize the tool with their own modules or features.
          <br>
          <br>
          Transitioning to a web-based editor has significantly enhanced the accessibility and convenience of Royal Tracer. Users can now access our editor from any location, bypassing the need for complex installations, while maintaining a seamless integration of features.
          <br>
          <br>
          A standout feature of Royal Tracer is the implementation of path tracing within our ray tracing system. This technique greatly improves the realism of rendered images, accurately simulating complex lighting and shading scenarios.
          <br>
          <br>
          In summary, Royal Tracer offers a blend of high performance, broad accessibility, modular flexibility, and enhanced realism in rendering. It's a robust, user-friendly tool, designed to adapt and evolve with the needs of its users.
        </p>
      </div>
      <div class="aboutImage">
        <img src="/src/assets/audi.png" alt="Audi Render" id="audi">
      </div>
    </section>
  </div>
  <div class="content">
    <section class="team">
      <div class="thu">
        <img src="/src/assets/THU.svg" alt="THU Logo">
      </div>

      <div>
        <h1>About the Team</h1>
        <!-- Render team members -->
        <div class="team-members">
          <div v-for="member in teamMembers" :key="member.name" class="team-member">
             <h2>{{ member.name }}</h2>
            <p>{{ member.role }}</p>
            <div class="social-links">
              <!-- Add links to GitHub and LinkedIn profiles -->
              <a :href="member.github" target="_blank">GitHub</a>
              <!-- Add more social links as needed -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

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

.content {
  padding: 16px;
  background-color: #ffffff; /* Add a subtle background color */
}

.about{
  display: flex;
  justify-content: space-evenly;
  text-align: left;
}

.aboutText{
  max-width: 50%;
}

.aboutImage{
  display: grid;
  align-items: center;
  margin-left: 20px;
}

#audi{
  width: 100%;  /* or any other percentage */
  height: auto; /* to maintain the aspect ratio */
}

.team{
  text-align: center;
  display: flex;
  justify-content: space-between;
}

.thu{
  width: 30%;
  display: flex;
  justify-content: space-around;
}

section {
  padding: 20px;
  background-color: #333; /* Add a subtle background color */
}

h1 {
  color: #ffffff; /* Adjust the font color for better readability */
  font-size: 60px;
  font-weight: bold;
  font-family: "Consolas", monospace;
  margin-bottom: 10px;
}


p {
  color: #ffffff; /* Adjust the font color for better readability */
  font-size: 18px;
  font-family: "Consolas";
  margin-bottom: 20px;
}

button {
  background-color: #92bdea; /* Lighter color on hover for interactivity */
    color: #333; /* Dark text on hover for contrast */
    border: none; /* No border for a modern look */
    padding: 10px 20px; /* Adequate padding for comfortable clicking */
    font-family: "Consolas", monospace; /* Consistent font family */
    font-size: 22px; /* Visible and legible font size */
    cursor: pointer; /* Cursor indication for clickability */
    transition: background-color 0.3s, color 0.3s; /* Smooth transition for hover effects */
    border-radius: 5px; /* Slightly rounded corners for a softer look */
    margin-top: 20px; /* Space above the button */
  }

  button:hover {
    background-color: #c1c1c1; /* Dark background for consistency */
    color: white; /* Light text for contrast */
  }

  .tryBtn{
    height: 50px;
    width: 200px;
    font-weight: bold;
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
  border-right: .15em solid #92bdea; /* The typewriter cursor */
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
    border-color: #92bdea;
  }
}

h2 {
  color: white;
  font-family: "Consolas", monospace;
}

.team-members {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.team-member {
  margin: 20px;
  text-align: center;
}

.team-member-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
}

.social-links {
  margin-top: 10px;

}

.social-links a {
  margin-right: 10px;
  text-decoration: none;
  color: #898989;
  font-family: "Consolas", monospace;
}

.social-links a:hover {
  color: #92bdea;
}

/* Global Styles */
body {
  font-family: "Consolas", monospace; /* Consistent font family */
}

/* Responsive Layout */
@media (max-width: 768px) {
  .about, .team {
    flex-direction: column;
    align-items: center;
  }

  .aboutText, .aboutImage, .thu {
    max-width: 90%;
    margin: 10px auto;
  }

  .team-member {
    width: 50%; /* Adjust the width on smaller screens */
  }

  h1 {
    font-size: 40px;
  }

  p {
    font-size: 16px;
  }

  .tryBtn {
    width: 150px;
    font-size: 18px;
  }
}

/* Improved Button Styles for Mobile */
button {
  padding: 12px 24px; /* Larger padding for easier interaction on mobile */
  font-size: 18px; /* Larger font size for readability */
}


/* Team Member Layout for Mobile */
.team-member {
  margin: 10px;
}

/* Social Links Adjustments */
.social-links a {
  font-size: 16px; /* Larger font size for easier interaction */
}

</style>
