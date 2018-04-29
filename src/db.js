//.db.js
import Firebase from 'firebase'

let config = {
    apiKey: "AIzaSyAMrQanpMxbTxrqK96ZSfAevoztr8aLHLo",
  authDomain: "justinmcgrathbarbers-57963.firebaseapp.com",
  databaseURL: "https://justinmcgrathbarbers-57963.firebaseio.com",
  projectId: "justinmcgrathbarbers-57963",
  storageBucket: "justinmcgrathbarbers-57963.appspot.com",
  messagingSenderId: "124987674517"
};

let firebaseApp = Firebase.initializeApp(config)
let db = firebaseApp.database()
export default db