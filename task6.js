// ¿Puedes asignar los números generados de la secuencia a elementos en una lista o arreglo?

const prompt = require("prompt-sync")();
let lineas = Number(prompt("Ingresa el numero de lineas que desees que el juego genere:"));
const arreglo = [];

for(let i=1;i<lineas+1;i++){
  if(i%105==0){
    console.log(`FizzBuzzWoof`);
    arreglo[i-1]=`FizzBuzzWoof`;
  }else{
    if(i%15==0){
      console.log(`FizzBuzz`);
      arreglo[i-1]=`FizzBuzz`;
    }else{
      if (i%3==0){
      console.log(`Fizz`);
      arreglo[i-1]=`Fizz`;
      }
      if(i%5==0){
      console.log(`Buzz`);
      arreglo[i-1]=`Buzz`;
      }
      if(i%7==0){
      console.log(`Woof`);
      arreglo[i-1]=`Woof`;
      }
      if(i%3!=0 && i%5!=0 &&  i%7!=0){
      console.log(i);
      arreglo[i-1]=`${i}`;
      } 
    }
  }
}
console.log(`${arreglo}`);