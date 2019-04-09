export const templatePost =()=>{
    document.getElementById('containersocialnetwork').innerHTML=
                        `
                        <section id="userinformation">
                            <h3>salir</h3> 
                        </section>
                        <section id="userinformation">                            
                            <img src="${firebase.auth().currentUser.photoURL}" id="userphoto" alt="Foto del usuario"/>
                            <h2>${firebase.auth().currentUser.displayName}</h2>                                                                                
                        </section>

                        <button id="post">Publicar</button>  
                        `
}