import { observer } from "./../js/auth.js";
import {templateTimeLine} from "./templateTimeLine.js"

export const templateProfile =()=>{
    observer();
    document.getElementById('containersocialnetwork').innerHTML=
                        `
                        <nav id="navinformation">
                            <button id="btnbacktimeline">
                                <img src="assets/Images/left-arrow.png" id="backtimeline" alt="volver al muro"/>                            
                            </button>  
                        </nav>
                        <section id="userinformation">
                            <h3>perfil</h3> 
                        </section>
                        `

    //evento que permite ir al templateTimeLine
    document.getElementById('btnbacktimeline').addEventListener('click',()=>{
        templateTimeLine();
        window.location.hash="#/timeline";        
    })


}

