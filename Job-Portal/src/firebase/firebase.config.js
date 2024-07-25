// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeEPJAv8FnF-6TWxP_s-e1G5mZCSV7cLc",
  authDomain: "job-portal-b1289.firebaseapp.com",
  projectId: "job-portal-b1289",
  storageBucket: "job-portal-b1289.appspot.com",
  messagingSenderId: "816240177457",
  appId: "1:816240177457:web:b8443cc5c83d0471650010"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth};
export default app;