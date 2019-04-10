//Configuración de las rutas

//importación de los templates constridos
import {templateCreate} from './assets/views/templateCreate.js';
import {templateSignIn } from './assets/views/templateSignIn.js';
import {templateTimeLine} from './assets/views/templateTimeLine.js'
import {templatePost} from './../assets/views/templatePost.js'
import {templateProfile} from './../assets/views/templateProfile.js'

/*1. Crear una función que reciba el hash (#) y según la coincidencia retorne otra función que va imprimir
el template en el html*/

//cada vez que recibe un # distinto, lo actualizará
const changeRoute = (hash) =>{
    if (hash === '#/create') {
        //le pasa como parametro #/create a la función showTemplate
        return showTemplate(hash);
    }

    if (hash === '') {
        //le pasa como parametro #/a la función showTemplate
        return showTemplate(hash);
    }

    if (hash === '#/timeline') {
        //le pasa como parametro #/timeline a la función showTemplate
        return showTemplate(hash);
    }

    if (hash === '#/post') {
        //le pasa como parametro #/post a la función showTemplate
        return showTemplate(hash);
    }

    if (hash === '#/profile') {
        //le pasa como parametro #/profile a la función showTemplate
        return showTemplate(hash);
    }

}

/*2.La función showTemplate(), se encarga de imprimir el template en el index.html*/
const showTemplate = (hash) =>{
    //necesito sacar el #/ a mi string
    const router = hash.substring(2);
    //Obtener desde el html el id del elemento donde se imprimirá shohTemplate
    const containerRoot = document.getElementById('containersocialnetwork');
    containerRoot.innerHTML='';

    //Se hace el match del hash utilizado y el template que quiero mostrar
    switch (router) {          
        case 'create':
            templateCreate();
            break;
        case '':
            templateSignIn();
            break;
        case 'timeline':
            templateTimeLine();
            break;
        case 'post':
            templatePost();
            break;
        case 'profile':
            templateProfile();
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