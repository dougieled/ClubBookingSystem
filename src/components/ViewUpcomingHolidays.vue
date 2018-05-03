  <template>
  <div class="row justify-content-md-center">
  <div class="col-md-10">
  <!--Upcoming Holidays-->
            <table class="table table-striped">
            <thead>
              <tr class="table-bordered">
                <th>Name</th>
                <!--<th>Destination</th>-->
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
                <!--<td>{{ holiday.destination }}</td>-->
                <td>{{ holiday.start | Moment }}</td>
                <td>{{ holiday.end | Moment }}</td>
                <td><button @click="openModalMethod(holiday)" class="btn btn-danger">Delete</button></td>
              </tr>
            </tbody>
          </table>
          <sweet-modal ref="deleteModal" icon="warning">
	Are you sure you want to delete this entry?
  <br>
  <button class="btn btn-lg btn-success" @click="deleteAppointment">Yes</button>
   <button class="btn btn-lg btn-danger ml-4" @click="closeModalMethod">No</button>
</sweet-modal>
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
components:{
    SweetModal, SweetModalTab},
  name: 'AddHoliday',
        firebase:{
    holidays: holidaysRef,
    dateList: db.ref('holidays').orderByChild('start')
  },
  data () {
    return {
      msg: 'Appointment Booking System',
      deleteModal:false,
      editable: "false",
      seletedRow: '',
    }
  },

  methods: {
    openModalMethod(holiday){
      this.seletedRow = ''
      this.$refs.deleteModal.open()
      this.seletedRow = holiday
    },
    closeModalMethod(){
      this.$refs.deleteModal.close()
      this.seletedRow = ''
    },
    deleteAppointment: function(){
      holidaysRef.child(this.seletedRow['.key']).remove()
      toastr.success('Holiday removed successfully')
      this.$refs.deleteModal.close()
      this.seletedRow = ''
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
