function veri (){
    var pesoKg = document.getElementById("peso").value; // adicionando o valor em kg
    var  preçoprato = document.getElementById ("prato").value; // adicionando o preço do prato

    var pre = pesoKg * preçoprato;
    var para = document.createElement ("p"); //criação de uma caixa vazia 
    var node = document.createTextNode("o preço final é: "+ pre); // criação do conteudo
    para.appendChild(node); //adicionando o conteudo a caixa
    var element = document.getElementById("pro"); //criando uma ponte para o html
    element.appendChild(para);//aplicando o elemento p com o conteudo 


   
    
}