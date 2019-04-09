/*VALIDACIONES: Estas se deben testear en auth.spec.js*/

/*1)Validaciones de la función createAccount();*/

/*a)Función que valida que el usuario no puede tener input vacios,
para los parametros definidos en el flujo de la aplicación*/
export const validateAccount = (firstNameNewUser,lastNameNewUser,emailNewUser,passwordNewUser) => {
  if(firstNameNewUser === ""|| lastNameNewUser ==="" || emailNewUser==="" || passwordNewUser==="" 
  || passwordNewUser.length<6 || !validateEmail(emailNewUser)){
    return false;
  }else{
    return true;
  }
}

/*b)Función que valida que el usuario debe ingresar un @ cuando ingresa un correo*/
export const validateEmail = (emailNewUser)=>{
  /*expresión regular que simula el patron de búsqueda del correo electrónico*/
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(emailNewUser);
}


/*2)Validaciones de la función signIn();*/

/*a)Función que valida que el usuario no puede tener input vacios,
para los parametros definidos en el flujo de la aplicación*/
export const validateSignIn = (emailSignIn,passwordSignIn) => {
  if(emailSignIn === ""|| passwordSignIn ==="" || passwordSignIn.length<6 || !validateEmail(emailSignIn)){
    return false;
  }else{
    return true;
  }
}

/*b)Función que valida que el usuario debe ingresar un @ cuando ingresa un correo*/
export const validateEmailSignIn = (emailSignIn)=>{
  /*expresión regular que simula el patron de búsqueda del correo electrónico*/
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(emailSignIn);
}

//Validación input vacio del post
export const validatePost = (userPost) =>{
  if(userPost === ""){
    return false;

  } else{
    return true;
  }
}