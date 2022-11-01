/**
 * Ejerciocio: Objetos
 * 
 * @author Claudia Y Lopez Lafita
 * 
*/

// PRIMERA PARTE

/**
 * Define un constructor objeto, y crear objetos del tipo construido.
 */        
function Disco() {

    // propiedades del ojeto
    this.name = "";
    this.singer = "";
    this.year = "";
    this.type = "";
    this.location = 0;
    this.borrowed = false;

    // funciones del objeto

    //completar propiedades
    this.addPropiedades = function addPropiedades(
        name, singer,
        year, type,
        location
    ){
        this.name = name;
        this.singer = singer;
        this.year = year;
        this.location = location;
        // definicion de array con los tipos
        let typeDisc = ['rock', 'pop', 'punk' , 'indie'];
        //condicional para determina si una matriz incluye un determinado valor entre sus entradas
        if (typeDisc.includes(type)){
            this.type = type;
        }
    }

    this.changeLocation = function changeLocation(locat){
        this.location = locat;
    }

    this.chageState = function chageState(valor){
        this.borrowed = valor;
    }

    this.showInfo = function showInfo(){
        let disco =
            "Nombre: " +
            this.name +
            ", cantante: " +
            this.singer +
            ", año: " +
            this.year +
            ", tipo: " +
            this.type +
            ", localización: " +
            this.location +
            ", prestado: " +
            this.borrowed +
            '\n';
        return disco;
    }
}


