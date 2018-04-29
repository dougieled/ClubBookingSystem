  <template>
  <div class="col-md-10 mb-5">
  <!--Upcoming Appointments-->
            <table class="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr 
                v-for="appointment in dateList"
                :key="appointment.id">
                <td>{{ appointment.title }}</td>
                <td>{{ appointment.start | Moment }}</td>
                <td><button @click="deleteAppointment(appointment)" class="btn btn-danger" slot="button">Delete</button></td>
              </tr>
            </tbody>
          </table>
  
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



let appointmentsRef = db.ref('appointments');

export default {

  name: 'AddAppointment',
        firebase:{
    appointments: appointmentsRef,
    dateList: db.ref('appointments').orderByChild('start')
  },
  data () {
    return {
      msg: 'Appointment Booking System',

      editable: "false",
    }
  },

  methods: {
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
