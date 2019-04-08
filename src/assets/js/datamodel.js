//Variable que obtiene la inicialización de firestone 
let dbPost = firebase.firestore();



export const postCreate = (textPost) =>{
    let date=Date.now();
  
    dbPost.collection("post").add({
        text:textPost,
        user:firebase.auth().currentUser.email,
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
