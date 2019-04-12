import { createAccount } from './../js/auth.js';
import { validateEmail } from '../js/validation.js';
import { templateSignIn } from './templateSignIn.js';
//Se exporta la templateCreate(), siendo route quien lo observa
export const templateCreate = () => {
  //Obtengo el elemento donde equiero imprimir el template.
  const containerCreate = document.getElementById('containersocialnetwork');
  //Creo la estructura que necesito imprimir
  const contentCreate = `
                        <div class="templatecreate">                          
                          <section id="informationsocialnetwork">
                            <a href="#" class="brand-logo">
                              <img src="assets/Images/logoVerde.png" id="logo" alt="logo Pet Community"/>
                            </a>                           
                            <h2>Pet Community</h2>
                            <h3>La comunidad de mascotas</h3>                     
                          </section>

                          <section id="newaccount">
                            <h2>Bienvenido</h2>                          
                            <h3>Rellene los siguientes campos:</h3>
                            <input type="text" id="firstnamenewuser" class="element" placeholder="Nombre" autofocus/>
                            <p id="firstnameerror" class="errormessage"></p>
                            <input type="text" id="lastnamenewuser" class="element" placeholder="Apellido"/>
                            <p id="lastnameerror" class="errormessage"></p>
                            <input type="email" id="emailnewuser" class="element" placeholder="Correo"/>
                            <p id="emailerror" class="errormessage"></p>
                            <input type="password" id="passwordnewuser" class="element" placeholder="Contraseña"/>
                            <p id="passworderror"  class="errormessage"></p>
                            <button id="create" class="element">Crea tu cuenta</button>
                            <p id="accounterror"></p>
                          </section>
                        </div>`;

  // pasar el contenido de contentCreate a containerCreate
  containerCreate.innerHTML = contentCreate;
  
  containerCreate.querySelector('#create').addEventListener('click', () => {
    let firstNameNewUser = document.getElementById('firstnamenewuser').value;
    let lastNameNewUser = document.getElementById('lastnamenewuser').value;
    let emailNewUser = document.getElementById('emailnewuser').value;
    let passwordNewUser = document.getElementById('passwordnewuser').value;
    let userCreateResponse = createAccount(firstNameNewUser,lastNameNewUser,emailNewUser,passwordNewUser);
    
    /*IMPRESION VÁLIDACIONES EN EL DOM*/
    if (firstNameNewUser===""){
      document.getElementById('firstnameerror').innerHTML=`*Debes ingresar un nombre.`;      
    }else{
      document.getElementById('firstnameerror').innerHTML='';
    }
  
    if (lastNameNewUser===""){
      document.getElementById('lastnameerror').innerHTML=`*Debes ingresar un apellido.`;
    }else{
      document.getElementById('lastnameerror').innerHTML='';
    } 
  
    if(emailNewUser==="" || !validateEmail(emailNewUser)){
      document.getElementById('emailerror').innerHTML=`*Debes ingresar un correo válido.`;
    }else{
      document.getElementById('emailerror').innerHTML='';
    }
  
    if(passwordNewUser==="" || passwordNewUser.length<6){
      document.getElementById('passworderror').innerHTML=`*Debes ingresar una contraseña con mínimo 6 caracteres.`;
    }else{
      document.getElementById('passworderror').innerHTML='';
    }

    if(userCreateResponse==="OK"){
      // TODO: Falta navegar al login
    } else {
      console.log(userCreateResponse);
    }
  })
  return containerCreate;

  
}