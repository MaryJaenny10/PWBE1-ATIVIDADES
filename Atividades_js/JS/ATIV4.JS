function obter (){
    return JSON.parse (localStorage.getItem('parcela')) || [];
}
function salvarDados (lista){
    localStorage.setItem('parcela', JSON.stringify(lista));
}
let listaParcela = obter ();

function pagamento (){
    let preco = parseFloat (document.getElementById ("parcela").value);

    for (let i = 1; i<= 10; i++){
        const parce = (preco/i);

        const par = parce.toFixed(2);

        let para = document.createElement ("p");
        let node = document.createTextNode (i + "x" + "de" + "R$"+ par);
        para.appendChild(node);
        let element = document.getElementById ("pro");
        element.appendChild(para);
        listaParcela.push ({par});
        salvarDados (listaParcela);
        console.log (par);
    }
}
//lendo lista 
    let vazia ="";
    for (i=0; i<listaParcela.length; i++){
        vazia += "Parcelas " + listaParcela [i].par + "<br>";
    }
    document.getElementById("pro").innerHTML = vazia;