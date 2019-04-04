import { validateAccount} from './../js/validation.js';
import { initFirebase } from './../js/initFirebase.js'
import { templateLogin } from '../views/templateLogin.js';
import { templateSignIn } from '../views/templateSignIn.js';

var dbProfiles = initFirebase();
export const loginGoogle = () =>{
  return 'Login con Google Ok';
}

/*Función para crear una nueva cuenta*/
export const createAccount = (firstNameNewUser,lastNameNewUser,emailNewUser,passwordNewUser) =>{
  if(validateAccount(firstNameNewUser,lastNameNewUser,emailNewUser,passwordNewUser)){
    cleanErrors();
    /*Función de Firebase para registrar nuevos usuarios*/
    firebase.auth().createUserWithEmailAndPassword(emailNewUser, passwordNewUser) 
    .then(function(){
      dbProfiles.collection("users").add({
        firstname:firstNameNewUser,
        lastname:lastNameNewUser,
        email:emailNewUser
      })
      .then(function() {
        console.log("Document successfully written!");
        emailVerification();
        alert("El usuario ha sido creado con éxito. Hemos enviado un correo de verificación de cuenta.");
        window.location.hash='';
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
        return "Error escribiendo perfil en firebase";
      });
    })
    .catch(function(error) {
      if(error){
        alert('No se ha podido crear el usuario');
        return 'No se ha podido crear el usuario';
      }    
    });
  }
  else{
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
function emailVerification() {
  let user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function() {
    console.log("enviando correo");
    // Update successful.
  }).catch(function(error) {
    console.log(error);
  })
}

function cleanErrors(){
  document.getElementById('emailerror').innerHTML='';
  document.getElementById('passworderror').innerHTML='';
  document.getElementById('firstnamenewuser').innerHTML='';
  document.getElementById('lastnamenewuser').innerHTML='';
}


