function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://github.com/alinemoraes2");
    //window.location.href = "https://github.com/alinemoraes2";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse"
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto")
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui"
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";   
}

function load(){
    alert("Página Carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}


/*function soma(n1, n2){
    return n1 + n2;
}*/


/*function validaIdade(idade){
    var validar;
    if (idade >=18){
        validar = true;
    } else{
        validar = false;
    }
    return validar;
}
var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade))*/

//alert(soma(5, 10));




/*var d = new Date();
alert(d.getDay());
alert(d.getHours())*/



/*var count;
for (count = 0; count <= 5; count++){
    alert(count);
};*/



/*var count = 0;
while (count <= 5){
    console.log(count);
    count = count++;
};*/



/*var idade = prompt("Qual sua idade? ");
if (idade >= 18){
    alert("maior de idade");
} else{
    alert("menor de idade");
}*/



/*var frutas = [{nome: "Maça", cor: "Vermelha"}, {nome:"Uva", cor:"Roxa"}]
console.log(frutas);
alert(frutas[1].nome);*/



//var lista = ["Maçã", "Pêra", "Laranja"];
//lista.push("Uva");
//lista.pop();
//console.log(lista[0]);
//console.log(lista.toString());
//console.log(lista.join(" - ")); separa os itens com o objeto desejado




//var nome = "Aline Moraes";
//var idade = 24;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo"
//alert (nome + " tem " + idade + " anos ");
//alert( idade + idade2)
//console.log(nome)
//console.log(idade * idade2)
//console.log(frase.replace("Japão", "Brasil"))
//console.log(frase.toLowerCase())
//alert(frase.replace("Japão", "Brasil"))