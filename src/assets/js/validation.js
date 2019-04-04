export const validateAccount = (firstNameNewUser,lastNameNewUser,emailNewUser,passwordNewUser) => {
  if(firstNameNewUser === ""|| lastNameNewUser ==="" || emailNewUser==="" || passwordNewUser===""){
    return false;
  }else{
    return true;
  }
}


