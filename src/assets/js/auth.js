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
  .catch(function(error) {
    if(error){
      alert('No se ha podido crear el usuario');
      return 'No se ha podido crear el usuario';
    }    
  } 
);
alert("El usuario fue creado");
return "OK";
}



//Este archivo no lleva nada mas, por lo que se debe testear

//Función de ejemplo
export const suma =(a,b)=>{   
  return a+b;
}