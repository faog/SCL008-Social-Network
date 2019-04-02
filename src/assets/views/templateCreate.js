import { createAccount } from './../js/auth.js';
//Export: Lo va usar otro archivo, siendo route quien las mirará
export const templateCreate = () => {
  const containerCreate = document.getElementById('containersocialnetwork');
  const contentCreate = `
                        <section id="informationsocialnetwork">
                          <img src="assets/Images/logoVerde.png" id="logo" alt="logo Pet Community"/> 
                          <h2 class="accounttitle">Pet Community</h2>
                          <h5 class="accountparagraph">La comunidad más grande de mascotas</h5>                     
                        </section>

                        <section id="newaccount">
                          <h3 class="accounttitle">Bienvenido</h3>                          
                          <h5 class="accountparagraph">Rellene los siguientes campos:</h5>
                          <input type="email" id="emailnewuser" class="element" placeholder="Correo" autofocus/>
                          <p id="emailerror"></p>
                          <input type="password" id="passwordnewuser" class="element" placeholder="Contraseña"/>
                          <p id="passworderror"></p>
                          <button id="create" class="element">Crear tu cuenta</button>
                        </section>`;
  // pasar el contenido al div
  containerCreate.innerHTML = contentCreate;
  // le pido que busque el id del boton dentro del div creado
  const btn = containerCreate.querySelector('#create');
  // evento del botón que llama a la autentificación de google.
  btn.addEventListener('click', () => {
    console.log(createAccount());
  })
  return containerCreate;
}