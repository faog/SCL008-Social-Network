import {signOut} from "./../js/auth.js";
import {postCreate} from "./../js/datamodel.js"
import { templatePost } from "./templatePost.js";

export const templateTimeLine = () =>{
    document.getElementById('containersocialnetwork').innerHTML=
                        `
                        <section id="userinformation">
                            <h3>Muro</h3> 
                            <p>Usuario1</p>
                            <button id="signout">Salir</button> 
                        </section>
                        <section id="postinformation">                            
                            <img src="${firebase.auth().currentUser.photoURL}" id="userphoto" alt="Foto del usuario"/>
                            <textarea id="textpost" placeholder="¿Qué estás pensando?"></textarea>                                                      
                        </section>
                        <button id="post">Publicar</button>  
                        <section id="timeline">
                            <h1>Hola2</h1>
                            <h1>Hola2</h1>
                            <h1>Hola2</h1>
                            <h1>Hola2</h1>
                            <h1>Hola2</h1>
                            <h1>Hola2</h1>
                            <h1>Hola2</h1>
                            <h1>Hola2</h1>
                            <h1>Hola2</h1>
                            <h1>Hola2</h1>
                            <h1>Hola2</h1>
                            <h1>Hola2</h1>
                            <h1>Hola2</h1>
                            <h1>Hola2</h1>
                            <h1>Hola2</h1>
                            <h1>Hola2</h1>
                            <h1>Hola2</h1>
                            <h1>Hola2</h1>
                            <h1>Hola2</h1>
                            <h1>Hola2</h1>
                            <h1>Hola2</h1>
                            <h1>Hola2</h1>
                            <h1>Hola2</h1>
                            <h1>Hola2</h1>
                        </section>                    
                        `;
    
    //evento para publicar un mensaje   
    document.getElementById('post').addEventListener('click',()=>{
        let textPost = document.getElementById('textpost').value;
        postCreate(textPost);
    })

    document.getElementById('textpost').addEventListener('click',()=>{
        templatePost();
    })
    //evento para cerrar la sesión del usuario
    document.getElementById('signout').addEventListener('click', ()=>{
        signOut();
    })
}