<template>
  <div class="home">
      <div>
        <img class="robot" src="../assets/robot-home.png">
      </div>
      <div>
        <router-link to="/build">Get started </router-link> building forst robot
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  width: 100%;
  text-align: center;
}
.robot {
  height: 300px;
}
</style>
