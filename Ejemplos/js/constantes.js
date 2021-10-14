export const pi = Math.PI.toFixed(2)

export let nombre = "Eduard";
let pass = "yijavaquero";
//export default pass; // Esta es la forma correcta de exportar por defecto variables o constantes, no podemos exportarlas al tiempo de declararlas

export const carro = {
  color: "azul",
  tipo: "deportivo",
  f(){
      console.log("Este es el objeto carro")
  }
}

export default function saludar(){
    console.log("Hola Módulos +ES6")
}

export class Saludar {
    constructor(){
        console.log("Hola soy una clase")
    }
}