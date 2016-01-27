function contaIMC() {	
	var formulario = document.getElementById("formulario");
	var kilos = Number(formulario.kilos.value);
	var altura = Number(formulario.metros.value);

	if(kilos <= 0 || kilos > 200){
		saida("Peso informado inválido");
		return 0;
	}else if(altura <= 0 || altura > 3){
		saida("Altura informada inválido");
		return 0;
	}else{
		imc = calcularIMC(kilos, altura);
		nivelIMC = calcularNivelPeso(imc);
		saida(imc.toFixed(2) + " - " + nivelIMC);
	}
}

function saida(impresao){
	document.getElementById("imc").innerHTML = impresao;
}

function calcularIMC(kilos, altura){
	return kilos / (altura * altura);
}

function calcularNivelPeso(imc){
	var resultado;	
	if(imc < 20)
		resultado = "Abaixo do peso";
	else if(imc >= 20 && imc < 25)
		resultado = "Peso Ideal";
	else if(imc >= 25 && imc < 30)
		resultado = "Sobrepeso";
	else if(imc >= 30 && imc < 35)
		resultado = "Obsidade moderada";
	else if(imc >= 35 && imc < 40)
		resultado = "Obsidade Mórbida";
	else
		resultado = "Super Obsidade";
	return resultado;
}