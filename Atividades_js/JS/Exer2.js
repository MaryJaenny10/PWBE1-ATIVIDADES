function botao(){
    var nome=prompt("Digite seu nome");
    var email=prompt("Digite seu email");
    var novali =  document.createElement ('li');
    novali.innerHTML ="Nome: " +nome + "Email "+ email;
    var element = document.getElementById ('listctt');
    element.appendChild (novali);
}

