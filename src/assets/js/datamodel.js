import {validatePost} from'./validation.js';
import {renderPost, attachEvents} from "../views/templateTimeLine.js";

/*1.)Función para crear un nuevo post
Necesito traspasar desde el template el texto de la publicación*/
export const postCreate = (userPost) =>{
    let dbPost = firebase.firestore();
    if(validatePost(userPost)){
        let date=Date.now();
        let nameProfile = validateName(); 

        dbPost.collection("post").add({
            user: firebase.auth().currentUser.email,
            name: nameProfile,
            message: userPost,
            date:date         
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            document.getElementById("textpost").value=''; 
            window.location.hash="#/timeline";
            postRead();  
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }else{
        return "error en la validación del input vacío";
    }
    
}


/*2.)Función para mostrar los post en el muro de la aplicación*/
export const postRead = () =>{
    let dbPost = firebase.firestore();
    dbPost.collection("post").orderBy("date","desc").get()
    .then((querySnapshot) => {
        if(document.getElementById('timeline')){
            document.getElementById('timeline').innerHTML = '';
        }
        querySnapshot.forEach((doc) => {
            renderPost(doc);
        });
        querySnapshot.forEach((doc) => {
            attachEvents(doc);
        });
    });
}

//*Funcion getName, para obtener desde la BD el nombre del usuario
export const getName = (email) =>{
    //consulta para obtener los datos del usuario, cuyo correo que se envia es igual al correo de la BD
    let dbProfiles = firebase.firestore();
    let userProfile = dbProfiles.collection("users").where("email","==",email);
    userProfile.get().then((querySnapshot) => {
        querySnapshot.forEach((doc)=>{
            firebase.auth().currentUser.profileName = doc.data().firstname + " " +doc.data().lastname;
        })
        
    });
}


/*Función que obtiene el nombre al iniciar sesion con google (displayName) o el nombre al crear una 
cuenta con correo y contraseña*/

export const validateName =() =>{
    let nameProfile = firebase.auth().currentUser.profileName;
    if(firebase.auth().currentUser.displayName){
        nameProfile = firebase.auth().currentUser.displayName;
    }
    return nameProfile;
}

/*3.)Función para eliminar post*/

export const postDelete=(id)=>{
    let dbPost = firebase.firestore();
    if(confirm("¿Realmente deseas eliminar este comentario?")){
        dbPost.collection("post").doc(id).delete().then(function() {
            console.log("Document successfully deleted!");
            postRead();        
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    }
}

/*4.) Función que permite editar una publicación seleccionada por el usuario*/

export const postEdit = (id) =>{
    let dbPost = firebase.firestore();
    let textPost = document.getElementById("textpost").value;
    if(validatePost(textPost)){
        return dbPost.collection("post").doc(id).update({
            message : textPost
        }).then(function() {
            console.log("Document successfully updated!");
            //templateTimeLine();
            window.location.hash="#/timeline"; 
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
    }
}

/*5) funcion para dar me gusta a un post*/
/*La base de datos se pueda expandir, creando una nueva voleccion (like), dentro del post*/
export const like = (doc)=>{
    let dbPost=firebase.firestore();
    dbPost.collection('post').doc(doc.id).collection('like').add({
        user: firebase.auth().currentUser.email
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id); 
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}