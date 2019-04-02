//Inicialización de firebase
  let config = {
    apiKey: "AIzaSyCVDZrZyWXI-xAVlz9mCDjLS48i1DKFTWU",
    authDomain: "pet-community-sn.firebaseapp.com",
    databaseURL: "https://pet-community-sn.firebaseio.com",
    projectId: "pet-community-sn",
    storageBucket: "pet-community-sn.appspot.com",
    messagingSenderId: "443792892793"
  };
  
  firebase.initializeApp(config);
  
// Initialize Cloud Firestore through Firebase
  let db = firebase.firestore();


export const loginGoogle = () =>{
  return 'Login con Google Ok';
}

/*Función para crear una nueva cuenta*/
export const createAccount = () =>{
  cleanErrors();
  let firstNameNewUser = document.getElementById('firstnamenewuser').value;
  let lastNameNewUser = document.getElementById('lastnamenewuser').value;
  let emailNewUser = document.getElementById('emailnewuser').value;
  let passwordNewUser = document.getElementById('passwordnewuser').value;
  let valid = true;
  
  if (firstNameNewUser===""){
    document.getElementById('firstnameerror').innerHTML=`*Debes ingresar un nombre.`;
  }

  if (lastNameNewUser===""){
    document.getElementById('lastnameerror').innerHTML=`*Debes ingresar un apellido.`;
  } 

  if(emailNewUser===""){
    document.getElementById('emailerror').innerHTML=`*Debes ingresar un correo válido.`;
  }

  if(passwordNewUser===""){
    document.getElementById('passworderror').innerHTML=`*Debes ingresar una contraseña con minimo 6 caracteres.`;
  }

  if(!valid){
    return;
  }

  if(firstNameNewUser === ""|| lastNameNewUser ==="" || emailNewUser==="" || passwordNewUser===""){
    console.log("usuario no creado");
  }else{
    db.collection("users").add({
      firstname:firstNameNewUser,
      lastname:lastNameNewUser,
      email:emailNewUser,
      password: passwordNewUser
    })
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
  }


  /*Función de Firebase para registrar nuevos usuarios*/
  firebase.auth().createUserWithEmailAndPassword(emailNewUser, passwordNewUser)
  .catch(function(error) {
    if(error){
      alert('No se ha podido crear el usuario');
    }
    
  }
)}


function cleanErrors(){
  document.getElementById('emailerror').innerHTML='';
  document.getElementById('passworderror').innerHTML='';
  document.getElementById('firstnamenewuser').innerHTML='';
  document.getElementById('lastnamenewuser').innerHTML='';
}

//Este archivo no lleva nada mas, por lo que se debe testear

//Función de ejemplo
export const suma =(a,b)=>{   
  return a+b;
}
