import { observer } from "./../js/auth.js";
import {templateTimeLine} from "./templateTimeLine.js"
import { validateName } from "../js/datamodel.js";

export const templateProfile =()=>{
    observer();
    let nameProfile = validateName(); 
    document.getElementById('containersocialnetwork').innerHTML=
                        `
                        <nav id="navinformation">
                            <button id="btnbacktimeline">
                                <img src="assets/Images/left-arrow.png" id="backtimeline" alt="volver al muro"/>                            
                            </button>  
                        </nav>
                        <section id="userprofile">
                            <img src="" id="userphoto"  alt="Foto del usuario"/>
                            <h2 id="profilename">${nameProfile}</h2>
                            <h3 id="useremail"></h3> 
                        </section>
                        `

    //evento que permite ir al templateTimeLine
    document.getElementById('btnbacktimeline').addEventListener('click',()=>{
        templateTimeLine();
        window.location.hash="#/timeline";        
    })


}

