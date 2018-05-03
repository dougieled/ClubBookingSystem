  <template>
  <div class="row justify-content-md-center">
  <div class="col-md-10 mb-5">
  <!--Calendar Section-->
  <full-calendar ref="calendar" :config="calendarOptions" :events="holidays" :editable="editable"></full-calendar>
  </div>
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

let holidaysRef = db.ref('holidays');

export default {
    components:{
    FullCalendar
  },
  name: 'ViewSchedule',
        firebase:{
    holidays: holidaysRef,
    dateList: db.ref('holidays').orderByChild('start')
  },
  data () {
    return {
      msg: 'Holiday Booking System',

      editable: "false",


       //Calendar Config
    calendarOptions: {
      defaultView:'month',
      handleWindowResize:true,
      allDaySlot:false,
      disableDragging: false,
      draggable:false,
      themeSystem: 'bootstrap4',
      nowIndicator: false,
      eventBackgroundColor:'#56CC9D',
      eventTextColor:'black',
      header:{
        center:'title',
        left:'prev,next',
        right:'',
      },
      
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
