  <template>
  <div class="row">
  <div class="col-md-4">
    <match-component :dateList='elevenMay'>
      <template slot="header">
        Ballinascreen(H) - Friday 11th May
        </template>
      </match-component>
  </div>
  <div class="col-md-4">
    <match-component :dateList='twentymay'>
      <template slot="header">
        Claudy(H) - Sunday 20th May
        </template>
      </match-component>
  </div>
  <div class="col-md-4">
    <match-component :dateList='twentysixmay'>
      <template slot="header">
        Glenullin(H) - Saturday 26th May
        </template>
      </match-component>
  </div>
  <div class="col-md-4">
    <match-component :dateList='thirdjune'>
      <template slot="header">
        Magherafelt(A) - Sunday 3rd June
        </template>
      </match-component>
  </div>
  <div class="col-md-4">
    <match-component :dateList='eightjune'>
      <template slot="header">
        Newbridge(H) - 8th June
        </template>
      </match-component>
  </div>
    <div class="col-md-4">
    <match-component :dateList='sixteenjune'>
      <template slot="header">
        Slaughtneil(A) - 16th June
        </template>
      </match-component>
  </div>
    <div class="col-md-4">
    <match-component :dateList='twotwojune'>
      <template slot="header">
        Kilrea(H) - 22nd June
        </template>
      </match-component>
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
import matchComponent from './matchComponent.vue'


let playerHolidaysRef = db.ref('playerHoliday');

export default {
components:{
    SweetModal, SweetModalTab, matchComponent},
  name: 'AddHoliday',
        firebase:{
    playerHoliday: playerHolidaysRef,
    elevenMay: db.ref('playerHoliday').orderByChild('start').startAt("2018-05-11 00:00").endAt("2018-05-11 23:59"),
    twentymay: db.ref('playerHoliday').orderByChild('start').startAt("2018-05-20 00:00").endAt("2018-05-20 23:59"),
    twentysixmay: db.ref('playerHoliday').orderByChild('start').startAt("2018-05-26 00:00").endAt("2018-05-26 23:59"),
    thirdjune: db.ref('playerHoliday').orderByChild('start').startAt("2018-06-03 00:00").endAt("2018-06-03 23:59"),
    eightjune: db.ref('playerHoliday').orderByChild('start').startAt("2018-06-08 00:00").endAt("2018-06-08 23:59"),
    sixteenjune: db.ref('playerHoliday').orderByChild('start').startAt("2018-06-16 00:00").endAt("2018-06-16 23:59"),
    twotwojune: db.ref('playerHoliday').orderByChild('start').startAt("2018-06-22 00:00").endAt("2018-06-22 23:59"),
    
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
