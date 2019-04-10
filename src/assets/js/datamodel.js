import {validatePost} from'./validation.js';
import {renderPost } from "../views/templateTimeLine.js";

/*1.)Función para crear un nuevo post
Necesito traspasar desde el template el texto de la publicación*/
export const postCreate = (userPost) =>{
    let dbPost = firebase.firestore();
    if(validatePost(userPost)){
        let date=Date.now();
        let nameProfile = firebase.auth().currentUser.profileName;
        if(firebase.auth().currentUser.displayName){
            nameProfile = firebase.auth().currentUser.displayName;
        }
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
    dbPost.collection("post").orderBy("date","desc").get().then((querySnapshot) => {
        document.getElementById('timeline').innerHTML = '';
        querySnapshot.forEach((doc) => {
            renderPost(doc);
        });
    });
}
