import {observer} from "./../js/auth.js";
import {postCreate} from "./../js/datamodel.js"
import {templateTimeLine} from"./../views/templateTimeLine.js"

export const templatePost =()=>{
    observer();
    document.getElementById('containersocialnetwork').innerHTML=
                        `
                        <nav id="navinformation">
                            <a href="#/timeline" class="brand-logo">
                                <img src="assets/Images/left-arrow.png" id="backtimeline" alt="volver al muro"/>                            
                            </a>  
                        </nav>
                        <section id="userinformation">  
                            <p id="posterror"></p>                          
                            <img src=""id="userphoto" alt="Foto del usuario"/>
                            <h2 id="username">${firebase.auth().currentUser.displayName}</h2>                                                                                
                        </section>
                        <textarea id="textpost" placeholder="¿Qué estás pensando?" autofocus></textarea>   
                        <button id="post">Publicar</button>  
                        `
    //evento para publicar un mensaje   
    document.getElementById('post').addEventListener('click',()=>{
        let userPost = document.getElementById('textpost').value;
        
        if(userPost===''){
            document.getElementById('posterror').innerHTML=`Debes ingresar una publicación`;
        }
        else{
            document.getElementById('posterror').innerHTML='';
        }
        
        postCreate(userPost);

    })                    
}

