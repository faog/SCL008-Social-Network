import { validateAccount} from './../js/validation.js';
import { initFirebase } from './../js/initFirebase.js'
import { templateLogin } from '../views/templateLogin.js';
import { templateSignIn } from '../views/templateSignIn.js';
//Variable que obtiene la inicialización de firestone 
let dbProfiles = initFirebase();

/*1.)Función para realizar login usando un correo de Google*/
export const loginGoogle = () =>{
  return 'Login con Google Ok';
}

/*2.)Función para crear una nueva cuenta
De acuerdo al flujo diseñado para la aplicación, creo una función la que necesita los 
parámetros definidos*/
export const createAccount = (firstNameNewUser,lastNameNewUser,emailNewUser,passwordNewUser) =>{
  /*Si la validación realizada en el arrchivo validation.js fue true, ingresa al if*/
  if(validateAccount(firstNameNewUser,lastNameNewUser,emailNewUser,passwordNewUser)){
    /*Llama a la función cleanErrors()*/
    cleanErrors();
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
/*
observer=()=>{
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('existe usuario activo')
      let name= users.firstname;
      console.log(name);
      let last= users.lastname;
      console.log(last);
    } else {
      console.log('no existe usuario activo')
    }
  });
}

observer();
*/

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

/*función que permite borrar la ayuda cuando el usuario soluciona un error en campos solicitados*/
function cleanErrors(){
  document.getElementById('emailerror').innerHTML='';
  document.getElementById('passworderror').innerHTML='';
  document.getElementById('firstnamenewuser').innerHTML='';
  document.getElementById('lastnamenewuser').innerHTML='';
}

