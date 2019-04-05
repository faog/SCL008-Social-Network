

<h1 id=">Readme Social Network</h1>
<p>Para el proyecto de Red Social hemos creado una red social pensada en los amantes de los animales , llamada PetComunity</p>

## Sobre PetComunity
PetComunity fue creada pensando en la necesidad de unificar.....

## Planificación

Nuestra planificacion puedes revisarla en el siguiente link:
[Planificacion Trello](https://trello.com/b/zX6iPOCP/pet-community)

## Usuarios

Nuestros Usuarios pueden ser 

## Encuestas
|  ![enter image description here](https://i.postimg.cc/rm2Y1N7v/a.png)| ![enter image description here](https://i.postimg.cc/2SJt6DGj/b.png)|
|--|--|
|![enter image description here](https://i.postimg.cc/Ls1bgbQt/c.png)  |  ![enter image description here](https://i.postimg.cc/sxV68Djm/d.png)|
|![enter image description here](https://i.postimg.cc/NM8CprcL/e.png)  |



Se realizaron encuestas para realizar las historias de Usuario  
[Revisa aquí nuestra encuesta](https://docs.google.com/forms/d/1OpTLBJWgQkFGSWZOun8EQUjy1WaPa1qyCMfaPmHA3ro/edit)

# Historias de usuario y Criterios de aceptación


**COMO** amante de las mascotas   **QUIERO**  crear una cuenta en la página **PARA** poder ingresar a la comunidad de manera segura.
 **Criterio de aceptación**   Para realizar la historia de usuario N°1 voy a :

	Permitir al usuario ingresar una contraseña.
	Generar un mensaje de error, si la contraseña es menor a 6 caracteres.
	Generar un mensaje de error, si el correo electrónico no es válido.
	Cuando el usuario crea una cuenta, adicionalmente se le solicita su nombre y apellido.
	Genera mensaje de error si el usuario no ingresa nombre o apellido.
	Cuando el usuario crea la cuenta, debe recibir un correo de verificación.

**COMO** usuario de la página, **QUIERO** ingresar nuevamente de manera segura **PARA**  ver las novedades de la comunidad.
**Criterio de aceptación**   Para realizar la historia de usuario N°2 voy a :

	El usuario pueda ingresar con su usuario y contraseña (input secreto).
	El usuario pueda recuperar su contraseña en caso de olvido.
	Cuando el usuario ingrese una contraseña incorrecta, se genere un error informando la situación (Firebase)
	El usuario puede ingresar a la aplicación con tener un correo de google.
	Si el usuario logra conectarse satisfactoriamente, enviarlo al timeline de la aplicación.


**COMO** veterinario **QUIERO** que mi perfil no sea el mismo de un dueño de mascotas, **PARA**  poder diferenciar mis servicios.
**Criterio de aceptación**   Para realizar la historia de usuario N°3 voy a :

	Luego de crear el perfil básico, los distintos tipos de usuario podrán elegir el tipo de perfil , los cuales serán : Perfil de Veterinario , Perfil Dueño de Mascotas ,Perfil Vendedor, Perfil Otro
	Podrán responder una encuesta de acuerdo a su perfil
	Los perfiles de veterinario y vendedor tendrán la opción de agregar información que consideren relevante.

**COMO** usuario de la aplicación, **QUIERO** publicar una mascota encontrada para ubicar a su dueño.
**Criterio de aceptación**   Para realizar la historia de usuario N°4 voy a :

	El usuario puede crear un post visible para la comunidad.
	El usuario puede agregar una etiqueta para que se pueda filtrar por mascota encontrada.
	La publicación debe tener contenido para poder publicarla antes de enviar.
	Luego que el usuario crea el post, este quede en las primeras publicaciones de la comunidad..


**COMO** vendedor **QUIERO** editar la publicación de un articulo, **PARA**  actualizar una oferta.
**Criterio de aceptación**   Para realizar la historia de usuario N°5 voy a :

	Se debe permitir que el veterinario pueda editar un post.
	Para permitir editar, el post debe tener contenido antes de publicarlo.
	Que al editar el post, este quede en las primeras publicaciones..

**COMO** usuario que encontró una mascota perdida **QUIERO** eliminar el post **PARA**  que no sigan preguntándome por ella ya que encontré a sus dueños
**Criterio de aceptación**   Para realizar la historia de usuario N°6 voy a :

	Permitir al usuario eliminar un post.
	Error de acción, preguntar si esta seguro que quiere eliminar el post
	Que el post quede eliminado del muro del usuario y del muro de la comunidad.
	
**COMO** un usuario **QUIERO** adoptar una mascota y poder ver solo los post relacionados con adopciones **PARA**  encontrar la mascota que quiero
**Criterio de aceptación**   Para realizar la historia de usuario N°7 voy a :

	Elegir un filtro que permita seleccionar solo las publicaciones con el tag adopcion
	Ordenar por fecha de publicación

**COMO** dueño de mascotas **QUIERO** que mis amigos sepan que me gusta un producto, **PARA**  que ellos conozcan al producto y su vendedor.
**Criterio de aceptación**   Para realizar la historia de usuario N°8 voy a :

	El usuario puede agregar un Like a la publicación y visualizar el conteo de esta.
	El usuario puede quitar el like a una publicación (Unlike).

# Experiencia de usuario  
Diseño  
[Puedes revisar LUL aquí](https://majomarquez.github.io/SCL008-Cipher/src/index.html)

## Prototipo de Baja Fidelidad

| ![enter image description here](https://i.postimg.cc/4xVJsBv0/login.jpg) |![enter image description here](https://i.postimg.cc/WzdvKnbX/crea-cuenta.jpg)|
|--|--|
| ![enter image description here](https://i.postimg.cc/C1LYCYyy/crea-cuenta2.jpg) | ![enter image description here](https://i.postimg.cc/fL2sBFZV/crear-cuenta3.jpg) |
|  ![enter image description here](https://i.postimg.cc/rp9MtsPC/crear-cuenta4.jpg)| ![enter image description here](https://i.postimg.cc/7hjky25D/perfil.jpg) |
|--|--|
| ![enter image description here](https://i.postimg.cc/wxrHNS0P/Post.jpg) |![enter image description here](https://i.postimg.cc/7L4q60mZ/post-2.jpg)|




## Prototipo de Alta Fidelidad
|  ![enter image description here](https://i.postimg.cc/43vV7vGL/1.png)| ![enter image description here](https://i.postimg.cc/1t96pg59/Selecci-n-007.png) |
|--|--|




El prototipo de Alta Fidelidad fue realizado en Figma .  
[Aquí Puedes encontrar el prototipo de alta fidelidad Completo](https://www.figma.com/proto/Y8LPqP0VJDA85Vsl8ZPXTnPj/Pet-Community?node-id=1%3A3&scaling=fit-width) .

## Testeos de Usabilidad.

-   **Prototipo de Baja Fidelidad**

Se realizaron x pruebas con el prototipo de baja fidelidad de la que obtuvimos feedback sobre xxxxxxxxo, lo anterior fue modificado en el prototipo de alta fidelidad mostrado a continuación.

-   **Pruebas de Prototipo de Alta Fidelidad.**

Se realizaron xpruebas con el prototipo de alta fidelidad, realizadas en loom ,estos pueden ser vistos en los links a continuación:

[Ver Pruebas con prototipo de alta fidelidad](https://docs

## Implementación de la Interfaz de Usuario 

Se utilizó Vanilla JS, CSS , HTML yFirebase.  



### Responsive

Debe verse bien en dispositivos de pantallas grandes
(computadoras/es, laptops, etc.) y pequeñas (tablets, celulares, etc.). Te
sugerimos seguir la técnica de `mobile first` (más detalles sobre esta técnica
al final).

### Pruebas unitarias (unit tests)

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_,
_lines_, y _branches_.

### Implementación de la Interfaz de Usuario (UI y comportamiento de Interfaz de Usuario)

Estas son consideraciones para que escribas las Definiciones de Terminado de
tus H.U.:

#### Creación de cuenta de usuario e inicio de sesión

* Login con Firebase:
  - Para el login y las publicaciones en el muro puedes utilizar [Firebase](https://firebase.google.com/products/database/)
  - Creación de cuenta de acceso y autenticación con cuenta de correo y
    contraseña, y con cuenta de Google.
* Validaciones:
  - La aplicación solo permitirá el acceso a usuarios con cuentas válidas.
  - No pueden haber usuarios repetidos.
  - La cuenta de usuario debe ser un correo electrónico válido.
  - Lo que se escriba en el campo (_input_) de contraseña debe ser secreto.
* Comportamiento:
  - Al enviarse un formulario de registro o inicio de sesión, debe validarse.
  - En caso haya errores, el sistema debe mostrar mensajes de error para
    ayudar al usuario a corregirlos.
  - Al recargar la aplicación, se debe verificar si el usuario está
    logueado antes de mostrarle el contenido.


#### Muro/timeline de la red social

* Validaciones:
  - Al apretar el botón de publicar, debe validar que exista contenido en
  el _input_.
* Comportamiento:
  - Poder publicar un _post_.
  - Poder dar y quitar _like_ a una publicación.
  - Llevar un conteo de los _likes_.
  - Poder eliminar un post específico.
  - Pedir confirmación antes de eliminar un _post_.
  - Al dar _click_ para editar un _post_, debe cambiar el texto por un _input_
    que permita editar el texto y luego guardar los cambios.
  - Al guardar los cambios debe cambiar de vuelta a un texto normal pero con la
    información editada.
  - Al recargar la página debo de poder ver los textos editados.

### Hacker edition

* Permite crear posts con imágenes.
* Permite buscar usuarios, agregar y eliminar "amigos".
* Permite definir la privacidad de los _posts_ (público o solamente para amigos).
* Permite ver su muro de cualquier usuario "no-amigo" (solamente los
  posts _públicos_).
* Permite comentar o responder una publicación.
* Permite editar perfil.

### Consideraciones técnicas Front-end

El corazón de este proyecto incluye:

* Separar la manipulación del DOM de la lógica (Separación de responsabilidades).
* Contar con multiples vistas para esto tu aplicacion debera ser una
 [Single Page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application)
* Que el sitio sea responsive, ya dicho.
* Alterar y persistir datos. Los datos que agregues o modifiques deberán
  persistir a lo largo de la aplicación, te recomendamos que uses
  [Firebase](https://firebase.google.com/).

Además, podrías agregar algunas tareas nuevas de acuerdo a tus decisiones:

* Recuerda que no hay un setup de **tests** definido, dependerá de
  la estructura de tu proyecto también, pero algo que no debes de olvidar es
  pensar en éstas pruebas, incluso te podrían ayudar a definir la estructura y
  nomenclatura de tu lógica.

### Consideraciones técnicas UX

Desde el punto de vista de UX, deberás:

* Hacer al menos 2 o 3 entrevistas con usuarios.
* Hacer un  prototipo de baja fidelidad.
* Asegurarte de que la implementación en código siga los lineamientos del
  diseño.
* Hacer sesiones de testing con el producto en HTML.

## Entrega

El proyecto será _entregado_ subiendo tu código a GitHub (`commit`/`push`) y la
interfaz será desplegada usando GitHub pages u otro servicio de hosting que
puedas haber encontrado en el camino.

## Evaluación

Recuerda revisar la [rúbrica](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vRktPN4ilZtkRN5tUb3DVhgeihwlzk63_-JI3moA-bXpKDbHDioAK2H3qbrwWNb0Ql4wX22Tgv7-PDv/pubhtml)
para ver la descripción detallada de cada habilidad y cada nivel. Esta es una
lista de todas las habilidades involucradas en este proyecto y que evaluaremos
cuando lo completes:

### Habilidades Blandas/Socioemocionales

| Habilidad |
|-----------|
| Planificación y organización |
| Autoaprendizaje |
| Solución de Problemas |
| Dar y recibir feedback |
| Adaptabilidad |
| Trabajo en equipo |
| Responsabilidad |
| Comunicación eficaz |
| Presentaciones |


### Habilidades Técnicas, Front-end

| Habilidad |
|-----------|
| **JavaScript** |
| Estilo |
| Nomenclatura/semántica |
| Funciones/modularidad |
| Estructuras de datos |
| Tests |
| **HTML** |
| Validación |
| Estilo |
| Semántica |
| SEO |
| **CSS** |
| DRY |
| Responsive |
| **SCM** |
| Git |
| GitHub |
| **CS** |
| Lógica |
| Arquitectura |

### Habilidades Técnicas, UX

| Habilidad |
|-----------|
| User Centricity |
| Visual Desing |

***

## Pistas / Tips / Lecturas complementarias

### Mobile first

El concepto de [_mobile first_](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)
hace referencia a un proceso de diseño y desarrollo donde partimos de cómo se ve
y cómo funciona la aplicación en un dispositivo móvil primero, y más adelante se
ve como adaptar la aplicación a pantallas progresivamente grandes y
características específicas del entorno desktop. Esto es en contraposición al
modelo tradicional, donde primero se diseñaban los websites (o webapps) para
desktop y después se trataba de _arrugar_ el diseño para que entre en pantallas
más chicas. La clave acá es asegurarse de que desde el principio diseñan usando
la vista _responsive_ de las herramientas de desarrollador (developer tools) del
navegador. De esa forma, partimos de cómo se ve y comporta la aplicación en una
pantalla y entorno móvil.

### Múltiples vistas

En proyectos anteriores nuestras aplicaciones habían estado compuestas de una
sola _vista_ principal (una sóla _página_). En este proyecto se introduce la
necesidad de tener que dividir nuestra interfaz en varias _vistas_ o _páginas_
y ofrecer una manera de navegar entre estas vistas. Este problema se puede
afrontar de muchas maneras: con archivos HTML independientes (cada uno con su
URL) y links tradicionales, manteniendo estado en memoria y rederizando
condicionalmente (sin refrescar la página), [manipulando el historial del
navegador](https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador)
con [`window.history`](https://developer.mozilla.org/es/docs/Web/API/Window/history).
En este proyecto te invitamos a explorar opciones y decidir una opción
de implementación.

### Escritura de datos

En los proyectos anteriores hemos consumido (leído) datos, pero todavía no
habíamos escrito datos (salvar cambios, crear datos, borrar, ...). En este
proyecto tendrás que crear (salvar) nuevos datos, así como leer, actualizar y
modificar datos existentes. Estos datos se podrán guardar de forma remota
usando [Firebase](https://firebase.google.com/).

Otras:

* [Modulos: Export](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/export)
* [Modulos: Import](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import)
* [Diseño web, responsive design y la importancia del mobile first - Media Click](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)
* [Mobile First: el enfoque actual del diseño web móvil - 1and1](https://www.1and1.es/digitalguide/paginas-web/diseno-web/mobile-first-la-nueva-tendencia-del-diseno-web/)
* [Mobile First - desarrolloweb.com](https://desarrolloweb.com/articulos/mobile-first-responsive.html)
* [Mobile First - ZURB](https://zurb.com/word/mobile-first)
* [Mobile First Is NOT Mobile Only - Nielsen Norman Group](https://www.nngroup.com/articles/mobile-first-not-mobile-only/)

***
