//llamado a las rutas
//Archivo base que comunica a todas las cosas

//1. Llamado a la inicialización de la ruta (route) y llamado al template de inicio (templateSignIn)

import { initRouter} from './route.js';
import { templateSignIn } from './assets/views/templateSignIn.js';

const init = () => {
    initRouter();
    templateSignIn();
}


window.addEventListener('load', init);