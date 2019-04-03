//Aqui se realiza el manejo del dom

/*
    2-Crear la plantilla estructural del html que representa al login.
    Aqui se debe importar la función loginGoogle()
*/

import { loginGoogle } from './../js/auth.js'; //esta tenue por que no se ha usado

//funcion que la veran otros, donde necesito crear lo que voy a trastapasar en un contenedor

export const templateLogin = () =>{
    // creamos div que contendrá la plantilla
    const containerLogin = document.createElement('div');
    
    //Crearemos el contenido del login
    const contentLogin =`
                        <p>Login con Google</p>
                        <button id="login">Loguealo</button>
                        `;
    
    //traspasar el contenido de contentLogin al div
    containerLogin.innerHTML = contentLogin;

    //Le pediremos que encuentre el evento del boton en este archivo

    /*querySelector es un evento que permite buscar donde yo le indique, 
    en este caso le estamos pidiendo que busque el btn con id login*/     
    const btn = containerLogin.querySelector('#login');

    btn.addEventListener('click',()=>{
        console.log(loginGoogle());
    })

    //se debe retornar containerLogin para poder escribir en el html

    return containerLogin;
}