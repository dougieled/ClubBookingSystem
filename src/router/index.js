import Vue from 'vue'
import Router from 'vue-router'
import AddAppointment from '@/components/AddAppointment'
import ViewUpcomingBookings from '@/components/ViewUpcomingBookings'
import Home from '@/components/Home'
import ViewSchedule from '@/components/ViewSchedule'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/AddAppointment',
      name: 'AddAppointment',
      component: AddAppointment
    },
    {
      path: '/ViewUpcomingBookings',
      name: 'ViewUpcomingBookings',
      component: ViewUpcomingBookings
    },
    {
      path: '/ViewSchedule',
      name: 'ViewSchedule',
      component: ViewSchedule
    },

  ]
})
