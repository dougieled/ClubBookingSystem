<template>
  <div class="hello">
    <!--Add Appointment Section-->
    <div class="container-fluid">
    <div class="row justify-content-md-center">
    <div class="col-sm-12 col-lg-6">
    <h3 class="display-6">Add Holiday Dates</h3>
              <form id="form" v-on:submit.prevent="AddHoliday">
              <div class="form-group">
                <label for="appointmentName">Name:</label>
                <input  type="text"  id="appointmentName"  class="form-control" v-model="newHoliday.title">
              </div>
             <!-- <div class="form-group">
                <label for="appointmentName">Destination:</label>
                <v-select v-model="newHoliday.destination" :options="countries"></v-select>
              </div>-->
              <div class="form-group">
                <label for="appointmentDate">Date From:</label>
                        <flat-pickr
                v-model="startDate"
                :config="flatpickrConfig"                                
                :required="true"                
                class="form-control" 
                placeholder="Select date"             
                name="date">
                     </flat-pickr>
              </div>
              <div class="form-group">
                <label for="appointmentDate">Date To:</label>
                        <flat-pickr
                v-model="endDate"
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

let playerHolidaysRef = db.ref('playerHoliday');

export default {
    components:{
    SweetModal, SweetModalTab, flatPickr, FullCalendar, vSelect
  },
  name: 'AddHoliday',
        firebase:{
    playerHoliday: playerHolidaysRef,
    dateList: db.ref('playerHoliday').orderByChild('start')
  },
  data () {
    return {
      msg: 'Holiday Booking System',
      countries:[],
      //flags
      showSchedule: true,
      showUpcomingBookings: false,
      editable: "false",
      startDate:'',
      endDate:'',
      //New Appointment Data
      newHoliday: {
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
          disableMobile:true,
          minDate: 'today', 
          "disable": [
           ],
             }, 
    }
  },

  methods: {
      AddHoliday(){
        if(this.newHoliday.title =='' || this.startDate =='' || this.endDate == ''){
          toastr.error('You must add a Name, and the Dates the Player is away !')

      }else{
        if(Moment(this.endDate).isSameOrAfter(this.startDate)){
        var a = Moment(this.startDate);
        var b = Moment(this.endDate);
        var randomID = Math.random().toString(36).substr(2, 9)


// If you want an inclusive end date (fully-closed interval)
for (var m = Moment(a); m.diff(b, 'days') <= 0; m.add(1, 'days')) {
  this.newHoliday.start = m.format('YYYY-MM-DD') + ' 00:00'
  this.newHoliday.end = m.format('YYYY-MM-DD') + ' 23:59'

  
      this.newHoliday.id = randomID

      playerHolidaysRef.push(this.newHoliday)
      this.newHoliday.start = ''
      this.newHoliday.end = ''
}
      this.newHoliday.id = ''
      this.newHoliday.title = ''
      this.newHoliday.destination = ''
      this.newHoliday.start = ''
      this.newHoliday.end = ''
      this.holidayEnding = ''
      this.startDate = ''
      this.endDate = ''
      toastr.success('Appointment added successfully')
        }else{
          toastr.error('The 2nd Date is in the past of the 1st Date. It must be in the same day or future.')
        }
      }
      },
    deleteAppointment: function(holiday){
      playerHolidaysRef.child(holiday['.key']).remove()
      toastr.success('Appointment removed successfully')
    },
  },
  filters: {
  Moment: function (date) {
    return Moment(date).format('LLLL');
  }
},
computed:{
  orderDatesAsc: function(){
    return _.orderBy(playerHoliday, ['start'], ['asc', 'desc']);
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
