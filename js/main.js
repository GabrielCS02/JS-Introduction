

function clicou(){
   document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!!</b>";
  // console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
   window.open("https://bongo.cat/");
   // window.location.href = "https://bongo.cat/";
}

function trocar(elemento){
  //  document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!!";
    elemento.innerHTML = "Obrigado por passar o mouse";
   // alert("Obrigado por passar o mouse!!");
}

function voltar(elemento){
    // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!"; 
    elemento.innerHTML = "Passe o mouse aqui!";
}

function load(){
    alert("Pai é gênio!")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}
/*
function soma(n1,n2){
    return n1 +n2;
}
/*
function validaIdade(idade){
    var validar;
    if(idade >=18 ){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Digite sua idade");
console.log(validaIdade(idade));

//alert(soma(25,100));
/*
var d = new Date();
alert(d.getHours());
alert(d.getDay());
alert(d.getMonth()+1);

/*
var count;
for(count=1; count <=5; count++){
    alert(count)
}

/*
var count = 0;
while(count <= 5 ){
    alert(count);
    count++;
}

/*
var idade = prompt("Digite sua idade");
if(idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}

/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);

/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
/*

var lista = ["maça", "pera", "laranja"];
lista.push("uva");
//lista.pop();
console.log(lista[0]);
console.log(lista.toString());
console.log(lista.join(" | "))

/*
var nome = "Gabriel Costa";
var n1 = 5;
var n2 = 15;
var frase = "Japão é o melhor time do mundo";
alert(nome + " tem " + idade + " anos.");
alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.toLowerCase());
alert(frase.replace("Japão", "Brasil"));
*/