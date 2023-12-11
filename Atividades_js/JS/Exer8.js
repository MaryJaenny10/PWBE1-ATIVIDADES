function verif (){
    var senha = document.getElementById("senha").value;
    if (senha == ""){
        alert ("Por favor escrever a senha ");
        console.log (senha);
    }else if ( !/[a-z]/.test(senha )){
       console.log ('erro');

    }else if (!/[A-Z]/.test (senha)) {
        console.log ('erro');
    }else if (senha.length <8 && senha.length >=15){
        console.log ('erro');
    }else if  (senha.length >8 && senha.length <=15){
        console.log ('erro')
    }else {
        false;
    }

    

    
}