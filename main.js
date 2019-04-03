/*global firebase*/


//llamado a las rutas
//Archivo base que comunica a todas las cosas

//1. Llamado a la inicialización de la ruta (route) e inicialización de firebase

import { initRouter} from './route.js';

const init = () => {
    initRouter();
}

window.addEventListener('load', init);