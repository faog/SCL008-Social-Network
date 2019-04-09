import { observer } from "./../js/auth.js";

export const templateProfile =()=>{
    observer();
    document.getElementById('containersocialnetwork').innerHTML=
                        `
                        <section id="userinformation">
                            <h3>salir</h3> 
                        </section>
                        `
}