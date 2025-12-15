// ¿Puedes también reemplazar cada número divisible por 5 con Buzz, y cada número que cumpla ambas condiciones con FizzBuzz?


for(let i=1;i<106;i++){
  if(i%15==0){
    console.log(`FizzBuzz`);
  }else{
  if (i%3==0){
    console.log(`Fizz`);
  }
  if(i%5==0){
    console.log(`Buzz`);}
  if(i%3!=0 && i%5!=0){
    console.log(i);}
  }
}
