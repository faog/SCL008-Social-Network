import { observer } from "./../js/auth.js";
import {postCreate} from "./../js/datamodel.js"

export const templatePost =()=>{
    observer();
    document.getElementById('containersocialnetwork').innerHTML=
                        `
                        <section id="userinformation">
                            <h3>salir</h3> 
                        </section>
                        <section id="userinformation">                            
                            <img src="" id="userphoto" alt="Foto del usuario"/>
                            <h2>${firebase.auth().currentUser.displayName}</h2>                                                                                
                        </section>
                        <textarea id="textpost" placeholder="¿Qué estás pensando?"></textarea>   
                        <button id="post">Publicar</button>  
                        `

    //evento para publicar un mensaje   
    document.getElementById('post').addEventListener('click',()=>{
        let textPost = document.getElementById('textpost').value;
        postCreate(textPost);
    })                    
}