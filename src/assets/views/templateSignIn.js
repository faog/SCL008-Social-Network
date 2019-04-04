export const templateSignIn = () =>{
    /*Obtengo el id desde el html donde quiero que se imprima mi ventana inicial y le traspaso el 
    contenido a imprimir*/
    document.getElementById('containersocialnetwork').innerHTML=    
        `
        <input type="email" id="email" placeholder="ingrese su correo"/>
        <input type="password" id="password" placeholder="ingrese su contraseña"/>
        <button id="signin">Iniciar Sesión</button>   
        <a href="#/login">Google</a>    
        <a href="#/create">Crear cuenta</a>  
        `;   

    
}