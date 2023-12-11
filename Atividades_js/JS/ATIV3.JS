function obter (){
    return JSON.parse(localStorage.getItem('numeros')) || [];

}
function salvarDados (lista){
    localStorage.setItem('numeros',JSON.stringify(lista));
}
let listaNumeros = obter();


function mostrar (){

    let num = parseInt (document.getElementById("tabuada").value);

    for (let i=1; i<=10; i++){
        let resultado = num* i;

        let para = document.createElement ("p");
        let node = document.createTextNode (num + "x" + i + "="+ resultado);
        para.appendChild(node);
        let element = document.getElementById ("resposta");
        element.appendChild(para);
        listaNumeros.push ({resultado});
        salvarDados (listaNumeros);
        console.log (resultado);

    }

}
//lendo lista
    let vazia ="";
    for ( i=0; i<listaNumeros.length; i++){
        vazia += "tabuada" + "<br>" + listaNumeros [i].resultado;
    }
    document.getElementById("resposta").innerHTML = vazia;