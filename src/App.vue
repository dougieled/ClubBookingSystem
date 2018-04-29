<template>
  <div id="app">
  <div class="container-fluid">
    <div class="row">
  <div class="col-md-2">
 <img class="img-responsive"  src="./assets/jmglogo.png">
  <button class="btn btn-block btn-success mb-3" >Add Appointment</button>
  <button class="btn btn-block btn-success mb-3" >View upcoming Bookings</button>
  <button class="btn btn-block btn-success mb-3" >View Schedule</button>
  </div>
  <div class="col-md-10 mb-5">
  <router-view/>
  </div>

</div>
</div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
