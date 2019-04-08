//Variable que obtiene la inicialización de firestone 
let dbPost = firebase.firestore();

/*1.)Función para crear un nuevo post
Necesito traspasar desde el template el texto de la publicación*/
export const postCreate = (textPost) =>{
    let date=Date.now();

    dbPost.collection("post").add({        
        user:firebase.auth().currentUser.email,
        text:textPost,
        date:date
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        document.getElementById("textpost").value="";
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}
