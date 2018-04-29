<template>
  <div class="hello">
    <!--Add Appointment Section-->
    <div class="container-fluid">
    <div class="row justify-content-md-center">
    <div class="col-sm-12 col-lg-6">
        <h3 class="display-6">Login</h3>
   <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <button @click="login" class="btn btn-primary">Login</button>
  <p>If you don't have an account you can <router-link to="/SignUp">Sign Up Here</router-link></p>
</form>
            </div>
            </div>
</div>
  </div>
</template>

<script>
import Moment from 'moment';
import db from './../db.js';
import toastr from 'toastr';
import Vue from 'vue';
import _ from 'lodash';
import Firebase from 'firebase';


export default {
 name: 'Login',
  data () {
    return { 
    }
  },

  methods: {
      login(){
          var self = this
          Firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
              (user) =>{
                  toastr.success('Sign in Successful!')
                  self.$router.push('/AddHoliday')
              },
              (err) =>{
                  toastr.error('Oops'+err.message)
              }
          )

      }
  },
  filters: {
},
computed:{
}

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
