import { observer } from "./../js/auth.js";

export const templateProfile =()=>{
    observer();
    document.getElementById('containersocialnetwork').innerHTML=
                        `
                        <nav id="navinformation">
                            <a href="#/timeline" class="brand-logo">
                                <img src="assets/Images/left-arrow.png" id="backtimeline" alt="volver al muro"/>                            
                            </a>  
                        </nav>
                        <section id="userinformation">
                            <h3>perfil</h3> 
                        </section>
                        `
}