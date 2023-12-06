<script setup>
import {  RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="leftHeading">
      <h3>ROYAL</h3>
    </div>
    <img alt="Vue logo" class="logo" src="@/assets/RoyalTracerLogoKrone.png" width="200" height="200" />
    <div class="rightHeading">
      <h3>TRACER</h3>
    </div>

  </header>

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
}

.leftHeading, .rightHeading {
  flex: 1; /* New addition */
  text-align: center; /* Adjusted */
}

h3 {
  color: #2c3e50;
  font-size: 40px;
  font-weight: bold;
}

/*media query when >= 1024px*/
@media screen and (min-width: 1024px) {
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
  }

  .leftHeading, .rightHeading {
    flex: 1; /* New addition */
    text-align: center; /* Adjusted */
  }

  h3 {
    color: #2c3e50;
    font-size: 60px;
    font-weight: bold;
  }


}

</style>
