import {signOut, observer} from "./../js/auth.js";
import {templatePost} from"./templatePost.js"
import {postRead, postDelete} from "../js/datamodel.js";
import {templateProfile} from "./templateProfile.js"


export const templateTimeLine = () =>{
    observer();
    postRead();
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
                        <section id="sectiontimeline">
                            <section id="userinformation">                            
                                <img src="" id="userphoto" alt="Foto del usuario"/>
                                <textarea id="text" placeholder="¿Qué estás pensando?"></textarea>                                                      
                            </section>
                            
                            <section id="timeline">
                                
                            </section>   
                        </section>                   
                        `;
    
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
            <button id="update">Editar</button>
            <button id="delete_${doc.id}">Eliminar</button>
        </article>
    `  
}


export const attachEvents =(doc) =>{
    //Función para eliminar post
    document.getElementById('delete_'+doc.id).addEventListener('click', ()=>{
    postDelete(doc.id);
    })
}