import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD09kJgPQsSOloOCnoaOyXFc_ZQn67zm1M",
    authDomain: "linkedin-clone-hz.firebaseapp.com",
    projectId: "linkedin-clone-hz",
    storageBucket: "linkedin-clone-hz.appspot.com",
    messagingSenderId: "969174920491",
    appId: "1:969174920491:web:d902d8125f2564a0e1a96e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export {db, auth};