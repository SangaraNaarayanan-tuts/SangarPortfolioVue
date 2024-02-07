// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzkGyB3CcXzVqUi9GIkOkzs3rzr8XJd2g",
  authDomain: "sangaraportfoliovue.firebaseapp.com",
  projectId: "sangaraportfoliovue",
  storageBucket: "sangaraportfoliovue.appspot.com",
  messagingSenderId: "934319831890",
  appId: "1:934319831890:web:b71c0ea782dd5f31f3188b",
  measurementId: "G-9J9HHPT20R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  
import { getStorage } from "@firebase/storage";
const storage = getStorage(app);
export { storage }