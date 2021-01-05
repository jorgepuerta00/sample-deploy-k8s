import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyApaIbCPZIEyJVjlNwzUZZDUpHI_KwOOjE",
  authDomain: "sample-microservice-oiga.firebaseapp.com",
  projectId: "sample-microservice-oiga",
  storageBucket: "sample-microservice-oiga.appspot.com",
  messagingSenderId: "913926175112",
  appId: "1:913926175112:web:56d9a596586e0d0528a23d"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()

export { auth, firebase as default }