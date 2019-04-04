export const validateAccount = (firstNameNewUser,lastNameNewUser,emailNewUser,passwordNewUser) => {
  if(firstNameNewUser === ""|| lastNameNewUser ==="" || emailNewUser==="" || passwordNewUser===""){
    return false;
  }else{
    return true;
  }
}

export const validateEmail = (emailNewUser)=>{
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(emailNewUser);
}
