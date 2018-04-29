<template>
  <div class="hello">
    <!--Add Appointment Section-->
    <div class="container-fluid">
    <div class="row">
  <div class="col-md-2">
 <!-- <img class="img-responsive"  src="../assets/jmglogo.png">-->
  <button class="btn btn-block btn-success mb-3" @click="openModal">Add Appointment</button>
  </div>
</div>
</div>
      
      <sweet-modal ref="testModal">
      <h3>Add Appointment</h3>
              <form id="form" v-on:submit.prevent="addAppointment">
              <div class="form-group">
                <label for="appointmentName">Name:</label>
                <input  type="text"  id="appointmentName"  class="form-control" v-model="newAppointment.title">
              </div>
              <div class="form-group">
                <label for="appointmentDate">Date:</label>
                        <flat-pickr
                v-model="newAppointment.start"
                :config="flatpickrConfig"                                
                :required="true"                
                class="form-control" 
                placeholder="Select date"               
                name="date">
                     </flat-pickr>
              </div>
              <input type="submit"  class="btn btn-primary" value="Add Appointment">
            </form>
      </sweet-modal>
  </div>
</template>

<script>
import Moment from 'moment'
import db from './../db.js'
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import toastr from 'toastr'
import lodash from 'lodash'
import { SweetModal, SweetModalTab } from 'sweet-modal-vue'
import { FullCalendar } from 'vue-full-calendar'

let appointmentsRef = db.ref('appointments');

export default {
    components:{
    SweetModal, SweetModalTab, flatPickr, FullCalendar
  },
  name: 'AddAppointment',
        firebase:{
    appointments: appointmentsRef,
    dateList: db.ref('appointments').orderByChild('start')
  },
  data () {
    return {
      msg: 'Appointment Booking System',

      //flags
      showSchedule: true,
      showUpcomingBookings: false,
      editable: "false",

      //New Appointment Data
      newAppointment: {
        id: '',
        title: '',
        start: '',
        end: '',
        editable: false
        },

        //flatpickr config
      flatpickrConfig: {
          altFormat: 'l j M, Y - H:i',
          altInput: true,
          dateFormat: 'Y-m-d'+"T"+'H:i:S', 
          minDate: 'today', 
          enableTime: true,
          minuteIncrement: 15,
          time_24hr: true,
          "disable": [
        function(date) {
            // return true to disable
            return (date.getDay() === 0 || date.getDay() === 1);
        }
           ],
             }, 
    }
  },

  methods: {
    addAppointment: function() {
      var randomID = Math.random().toString(36).substr(2, 9);
      var addOneHour = Moment(this.newAppointment.start).add(1,'h').format('YYYY/MM/DD HH:mm:mm');
      var startTimeMoment = Moment(this.newAppointment.start).format('YYYY/MM/DD HH:mm:mm');
      this.newAppointment.id = randomID;
      this.newAppointment.start = startTimeMoment;
      this.newAppointment.end = addOneHour;


      appointmentsRef.push(this.newAppointment)
      this.newAppointment.id = '',
      this.newAppointment.title = '',
      this.newAppointment.start = ''
      this.newAppointment.end = '',
      this.$refs.testModal.close()
      toastr.success('Appointment added successfully')
    },
    openModal: function(){
      this.$refs.testModal.open()
    },
    deleteAppointment: function(appointment){
      appointmentsRef.child(appointment['.key']).remove()
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
