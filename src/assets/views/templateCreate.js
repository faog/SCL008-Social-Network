import { createAccount } from './../js/auth.js';
//Export: Lo va usar otro archivo, siendo route quien las mirará
export const templateCreate = () => {
  // creamos div que contendrá la plantilla
  const containerCreate = document.createElement('div');
  // creamos el contenido del login
  const contentCreate = `<p>Crear cuenta</p>
                        <button id="create">Crear cuenta</button>`;
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