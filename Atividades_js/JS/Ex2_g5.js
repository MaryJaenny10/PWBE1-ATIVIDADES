
function cript () {
    var texto = document.getElementById ("entrada").value.toLowerCase();

    var textocrip = texto 
    .replace (/a/g,"2")// o replace modifica string com alguma coisa ex: ele modificou a letra pelo um numero 
    .replace (/e/g,"4")
    .replace (/i/g,"6")
    .replace (/o/g,"8")
    .replace (/u/g ,"10");
    
    var para = document.createElement ("p"); //criação de uma caixa vazia 
    var node = document.createTextNode(textocrip); // criação do conteudo
    para.appendChild(node); //adicionando o conteudo a caixa
    var element = document.getElementById("pro"); //criando uma ponte para o html
    element.appendChild(para);//aplicando o elemento p com o conteudo 


}
function descr (){
    var textdescr =  document.getElementById ("entrada").value.toLowerCase();
    
    var textodecri = textdescr
    .replace (/2/g,"a")
    .replace (/4/g,"e")
    .replace (/6/g,"i")
    .replace (/8/g,"o")
    .replace (/10/g,"u");
    
    var para = document.createElement ("p"); //criação de uma caixa vazia 
    var node = document.createTextNode(textodecri); // criação do conteudo
    para.appendChild(node); //adicionando o conteudo a caixa
    var element = document.getElementById("pro"); //criando uma ponte para o html
    element.appendChild(para);//aplicando o elemento p com o conteudo 


}
   
