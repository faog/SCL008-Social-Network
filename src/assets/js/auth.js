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
    return 'Cuenta creada Ok';
}

//Este archivo no lleva nada mas, por lo que se debe testear