// ¿Puedes pedirle al usuario que ingrese la cantidad de líneas que se generarán, o que genere una línea específica?
const prompt = require("prompt-sync")();
let lineas = Number(prompt("Ingresa el numero de lineas que desees que el juego genere:"));

for(let i=1;i<lineas+1;i++){
  if(i%105==0){
    console.log(`FizzBuzzWoof`);
  }else{
    if(i%15==0){
      console.log(`FizzBuzz`);
    }else{
      if (i%3==0){
      console.log(`Fizz`);
      }
      if(i%5==0){
      console.log(`Buzz`);
      }
      if(i%7==0){
      console.log(`Woof`);
      }
      if(i%3!=0 && i%5!=0 &&  i%7!=0){
      console.log(i);
      } 
    }
  }
}