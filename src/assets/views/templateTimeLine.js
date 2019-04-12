import {signOut, observer} from "./../js/auth.js";
import {templatePost} from"./templatePost.js"
import {postRead, postDelete, like} from "../js/datamodel.js";
import {templateProfile} from "./templateProfile.js"
import { templateEditPost } from "./templateEditPost.js";



export const templateTimeLine = () =>{
    observer();
    document.getElementById('containersocialnetwork').innerHTML=
                        `
                        <nav id="navinformation">                                                                                  
                            <button id="btnprofile">
                                <img src="assets/Images/logoBlanco.png" id="profile" alt="Perfil Usuario"/>                            
                            </button>  
                            <button id="btnup">
                                <img src="assets/Images/pageup.png" id="up" alt="Boton subir"/>  
                            </button> 
                            <button id="btnsignout">
                                <img src="assets/Images/logout.png" id="logout" alt="Boton salir aplicación"/>  
                            </button>  
                        </nav>
                        <section class="templatetimeline">
                            <section id="sectiontimeline">
                                <section id="userinformation">                            
                                    <img src="" id="userphoto" alt="Foto del usuario"/>
                                    <textarea id="text" placeholder="¿Qué estás pensando?"></textarea>                                                      
                                </section>
                                
                                <section id="timeline">
                                    
                                </section>   
                            </section>   
                        </section>                
                        `;
    postRead();
    //evento que permite ir al templatePost
    document.getElementById('text').addEventListener('click',()=>{
        templatePost();
        window.location.hash="#/post";        
    })

    //evento que permite ir al templateProfile
    document.getElementById('btnprofile').addEventListener('click',()=>{
        templateProfile();
        window.location.hash="#/profile";        
    })
    
    //evento para cerrar la sesión del usuario
    document.getElementById('btnsignout').addEventListener('click', ()=>{
        signOut();
    })

    //evento que sirve para volver al inicio de la pantalla
    document.getElementById("btnup").addEventListener('click',()=>{
        window.scrollTo(0,0);
    });    

}

/*Función que imprime el html de los mensajes publicados*/
export const renderPost =(doc) =>{
    let postDate = new Date(doc.data().date);
    document.getElementById('timeline').innerHTML +=
    `   
        <article class="postread">
            <h3>${doc.data().name}</h3>
            <h5>${postDate.toLocaleDateString('es-cl')} ${postDate.toLocaleTimeString('es-cl')}</h5>
            <h4>${doc.data().message}</h4>             
            <button id="like_${doc.id}" class="btnlike">Like</button>                       
    `
    if(firebase.auth().currentUser.email===doc.data().user){
        document.getElementById('timeline').innerHTML +=
        `
        <div class="btntimeline">
            <button id="update_${doc.id}" class="btnupdate">Editar</button>
            <button id="delete_${doc.id}" class="btndelete">Eliminar</button>
        </div>
        `
    }        
        document.getElementById('timeline').innerHTML +=
        `           
        </article>
        `   
}


export const attachEvents =(doc) =>{
    if(firebase.auth().currentUser.email===doc.data().user){
        /*Evento que permite eliminar un post*/
        document.getElementById('delete_'+doc.id).addEventListener('click', ()=>{
            postDelete(doc.id);
        })
        /*Evento que permite editar una publicación*/
        document.getElementById('update_'+doc.id).addEventListener('click',()=>{
            window.location.hash = "#/editpost";
            templateEditPost(doc);
        }); 
    }
    document.getElementById('like_'+doc.id).addEventListener('click',()=>{
        like(doc);
    })
}

