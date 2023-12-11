

function mostrar (){

    let num = parseInt (document.getElementById("tabuada").value);

    for (let i=1; i<=10; i++){
        let resultado = num* i;

        let para = document.createElement ("p");
        let node = document.createTextNode (num + "x" + i + "="+ resultado);
        para.appendChild(node);
        let element = document.getElementById ("resposta");
        element.appendChild(para);
    }

}