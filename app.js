// 🔹 1. Configuration Firebase (remplace par ton propre firebaseConfig)
const firebaseConfig = {
  apiKey: "AIzaSyDG4nSTlJjYZiQrqcryhy-cEIkxUBkgi-c",
  authDomain: "suivi-besoins-prod.firebaseapp.com",
  projectId: "suivi-besoins-prod",
  storageBucket: "suivi-besoins-prod.firebasestorage.app",
  messagingSenderId: "214097049405",
  appId: "1:214097049405:web:d91b0e4f31077907ea7754"
};
// 🔹 2. Initialisation Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
