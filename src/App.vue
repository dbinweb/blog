<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
      <Nav></Nav>

      <router-view/>
  </div>
</template>

<script>
    import Nav from './components/Nav'
    export default {
        name: 'index',
        components:{
            Nav
        }
    }
</script>

<style>
    @import "./assets/css/reset.css";

    #app{
        width: 100%;
        height: 3000px;
        background: url("./assets/img/bg/b11.jpg") center top/cover fixed;
    }
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*}*/

/*#nav {*/
/*  padding: 30px;*/
/*}*/

/*#nav a {*/
/*  font-weight: bold;*/
/*  color: #2c3e50;*/
/*}*/

/*#nav a.router-link-exact-active {*/
/*  color: #42b983;*/
/*}*/
</style>
