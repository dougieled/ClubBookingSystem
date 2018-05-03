//.db.js
import Firebase from 'firebase'
 let config2= {
  apiKey: "AIzaSyBQvmH5TdqBLBtMPjH51DceCSwUboWYXLw",
  authDomain: "kegomatic-7b8c7.firebaseapp.com",
  databaseURL: "https://kegomatic-7b8c7.firebaseio.com",
  projectId: "kegomatic-7b8c7",
  storageBucket: "kegomatic-7b8c7.appspot.com",
  messagingSenderId: "808149700327"
 }
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