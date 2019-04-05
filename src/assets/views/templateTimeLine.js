import { signOut } from "./../js/auth.js";

export const templateTimeLine = () =>{
    const containerLogin = document.getElementById('containersocialnetwork');
    
    //Crearemos el contenido del login
    const contentLogin =`
                        <p>Muro</p>  
                        <button id="signout">Salir</button>                      
                        `;
    
    //traspasar el contenido de contentLogin al div
    containerLogin.innerHTML = contentLogin;

    document.getElementById('signout').addEventListener('click', ()=>{
        signOut();
    })
}