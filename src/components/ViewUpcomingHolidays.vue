  <template>
  <div class="row justify-content-md-center">
  <div class="col-md-10">
  <!--Upcoming Holidays-->
            <table class="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Destination</th>
                <th>Date Leaving</th>
                <th>Date Returning</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr 
                v-for="holiday in dateList"
                :key="holiday.id">
                <td>{{ holiday.title }}</td>
                <td>{{ holiday.destination }}</td>
                <td>{{ holiday.start | Moment }}</td>
                <td>{{ holiday.end | Moment }}</td>
                <td><button @click="deleteAppointment(holiday)" class="btn btn-danger" slot="button">Delete</button></td>
              </tr>
            </tbody>
          </table>
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



let holidaysRef = db.ref('holidays');

export default {

  name: 'AddHoliday',
        firebase:{
    holidays: holidaysRef,
    dateList: db.ref('holidays').orderByChild('start')
  },
  data () {
    return {
      msg: 'Appointment Booking System',

      editable: "false",
    }
  },

  methods: {
    deleteAppointment: function(holiday){
      holidaysRef.child(holiday['.key']).remove()
      toastr.success('Appointment removed successfully')
    },
  },
  filters: {
  Moment: function (date) {
    return Moment(date).format('MMMM Do YYYY');
  }
},
computed:{
  orderDatesAsc: function(){
    return _.orderBy(holidays, ['start'], ['asc', 'desc']);
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
