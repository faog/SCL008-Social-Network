//Acá no hay manejo del DOM
//Inicialización de firebase

var config = {
  apiKey: "AIzaSyCVDZrZyWXI-xAVlz9mCDjLS48i1DKFTWU",
  authDomain: "pet-community-sn.firebaseapp.com",
  databaseURL: "https://pet-community-sn.firebaseio.com",
  projectId: "pet-community-sn",
  storageBucket: "pet-community-sn.appspot.com",
  messagingSenderId: "443792892793"
  };

firebase.initializeApp(config);

/*
1-Crear 2 funciones que simularan el login con google y la creación de cuenta 
*/

/*Simular que son asi, agregando export*/
export const loginGoogle = () =>{
  return 'Login con Google Ok';
}

export const createAccount = () =>{
  let emailNewUser = document.getElementById('emailnewuser').value;
  let passwordNewUser = document.getElementById('passwordnewuser').value;
    
    /*2.) Código de Firebase para registrar nuevos usuarios*/
    /*firebase.autentificación a partir del email y el password, luego hace una promesa (catch) por si no funciona*/
    firebase.auth().createUserWithEmailAndPassword(emailNewUser, passwordNewUser)
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = alert(error.code);
        var errorMessage = alert(error.message);        
       
    });
    

  return 'Cuenta creada OK';
}

//Este archivo no lleva nada mas, por lo que se debe testear