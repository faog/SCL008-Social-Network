import {signIn, loginGoogle} from "./../js/auth.js";
import { validateEmailSignIn } from '../js/validation.js';

export const templateSignIn = () =>{
    /*Obtengo el id desde el html donde quiero que se imprima mi ventana inicial y le traspaso el 
    contenido a imprimir*/
    
    
    document.getElementById('containersocialnetwork').innerHTML=    
        `
        <section id="signinview">
            <input type="email" id="emailsignin" placeholder="ingrese su correo"/>
            <p id="emailerror" class=""></p>
            <input type="password" id="passwordsigin" placeholder="ingrese su contraseña"/>
            <p id="passworderror" class=""></p>
            <button id="signin">Iniciar Sesión</button>   
            <button id="googlesignin">Google</button>    
            <a href="#/create">Crear cuenta</a>  
        </section>
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