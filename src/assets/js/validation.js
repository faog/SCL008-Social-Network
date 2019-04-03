export const validateAccount = (firstNameNewUser,lastNameNewUser,emailNewUser,passwordNewUser) => {
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
