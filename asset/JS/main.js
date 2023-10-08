//CLICK

let conClick =0;
const click = document.querySelector(".btnClick");
const img = document.querySelector(".imgCLICK");
click.addEventListener("click",clickBorde);

function clickBorde(){
    if(conClick == 0){
        conClick++;
        img.classList.add("imgclick");
    }else{
        conClick--;
        img.classList.remove("imgclick");
    }
}

//STICKERS

let cantSti;
const clicSuma = document.querySelector(".btnVeri");
const ok = document.querySelector(".okSti");
let sti1 = document.getElementById("ticker1");
let sti2 = document.getElementById("ticker2");
let sti3 = document.getElementById("ticker3");


clicSuma.addEventListener("click",sumar);

function sumar(){
    

    sti1 = parseInt(sti1.value);
    sti2 = parseInt(sti2.value);
    sti3 = parseInt(sti3.value);
    cantSti = sti1+sti2+sti3;
    
    if(cantSti>10){
        ok.innerHTML ="";
        alert("Cantidad Maxima de Sticker es 10");
    }else{
        ok.innerHTML = "Buena cantidad de Sticker, llevas:"+cantSti;
    }
    console.log(cantSti)
    
}

//PASWORD

let N1 = document.querySelector("#n1");
let N2 = document.querySelector("#n2");
let N3 = document.querySelector("#n3");
let Res = document.querySelector(".resultPas");
const buttonPas = document.querySelector(".btnPas");
buttonPas.addEventListener("click",veriPas)

function veriPas(){

    N1 = parseInt(N1.value);
    N2 = parseInt(N2.value);
    N3 = parseInt(N3.value);

    if(N1 == 9 && N2 == 1 && N3 == 1){
        Res.innerHTML="Password 1 Correcto"
    }else if(N1 == 7 && N2 == 1 && N3 == 4){
        Res.innerHTML="Password 2 Correcto"
    }else{
        Res.innerHTML="Password Incorrecta"
    }
}


 

 