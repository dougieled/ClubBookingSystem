//.db.js
import Firebase from 'firebase'

let config = {
  apiKey: "AIzaSyAfz4OqWIaOCs7RvunmmnNl8bxiZpjvNTE",
  authDomain: "clubholidaybooking.firebaseapp.com",
  databaseURL: "https://clubholidaybooking.firebaseio.com",
  projectId: "clubholidaybooking",
  storageBucket: "",
  messagingSenderId: "886804029042"
};

let firebaseApp = Firebase.initializeApp(config)
let db = firebaseApp.database()
export default db