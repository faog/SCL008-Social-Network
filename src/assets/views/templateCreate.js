import { createAccount } from './../js/auth.js';
import { validateEmail } from '../js/validation.js';
//Se exporta la templateCreate(), siendo route quien lo observa
export const templateCreate = () => {
  //Obtengo el elemento donde equiero imprimir el template.
  const containerCreate = document.getElementById('containersocialnetwork');
  //Creo la estructura que necesito imprimir
  const contentCreate = `
                        <section id="informationsocialnetwork">
                          <img src="assets/Images/logoVerde.png" id="logo" alt="logo Pet Community"/> 
                          <h2 class="accounttitle">Pet Community</h2>
                          <h5 class="accountparagraph">La comunidad de mascotas</h5>                     
                        </section>

                        <section id="newaccount">
                          <h3 class="accounttitle">Bienvenido</h3>                          
                          <h5 class="accountparagraph">Rellene los siguientes campos:</h5>
                          <input type="text" id="firstnamenewuser" class="element" placeholder="Nombre" autofocus/>
                          <p id="firstnameerror" class="errormessage"></p>
                          <input type="text" id="lastnamenewuser" class="element" placeholder="Apellido"/>
                          <p id="lastnameerror" class="errormessage"></p>
                          <input type="email" id="emailnewuser" class="element" placeholder="Correo"/>
                          <p id="emailerror" class="errormessage"></p>
                          <input type="password" id="passwordnewuser" class="element" placeholder="Contraseña"/>
                          <p id="passworderror"  class="errormessage"></p>
                          <button id="create" class="element">Crear tu cuenta</button>
                          <p id="accounterror"></p>
                        </section>`;
  // pasar el contenido de contentCreate a containerCreate
  containerCreate.innerHTML = contentCreate;
  // le pido que busque el id del boton dentro del div creado
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
      document.getElementById('passworderror').innerHTML=`*Debes ingresar una contraseña con minimo 6 caracteres.`;
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