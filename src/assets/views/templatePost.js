import {observer} from "./../js/auth.js";
import {postCreate, validateName} from "./../js/datamodel.js"
import {templateTimeLine} from "./templateTimeLine.js"

export const templatePost =()=>{
    observer();
    let nameProfile = validateName();
    document.getElementById('containersocialnetwork').innerHTML=
                        `
                        <nav id="navinformation">
                            <button id="btnreturntimeline">
                                <img src="assets/Images/left-arrow.png" id="returntimeline" alt="volver al muro"/>                            
                            </button>  
                        </nav>                       
                        <section class="templatepost">
                            <section id="userpost">  
                                <p id="posterror"></p>                          
                                <img src=""id="userphoto" alt="Foto del usuario"/>
                                <h2 id="username">${nameProfile}</h2>                                                                                
                            </section>
                            <textarea id="textpost" placeholder="¿Qué estás pensando?" autofocus></textarea>   
                            <button id="post">Publicar</button> 
                        </section> 
                        `
    //evento para publicar un mensaje   
    document.getElementById('post').addEventListener('click',()=>{
        let userPost = document.getElementById('textpost').value;
        
        if(userPost===''|| userPost.length<10){
            document.getElementById('posterror').innerHTML=`Debes ingresar una publicación con mas de 10 caracteres.`;
        }
        else{
            document.getElementById('posterror').innerHTML='';
        }
        
        postCreate(id);

    })   
    
    //evento que permite ir al templateTimeLine
    document.getElementById('btnreturntimeline').addEventListener('click',()=>{
        templateTimeLine();
        window.location.hash="#/timeline";        
    })



}

