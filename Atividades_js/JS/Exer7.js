function ok(){
   
    var palavra =  prompt('Escreva uma palavra');
    palavra.toLocaleUpperCase ();
    alert("Palavra: "+ palavra+" \nInvertida:" + palavra.split('').reverse().join(''));
   
  

}