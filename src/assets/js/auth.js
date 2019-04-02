//Acá no hay manejo del DOM
//Inicialización de firebase

var config = {
  apiKey: "AIzaSyCVDZrZyWXI-xAVlz9mCDjLS48i1DKFTWU",
  authDomain: "pet-community-sn.firebaseapp.com",
  databaseURL: "https://pet-community-sn.firebaseio.com",
  projectId: "pet-community-sn",
  storageBucket: "pet-community-sn.appspot.com",
  messagingSenderId: "443792892793"
  };

firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

/*
1-Crear 2 funciones que simularan el login con google y la creación de cuenta 
*/

/*Simular que son asi, agregando export*/
export const loginGoogle = () =>{
  return 'Login con Google Ok';
}

/*Función para crear una nueva cuenta*/
export const createAccount = () =>{
  cleanErrors();
  let emailNewUser = document.getElementById('emailnewuser').value;
  let passwordNewUser = document.getElementById('passwordnewuser').value;
  let valid = true;
  
  if(!valid){
    return;
  }

  /*Función de Firebase para registrar nuevos usuarios*/
  firebase.auth().createUserWithEmailAndPassword(emailNewUser, passwordNewUser)
  .catch(function(error) {
    // Handle Errors here.
    if(error){
      if(error.code==="auth/invalid-email"){
        document.getElementById('emailerror').innerHTML=`*Debes ingresar un correo válido.`;
      }
      else if (error.code==="auth/weak-password"){
        document.getElementById('passworderror').innerHTML=`*La contraseña debe ser superior a 5 carácteres.`;
      }
      else if (error.code==="auth/email-already-in-use"){
        document.getElementById('emailerror').innerHTML=`*Este correo ya se encuentra registrado.`;
      }
      else{
        alert('No se ha podido crear el usuario');
      }
    }
    // Add a new document in collection "cities"
      db.collection("cities").doc("LA").set({
      name: "Los Angeles",
      state: "CA",
      country: "USA"
      })
      .then(function() {
      console.log("Document successfully written!");
      })
      .catch(function(error) {
      console.error("Error writing document: ", error);
      });

  });
}

function cleanErrors(){
  document.getElementById('emailerror').innerHTML='';
  document.getElementById('passworderror').innerHTML='';
}

//Este archivo no lleva nada mas, por lo que se debe testear