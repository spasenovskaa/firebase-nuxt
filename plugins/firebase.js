import firebase from 'firebase/app'
import 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyB8n_m5JSsek94bV3SC4WHHbBKf5rCXrIQ",
  authDomain: "test-youtbe-86a66.firebaseapp.com",
  projectId: "test-youtbe-86a66",
  storageBucket: "test-youtbe-86a66.appspot.com",
  messagingSenderId: "628264893536",
  appId: "1:628264893536:web:53734c911195bf346e1705",
  measurementId: "G-YJ8Q74RBP8"
};
// Initialize Firebase
let app = null;
if(!firebase.apps.length){
app = firebase.initializeApp(firebaseConfig);
}
//firebase.analytics();

export default firebase
