<template>
  <div class="hello">
    <!--Add Appointment Section-->
    <div class="container-fluid">
    <div class="row justify-content-md-center">
    <div class="col-sm-12 col-lg-6">
    <h3 class="display-6">Add Holiday Dates</h3>
              <form id="form" v-on:submit.prevent="addAppointment">
              <div class="form-group">
                <label for="appointmentName">Name:</label>
                <input  type="text"  id="appointmentName"  class="form-control" v-model="newAppointment.title">
              </div>
              <div class="form-group">
                <label for="appointmentName">Destination:</label>
                <v-select  v-model="newAppointment.destination" :options="countries"></v-select>
              </div>
              <div class="form-group">
                <label for="appointmentDate">Date Leaving:</label>
                        <flat-pickr
                v-model="newAppointment.start"
                :config="flatpickrConfig"                                
                :required="true"                
                class="form-control" 
                placeholder="Select date"               
                name="date">
                     </flat-pickr>
              </div>
              <div class="form-group">
                <label for="appointmentDate">Date Returning:</label>
                        <flat-pickr
                v-model="newAppointment.end"
                :config="flatpickrConfig"                                
                :required="true"                
                class="form-control" 
                placeholder="Select date"               
                name="date">
                     </flat-pickr>
              </div>
              <input type="submit"  class="btn btn-primary" value="Add Appointment">
            </form>
            </div>
            </div>
</div>
  </div>
</template>

<script>
import Moment from 'moment';
import db from './../db.js';
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import toastr from 'toastr';
import lodash from 'lodash';
import { SweetModal, SweetModalTab } from 'sweet-modal-vue';
import { FullCalendar } from 'vue-full-calendar';
import Vue from 'vue';
import vSelect from 'vue-select';
import axios from 'axios';
import _ from 'lodash';
//Vue.component('v-select', vSelect)

let appointmentsRef = db.ref('appointments');

export default {
    components:{
    SweetModal, SweetModalTab, flatPickr, FullCalendar, vSelect
  },
  name: 'AddAppointment',
        firebase:{
    appointments: appointmentsRef,
    dateList: db.ref('appointments').orderByChild('start')
  },
  created(){
    this.getCountries();
  },
  data () {
    return {
      msg: 'Appointment Booking System',
      countries:[],
      //flags
      showSchedule: true,
      showUpcomingBookings: false,
      editable: "false",

      //New Appointment Data
      newAppointment: {
        id: '',
        title: '',
        destination:'',
        start: '',
        end: '',
        editable: false
        },

        //flatpickr config
      flatpickrConfig: {
          altFormat: 'l j M, Y',
          altInput: true,
          dateFormat: 'Y-m-d', 
          minDate: 'today', 
          "disable": [
           ],
             }, 
    }
  },

  methods: {
    addAppointment: function() {
      var randomID = Math.random().toString(36).substr(2, 9);
      this.newAppointment.id = randomID;



      appointmentsRef.push(this.newAppointment)
      this.newAppointment.id = '',
      this.newAppointment.title = '',
      this.newAppointment.destination = '',
      this.newAppointment.start = ''
      this.newAppointment.end = '',
      toastr.success('Appointment added successfully')
    },
    deleteAppointment: function(appointment){
      appointmentsRef.child(appointment['.key']).remove()
      toastr.success('Appointment removed successfully')
    },
    getCountries(){
      var self = this;
      axios.get(`https://restcountries.eu/rest/v2/all`)
      .then(res => {
        var tempArrayHolder = res.data
                    var i=0;
                    for(i=0;i<tempArrayHolder.length;i++){
                      self.countries.push(tempArrayHolder[i].name)
                    }
      })
    }
  },
  filters: {
  Moment: function (date) {
    return Moment(date).format('LLLL');
  }
},
computed:{
  orderDatesAsc: function(){
    return _.orderBy(appointments, ['start'], ['asc', 'desc']);
  }
}

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img {
  width:100%
}
</style>
