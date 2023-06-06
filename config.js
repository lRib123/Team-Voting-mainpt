import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDRiV3ZbV2TI-0Mf7FdPyKBoDOEfq_G6g4",
  authDomain: "ciclista-28b20.firebaseapp.com",
  projectId: "ciclista-28b20",
  storageBucket: "ciclista-28b20.appspot.com",
  messagingSenderId: "895895046894",
  appId: "1:895895046894:web:76fc89ebc4aef28af641ff"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
