function notas(){

var cemm = 0;
var cinquenta = 0;
var dezz = 0;
var saque = document.getElementById("Saque").value;

  
   if(saque >= 100) {
    cemm = Math.floor(saque /100);
    console.log(cemm);
    var resto  = saque % 100;
    console.log(resto);
   } else if(resto >= 50 && resto <100){
    cinquenta = Math.floor(resto /50);
    console.log(cinquenta);
    var resto2 = saque % 50;
    console.log(resto2);

   }else if(saque >= 10 && saque < 50){
    dezz = Math.floor(resto2 /10);
    console.log(dezz);
    var resto3= saque % 10;
    console.log(resto3);
  
   } else{
    console.log("fim")
   }

   console.log(cemm);
   console.log(cinquenta);
   console.log(dezz);
   document.getElementById("cem").innerHTML = "Notas de R$ 100: " + cemm;
   document.getElementById("cin").innerHTML = "Notas de R$ 50: " + cinquenta;
   document.getElementById("dez").innerHTML = "Notas de R$ 10: " + dezz;

}
