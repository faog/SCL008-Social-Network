import {observer} from "./../js/auth.js";
import {postCreate} from "./../js/datamodel.js"
import {templateTimeLine} from "./templateTimeLine.js"

export const templatePost =()=>{
    observer();
    let nameProfile = firebase.auth().currentUser.profileName;
    if(firebase.auth().currentUser.displayName){
        nameProfile = firebase.auth().currentUser.displayName;
    }
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
        
        if(userPost===''){
            document.getElementById('posterror').innerHTML=`Debes ingresar una publicación`;
        }
        else{
            document.getElementById('posterror').innerHTML='';
        }
        
        postCreate(userPost);

    })   
    
    //evento que permite ir al templateTimeLine
    document.getElementById('btnreturntimeline').addEventListener('click',()=>{
        templateTimeLine();
        window.location.hash="#/timeline";        
    })



}

