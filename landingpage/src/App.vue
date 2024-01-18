<script setup>
import {  RouterView } from 'vue-router'
import {onMounted, ref} from "vue";

const teamMembers = [
  {
    name: "Marcel Treptow",
    role: "Product Owner",
    github: "https://github.com/marceltreptow",
    linkedin: "https://www.linkedin.com/in/marceltreptow",
  },
  {
    name: "Johannes Möst",
    role: "Scrum Master",
    github: "https://github.com/mj0stjo",
    linkedin: "https://www.linkedin.com/in/johannesmoest",
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
      </div>
    </header>
  </div>
  <div class="content">
    <section>
      <h1>About the Project</h1>
      <p>
        Introducing the Royal Tracer - a path tracing software project that aims to redefine realism in the world of computer graphics. Our foundation is a modular architecture that supports ambient, diffuse, and specular lighting, reflections, and refractions. With a strong focus on path tracing, UV mapping, efficient GPU calculations, animation, and a spectral light model, we're dedicated to pushing the boundaries of what's possible in rendering technology. Our user-friendly editor allows you to effortlessly configure scenes, add and manage 3D objects, and instantly see changes in the preview. Join us on this journey as we bring your creative visions to life with unmatched realism and animation capabilities.
      </p>
    </section>

    <section>
      <button @click="redirectToEditor">Try it out!</button>
    </section>

    <section>
      <h1>About the Team</h1>
      <!-- Render team members -->
      <div class="team-members">
        <div v-for="member in teamMembers" :key="member.name" class="team-member">
           <h2>{{ member.name }}</h2>
          <p>{{ member.role }}</p>
          <div class="social-links">
            <!-- Add links to GitHub and LinkedIn profiles -->
            <a :href="member.github" target="_blank">GitHub</a>
            <a :href="member.linkedin" target="_blank">LinkedIn</a>
            <!-- Add more social links as needed -->
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
  text-align: center; /* Center-align the content */
}

section {
  padding: 20px;
  background-color: #333; /* Add a subtle background color */
  text-align: center; /* Center-align the content */
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

</style>
