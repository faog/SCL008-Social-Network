import {signIn, loginGoogle} from "./../js/auth.js";
import { validateEmailSignIn } from '../js/validation.js';

export const templateSignIn = () =>{
    /*Obtengo el id desde el html donde quiero que se imprima mi ventana inicial y le traspaso el 
    contenido a imprimir*/
    
    
    document.getElementById('containersocialnetwork').innerHTML=    
        `
        <div class="templatesignin">
            <article id="signininformation">
                <img src="assets/Images/logoVerde.png" id="logosignin" alt="logo Pet Community"/> 
                <h2>Pet Community</h2>
                <h3>La comunidad de mascotas</h3>                          
                <input type="email" id="emailsignin" class="elementsignin" autofocus placeholder="Ingrese su correo"/>
                <p id="emailerror" class="errorsignin"></p>
                <input type="password" id= "passwordsigin" class="elementsignin" placeholder="Ingrese su contraseña"/>
                <p id ="passworderror" class="errorsignin"></p>
                <button id="signin">Iniciar Sesión</button>   
                <button id="googlesignin">Iniciar con Google</button>    
                <a id="createaccount" href="#/create">Crear cuenta</a>  
            </article>            
        </div>
        `;      
    
    document.getElementById('signin').addEventListener('click', () => {
        let emailSignIn = document.getElementById('emailsignin').value;
        let passwordSignIn = document.getElementById('passwordsigin').value;
        let userSignIn = signIn(emailSignIn,passwordSignIn);

        /*IMPRESION VÁLIDACIONES EN EL DOM*/
        if(emailSignIn==="" || !validateEmailSignIn(emailSignIn)){
            document.getElementById('emailerror').innerHTML=`*Debes ingresar un correo válido.`;
        }else{
            document.getElementById('emailerror').innerHTML='';
        }
        
        if(passwordSignIn==="" || passwordSignIn.length<6){
            document.getElementById('passworderror').innerHTML=`*Debes ingresar una contraseña con minimo 6 caracteres.`;
        }else{
            document.getElementById('passworderror').innerHTML='';
        }

        if(userSignIn==="OK"){
            console.log("usuario Ok");
        } else {
            console.log(userSignIn);
        }
    })

    document.getElementById('googlesignin').addEventListener('click',()=>{
        loginGoogle();
    })
    
}