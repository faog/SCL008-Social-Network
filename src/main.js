/*global firebase*/


//llamado a las rutas
//Archivo base que comunica a todas las cosas

//1. Llamado a la inicialización de la ruta (route) e inicialización de firebase

import { initRouter} from './route.js';
import { templateSignIn } from './assets/views/templateSignIn.js';

const init = () => {
    initRouter();
    templateSignIn();
}


window.addEventListener('load', init);