import Vue from 'vue'
import Router from 'vue-router'
import AddHoliday from '@/components/AddHoliday'
import ViewUpcomingHolidays from '@/components/ViewUpcomingHolidays'
import Home from '@/components/Home'
import ViewSchedule from '@/components/ViewSchedule'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/AddHoliday',
      name: 'AddHoliday',
      component: AddHoliday
    },
    {
      path: '/ViewUpcomingHolidays',
      name: 'ViewUpcomingHolidays',
      component: ViewUpcomingHolidays
    },
    {
      path: '/ViewSchedule',
      name: 'ViewSchedule',
      component: ViewSchedule
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    },
  ]
})
