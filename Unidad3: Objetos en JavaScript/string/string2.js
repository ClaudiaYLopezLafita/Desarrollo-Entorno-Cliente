/**
 * Ejercicio 2 String
 * @author Claudia Y. Lopez Lafita
 * 
 * Crea un programa que pida al usuario una propuesta de contraseña y  compruebe si cumple con los siguientes requisitos.

    Tiene entre 8 y 16 caracteres.
    Tiene una letra mayúscula. -- [A-Z]{1}
    Tiene una letra minúscula. -- [a-z]{1}
    Tiene un número. -- \d{1}
    Tiene uno de los siguientes valores: guión alto, guión bajo, arroba, 
    almohadilla, dólar, tanto por ciento o ampersand. -- \w

Si cumple con todos los requisitos se considera una contraseña segura, 
de lo  contrario mostrará que es una contraseña no segura.
*/


var password = prompt('Introduce una posible contraseña: ');

/**
 * Validacion de contraseña con las caracteristicas indicadas
 * 
 * @param {String} password 
 * @returns boolean true si es cumple con las condiciones.
 */
function isValidPassword(password){

    if(password.length>=8 && password.length<=16){

        let mayuscula = false;
        let minuscula = false;
        let digito = false;
        let caracter = false;
        
        for (let x = 0; x < password.length; x++) {
            
            // comprobar que un caracter es letra mayuscula
            if (password[x].match(/^[A-Z]$/)){
               mayuscula=true;
            } 

            // comprobar que un caracter es letra minuscula
            if(password[x].match(/^[a-z]$/)){
               minuscula=true;
            }

            // comprobar que un caracter es un digito
            if(password[x].match(/^\d$/)){
                digito = true;
            }

            // comprobar que un caracter es un caracter especial
            if(password[x].match(/^\w$/)){
                caracter=true;
            }
            
        }

        if(mayuscula && minuscula && digito && caracter){
            return true;
        } 

    } else{
        return false;
    }

};

// salida de datos
isValidPassword(password) ? alert(`Contraseña ${password} SEGURA`) : alert(`Contraseña ${password} NO SEGURA`);