function ref(){
    var ref = document.getElementById ("Referência").value;
    const myArray = ref.split(" ");
    var pri = myArray[2];
    pri = pri.toLocaleUpperCase ();

    var pri2 = myArray [0];
    pri2 = pri2.charAt (0);
   
    var pri3 = myArray [1];
    pri3 = pri3.charAt (0);
    document.getElementById("demo2").innerHTML = " Citação Bibliográfica:" + pri + ","+ pri2 + "."+ pri3;
}
