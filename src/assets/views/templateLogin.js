import { loginGoogle} from './../js/auth.js'; 

export const templateLogin = () =>{

    const containerLogin = document.getElementById('containersocialnetwork');     
    const contentLogin =`
                        <p>Login con Google</p>
                        <button id="login">Loguealo</button>
                        `;        
    containerLogin.innerHTML = contentLogin;     
    containerLogin.querySelector('#login').addEventListener('click',()=>{
        loginGoogle();
    })   
}