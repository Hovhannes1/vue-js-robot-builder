<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Home'}" exact>
              <img class="logo" src=".\assets\build-a-bot-logo.png" />
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Build'}" exact>Build</router-link>
          </li>
           <li class="nav-item cart">
            <router-link class="nav-link" to="/cart" exact>Cart</router-link>
            <div class='cart-items'>{{cart.length}}</div>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <aside class="aside">
        <router-view name="sidebar">

        </router-view>
      </aside>
      <main>
        <!-- <HomePage/> -->
        <!-- <RobotBuild/> -->
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
// import HomePage from './home/HomePage.vue';
// import RobotBuild from './build/RobotBuild.vue';

export default {
  name: 'app',
  // components: {
  //   RobotBuild,
  // },
  computed: {
    cart() { return this.$store.state.robots.cart; },
  },
};
</script>

<style>
.nav-link {
  text-decoration: none;
  color: inherit;
}
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
main {
  background-color: white;
  padding: 24px;
  width: 964px;
  min-height: 300px;
}
header {
  background-color: #999;
  width: 1184px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
li {
  cursor: pointer;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
.router-link-active {
  color: #fff;
}
.container {
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;
}
.aside {
  padding: 24px;
  background-color: #aaa;
  width: 100px;
  min-height: 300px;
}
.nav-item.cart {
  position: relative;
  margin-left: auto;
}
.cart-items {
  position: absolute;
  top: -5px;
  right: -9px;
  font-size: 18px;
  width: 20px;
  text-align: center;
  display: inline-block;
  border-radius: 100px;
  background-color: mediumseagreen;
}
</style>
