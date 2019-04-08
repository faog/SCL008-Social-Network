import {signOut} from "./../js/auth.js";
import {postCreate} from "./../js/datamodel.js"

export const templateTimeLine = () =>{
    document.getElementById('containersocialnetwork').innerHTML=
                        `
                        <section id="userinformation">
                            <h3>Muro</h3> 
                            <p>Usuario1</p>
                        </section>
                        <section id="postinformation">
                            <textarea id="textpost" placeholder="¿Qué estás pensando?"></textarea>
                            <button id="post">Publicar</button>
                            <button id="signout">Salir</button>  
                        </section>
                        <section id="timeline">
                            
                        </section>                    
                        `;
    
    //evento para publicar un mensaje   
    document.getElementById('post').addEventListener('click',()=>{
        let textPost = document.getElementById('textpost').value;
        postCreate(textPost);
    })

    //evento para cerrar la sesión del usuario
    document.getElementById('signout').addEventListener('click', ()=>{
        signOut();
    })
}