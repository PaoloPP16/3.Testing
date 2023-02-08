
const Objeto1 = {
    cosas : 'hacer1',
    leer : 'hacer2',
    pronunciar:{
        locandro: {
            loco: 'Peru',
            medida: 10  ,
        },
        fabricacion : {
        pais : 'China'
        }
    }
} 

const {cosas , leer , pronunciar,pronunciar:{fabricacion}}=Objeto1;
console.log (pronunciar)



//Destructuring con Arreglos 

const dias = [1,2,3];

const [ , ,dia3] = dias;

console.log(dia3)

//Destructuring con Objetos

const persona = {
    nombre: 'Paolo',
    apellido: 'Perez',
    edad: 20,
    caracteristica:{
        altura: 1.85,
        peso: 70
    }
}

const {nombre, caracteristica, caracteristica:{altura}} = persona;

console.log(caracteristica)

//hoisting  

function nombreCompleto(nombre){
    console.log('El nombre completo es' + nombre);
}

nombreCompleto('Paolo Puma');

//Spread Operator



arr = ['perro', 'leon', 'chancho']

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

const resutlado = arr.filter (value => value.length > 3);

console.log(resutlado)

const myArr = [{ name: 'mario', age: 20}, 
{ name: 'mario2', age: 20}]


//console.log(myArr.filter((val) => val.age === 23 ))

//console.log(myArr.find((v) => v.age === 20 ))

//console.log(myArr.map((val) => ({name: val.name, age: val.age + 1})))


// filtrar todos los elemtnos que tengan  id 7
// hacer find a todos elementos   "address": {
//       "street": "Norberto Crossing",
// map al arreglo sumar 1 al id


//console.log(myArray.filter((val) => (val.id === 7)))

// console.log(myArr.find((val) => val.address.street === "Norberto Crossing" ))

 console.log(myArray.map((val) => ({...val, id : val.id + 1})))

 console.log(myArray)