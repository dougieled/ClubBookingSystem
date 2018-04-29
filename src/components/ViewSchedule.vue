  <template>
  <div class="col-md-10 mb-5">
  <!--Calendar Section-->
  <full-calendar ref="calendar" :config="calendarOptions" :events="appointments" :editable="editable"></full-calendar>
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
    FullCalendar
  },
  name: 'ViewSchedule',
        firebase:{
    appointments: appointmentsRef,
    dateList: db.ref('appointments').orderByChild('start')
  },
  data () {
    return {
      msg: 'Appointment Booking System',

      editable: "false",


       //Calendar Config
    calendarOptions: {
      hiddenDays: [ 0, 1 ],
      aspectRatio: 2.5,
      allDaySlot:false,
      minTime:'08:00',
      maxTime:'22:00',
      disableDragging: false,
      draggable:false,
      themeSystem: 'bootstrap3',
    }, 
    }
  },

  methods: {
  },

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
