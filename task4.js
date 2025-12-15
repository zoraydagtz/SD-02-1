// ¿Puedes continuar el patrón reemplazando también cada número divisible por 7 con Woof, junto con las otras condiciones?

for(let i=1;i<106;i++){
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