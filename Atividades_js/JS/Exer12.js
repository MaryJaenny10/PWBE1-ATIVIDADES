function categoria(){
    let nome = document.getElementById("natacao").value;
    document.getElementById("saida").innerHTML= nome + "<br>" ;
    retornarTracos();
    let idade = document.getElementById("idade").value;
    if(idade > 1 && idade <= 12){
        document.getElementById("saida").innerHTML+="<br>Categoria: Infantil";
    }else
    if(idade = 13 && idade <= 18){
        document.getElementById("saida").innerHTML+="<br>Categoria: Juvenil";
    }else
    if(idade = 19 && idade <= 59){
        document.getElementById("saida").innerHTML+="<br>Categoria: Adulto";
    }else{
        document.getElementById("saida").innerHTML+="<br>ERRO";
    }
   
}
function retornarTracos(){
    let n = document.getElementById("natacao").value;
    n = n.split(' ');
    for(let i=0; i <n.length; i++){
        let letras = n[i].split('');
        let tracos ="";
        tracos = tracos + " " + "-".repeat(letras.length);
        document.getElementById("saida").innerHTML += tracos;
    }
}