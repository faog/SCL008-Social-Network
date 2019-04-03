export const validateAccount = (firstNameNewUser,lastNameNewUser,emailNewUser,passwordNewUser) => {
  
  if (document.getElementById('firstnameerror') && firstNameNewUser===""){
    document.getElementById('firstnameerror').innerHTML=`*Debes ingresar un nombre.`;
  }

  if (document.getElementById('lastnameerror') && lastNameNewUser===""){
    document.getElementById('lastnameerror').innerHTML=`*Debes ingresar un apellido.`;
  } 

  if(document.getElementById('emailerror') && emailNewUser===""){
    document.getElementById('emailerror').innerHTML=`*Debes ingresar un correo válido.`;
  }

  if(document.getElementById('passworderror') && passwordNewUser===""){
    document.getElementById('passworderror').innerHTML=`*Debes ingresar una contraseña con minimo 6 caracteres.`;
  }

  if(firstNameNewUser === ""|| lastNameNewUser ==="" || emailNewUser==="" || passwordNewUser===""){
    return false;
  }else{
      return true;
  }
}

export const cleanErrors = () => {
    document.getElementById('emailerror').innerHTML='';
    document.getElementById('passworderror').innerHTML='';
    document.getElementById('firstnamenewuser').innerHTML='';
    document.getElementById('lastnamenewuser').innerHTML='';
}