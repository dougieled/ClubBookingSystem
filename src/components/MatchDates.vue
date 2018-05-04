  <template>
  <div class="row justify-content-md-center">
  <div class="col-md-10">
  <h2 class="display-7">Glen vs Ballinascreen - 28th June</h2>
            <table class="table table-striped">
            <thead>
              <tr class="table-bordered">
              </tr>
            </thead>
            <tbody>
              <tr 
                v-for="holiday in dateList"
                :key="holiday.id">
                <td>{{ holiday.title }}</td>
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
components:{
    SweetModal, SweetModalTab},
  name: 'AddHoliday',
        firebase:{
    holidays: holidaysRef,
    dateList: db.ref('holidays').orderByChild('start'),
    
  },
  data () {
    return {
      msg: 'Appointment Booking System',
      editable: "false",
      exampleDate:'2018-06-20',
    }
  },

  methods: {
  },
  filters: {
  Moment: function (date) {
    return Moment(date).format('MMMM Do YYYY');
  }
},
computed:{
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
