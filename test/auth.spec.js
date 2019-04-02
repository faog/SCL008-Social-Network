//Test de autentificación firebase
/*TEST DE EJEMPLO*/
import {suma, createAccount } from "./../src/assets/js/auth.js"

describe ("suma", ()=>{
    it ('deberia retornar 4 para la suma de 2 mas 2', ()=>{
        expect(suma(2,2)).toBe(4);
    })

})

describe ("createAccount",()=>{
    it('deberia retornar Debes ingresar un nombre si el usuario deja el input vacío', ()=>{
        expect(createAccount(firstNameNewUser,"").toBe("*Debes ingresar un nombre"));
    })
})