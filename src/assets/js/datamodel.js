//Variable que obtiene la inicialización de firestone 
let dbPost = firebase.firestore();

/*1.)Función para crear un nuevo post
Necesito traspasar desde el template el texto de la publicación*/
export const postCreate = (textPost) =>{
    let date=Date.now();

    dbPost.collection("post").add({
        user: firebase.auth().currentUser.email,
        message: textPost,
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
}


/*2.)Función para mostrar los post en el muro de la aplicación*/
export const postRead = () =>{
    dbPost.collection("post").get().then((querySnapshot) => {
        document.getElementById('timeline').innerHTML = '';
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().message}`);
        document.getElementById('timeline').innerHTML +=
        `   
            <h3 id="userpost">${doc.data().user}</h3>
            <h4 id="postread">${doc.data().message}</h4>                          
            <button id="update">Editar</button>
            <button id"delete">Eliminar</button>           
        `    
        });
    });
}
