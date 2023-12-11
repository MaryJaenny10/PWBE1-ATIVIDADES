function par_impar (){
   var num = document.getElementById ("numero").value;
   var resto = num%2;
   if (resto==0){
   final = (num +"é par ");
   console.log(final);
   }else{
    final =(num +"é impar");
    console.log(final);
   }
   document.getElementById("nume").innerHTML = "" + final;
}