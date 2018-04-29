<template>
  <div id="app">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    </ul>
    <div class="form-inline my-2 my-lg-0">
      <button class="btn btn-outline-success my-2 my-sm-0">Login</button>
    </div>
  </div>
</nav>
    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="jumbotron p-0">
      <div class="container">
        <h1 class="display-3">Glen Seniors Holiday Tracking System!</h1>
        <p>Use the Add Holiday button below to give management notice of the days you are away on holiday.</p>
        <button class="btn btn-block btn-success mb-3 btn-lg" >Add Holiday &raquo;</button>
        <div class="row">
        <div class="col-md-4">
         <router-link to="/AddHoliday" class="btn btn-block btn-success mb-3">Add Holiday</router-link>
  
        </div>
        <div class="col-md-4">
          <router-link to="/ViewUpcomingHolidays" class="btn btn-block btn-success mb-3">View upcoming Holiday</router-link>
       </div>
        <div class="col-md-4">
          <router-link to="/ViewSchedule" class="btn btn-block btn-success mb-3">View Schedule</router-link>
        </div>
      </div>
      </div>
    </div>

    <div class="container-fluid">
      <!-- Example row of columns -->
      

      <hr>
      <div class="container-fluid">
      <router-view/>
      </div>
      <hr>

      <footer>
        <p>Glen Seniors Holidays</p>
      </footer>
    </div> <!-- /container -->
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
    }
  },
}
</script>

<style>
  @import '../node_modules/fullcalendar/dist/fullcalendar.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
