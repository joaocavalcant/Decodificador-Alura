var textInput = document.querySelector("#input-texto");
var outPut = document.querySelector("#output-texto");

function criptografar() {
     var texto = textInput.value; 
     
     var resultCripto = texto.replace(/e/g, "enter") .replace(/i/g, "imes") .replace(/a/g, "ai") .replace(/o/g, "ober") .replace(/u/g, "ufat");

     document.getElementById("output-texto").innerHTML =  resultCripto 
}

function descriptografar() {
    var texto = textInput.value;

    var resultDescripto = texto.replace(/enter/g, "e") .replace(/imes/g, "i") .replace(/ai/g, "a") .replace(/ober/g, "o") .replace(/ufat/g, "u");
    
    document.getElementById("output-texto").innerHTML = resultDescripto  
}

function copiar() {
    var textoCop = document.getElementById("output-texto");

    textoCop.select(); 
    document.execCommand('copy');
    alert("Seu texto foi copiado!")
}