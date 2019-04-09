import {signOut, observer} from "./../js/auth.js";
import {templatePost} from "./templatePost.js";

export const templateTimeLine = () =>{
    observer();
    document.getElementById('containersocialnetwork').innerHTML=
                        `
                        <nav id="navinformation">                                                                                  
                            <a href="#/profile" class="brand-logo">
                                <img src="assets/Images/logoBlanco.png" id="btnprofile" alt="Perfil Usuario"/>                            
                            </a>  
                            <button id="btnup">
                                <img src="assets/Images/pageup.png" id="up" alt="Boton subir"/>  
                            </button> 
                            <button id="btnsignout">
                                <img src="assets/Images/logout.png" id="logout" alt="Boton salir aplicación"/>  
                            </button>  
                        </nav>

                        <section id="userinformation">                            
                            <img src="" id="userphoto" alt="Foto del usuario"/>
                            <textarea id="text" placeholder="¿Qué estás pensando?"></textarea>                                                      
                        </section>
                        
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
    
    document.getElementById('text').addEventListener('click',()=>{
        templatePost();
        window.location.hash="#/post";        
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