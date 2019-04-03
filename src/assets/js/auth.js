import { validateAccount,cleanErrors } from './../js/validation.js';
import { initFirebase } from './../js/initFirebase.js'

var dbProfiles = initFirebase();
export const loginGoogle = () =>{
  return 'Login con Google Ok';
}

/*Función para crear una nueva cuenta*/
export const createAccount = (firstNameNewUser,lastNameNewUser,emailNewUser,passwordNewUser) =>{
  cleanErrors();
  if(validateAccount(firstNameNewUser,lastNameNewUser,emailNewUser,passwordNewUser)){
    dbProfiles.collection("users").add({
      firstname:firstNameNewUser,
      lastname:lastNameNewUser,
      email:emailNewUser
    })
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
      return "Error escribiendo perfil en firebase";
    });
  }
  else{
    return "Error en la validación del usuario";
  }

  /*Función de Firebase para registrar nuevos usuarios*/
  firebase.auth().createUserWithEmailAndPassword(emailNewUser, passwordNewUser) 
  .then(function(){
    emailVerification();
  })
  .catch(function(error) {
    if(error){
      alert('No se ha podido crear el usuario');
      return 'No se ha podido crear el usuario';
    }    
  });

  alert("El usuario fue creado");
  return "OK";
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
function emailVerification () {
  let user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function() {
    console.log("enviando correo");
    // Update successful.
  }).catch(function(error) {
    console.log(error);
  })
}



