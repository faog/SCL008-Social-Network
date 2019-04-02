//Configuración de las rutas

//necesito mirar el templateLogin que esta en view
import {templateLogin} from './assets/views/templateLogin.js';

//necesito mirar el templateCreate que esta en view
import {templateCreate} from './assets/views/templateCreate.js';

/*
1. Crear una función que reciba el hash (#) y según la coincidencia retorne otra función que va imprimir
el template en el html*/

//cada vez que recibe un # distinto, lo actualizará
const changeRoute = (hash) =>{
    if (hash === '#/login') {
        //le pasa como parametro #/login a la función showTemplate
        return showTemplate(hash);
    }

    if (hash === '#/create') {
        return showTemplate(hash);
    }
}

//imprimira el template en el html
const showTemplate = (hash) =>{
    //necesito sacar el #/ a mi string
    const router = hash.substring(2);
    const containerRoot = document.getElementById('containersocialnetwork');
    containerRoot.innerHTML='';

    //hacemos el match del hash utilizado y el template que quiero mostrar
    switch (router) {
        case 'login':
            //si es el caso, imprime la vista templateLogin en el html
            containerRoot.appendChild(templateLogin());
            break;
    
        case 'create':
            containerRoot.appendChild(templateCreate());
            break;
        default:
            containerRoot.innerHTML = `<p>Error 404</p>`
    }
}

//inicializar las rutas para que se ejecute changeRouter() y en su defecto showTemplate()

//necesito exportarla ya que es la que almacena el cambio de hash
export const initRouter = () =>{
    //evento que llama a toda la página, ya que necesito ir cambiando la url
    window.addEventListener('load',changeRoute(window.location.hash));
    /*se le pasa como parametro window.location.hash, ya que es el parametro 
    que tiene la página en ese momento*/

    //Metodo que reconocer si hubo un cambio en el hash y le pasa ese nuevo hash a changeRouter

    if('onhashchange' in window){
        //cuando reconoce un cambio en el hash, le pasa el hash cambiado
        window.onhashchange = () =>{
            changeRoute(window.location.hash);
        }
    }

} 