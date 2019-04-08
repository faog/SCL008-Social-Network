import { validateAccount, validateSignIn} from './../js/validation.js';
import { initFirebase } from './../js/initFirebase.js';

//Variable que obtiene la inicialización de firestone 
let dbProfiles = initFirebase();

/*1.)Función para crear una nueva cuenta
De acuerdo al flujo diseñado para la aplicación, creo una función la que necesita los 
parámetros definidos*/
export const createAccount = (firstNameNewUser,lastNameNewUser,emailNewUser,passwordNewUser) =>{
  /*Si la validación realizada en el archivo validation.js fue true, ingresa al if*/
  if(validateAccount(firstNameNewUser,lastNameNewUser,emailNewUser,passwordNewUser)){
    /*Función de Firebase para registrar nuevos usuarios*/
    firebase.auth().createUserWithEmailAndPassword(emailNewUser, passwordNewUser) 
    .then(function(){
      /*Base de datos, para almacenar de manera paralela en cloud firestore 
      dichos datos del usuario*/
      dbProfiles.collection("users").add({
        firstname:firstNameNewUser,
        lastname:lastNameNewUser,
        email:emailNewUser
      })
      .then(function() {
        console.log("Document successfully written!");
        /*Llama a la función emailVerification()*/
        emailVerification();
        alert("El usuario ha sido creado con éxito. Hemos enviado un correo de verificación de cuenta.");
        /*Cambia la vista de usuario de templateCreate a templateSignIn, a partir del hash*/
        window.location.hash='';
      })
      .catch(function(error) {
        /*Si no ocurre el regitro, imprime un mensaje de error*/
        console.error("Error writing document: ", error);
        return "Error escribiendo perfil en firebase";
      });
    })
    .catch(function(error) {
      if(error){
        /*Si no sucede el registro, envia menseaje de error al usuario*/
        alert('No se ha podido crear el usuario');
        return 'No se ha podido crear el usuario';
      }    
    });
  }
  else{
    /*Error en la validación, enviando mensaje al usuario y marcando los campos con problemas*/
    return "Error en la validación del usuario";
  }
}

/*Función que envia un correo de validación de la cuenta 
una vez que el usuario se registra satisfactoriamente*/
function emailVerification() {
  let user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function() {
    console.log("enviando correo");
    // Update successful.
  }).catch(function(error) {
    console.log(error);
  })
}

/*2.)Función para realizar login usando un correo de Google*/

export const loginGoogle = () =>{
  /*Crea una instancia del objeto del proveedor de Google*/
  var provider = new firebase.auth.GoogleAuthProvider();
  /*Autentica con Firebase a través del objeto del proveedor de Google.*/
  firebase.auth().signInWithPopup(provider)
  .then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;

    alert("Has iniciado sesión con exito");
    window.location.hash='#/timeline';
    // ...
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

/*3.) Función para realizar login usando un la cuenta creada*/

export const signIn= (emailSignIn,passwordSignIn) => {
/*Si la validación realizada en el archivo validation.js fue true, ingresa al if*/
  if(validateSignIn(emailSignIn,passwordSignIn)){
    /*Función firebase para ingreso de usuarios registrados*/
    firebase.auth().signInWithEmailAndPassword(emailSignIn, passwordSignIn)
    .then(function() {
      alert("Has iniciado sesión con exito");
      window.location.hash='#/timeline';
    })   
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(error.message);
    });
  }else{
    alert ("Error en el ingreso del usuario");
  }
}

/*Función Observador, que verifica que el usuario se encuentra logueado*/
export const observer = () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('existe usuario activo')
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
    } else {
      console.log('no existe usuario activo')
    }
  });
}

/*Función signOut(), que sirve para que cuando el usuario cierre sesión, lo dirigia a la pantalla de inicio*/

export const signOut = () =>{
  firebase.auth().signOut()
  .then(function() {
    alert("Has cerrado tu sesión en Pet Community");
    window.location.hash='';
  }).catch(function(error) {
    // An error happened.
  });
}

