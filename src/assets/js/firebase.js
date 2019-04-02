//Acá no hay manejo del DOM
//Inicialización de firebase
/*global firebase*/
export const firebase = () =>{
let config = {
    apiKey: "AIzaSyCVDZrZyWXI-xAVlz9mCDjLS48i1DKFTWU",
    authDomain: "pet-community-sn.firebaseapp.com",
    databaseURL: "https://pet-community-sn.firebaseio.com",
    projectId: "pet-community-sn",
    storageBucket: "pet-community-sn.appspot.com",
    messagingSenderId: "443792892793"
  };
  
  firebase.initializeApp(config);
  
  // Initialize Cloud Firestore through Firebase
  let db = firebase.firestore();
}