$(document).ready(function(){

	// Circunflexo busca por atributo que começa com valor informado
	$("a[href^=h]").css("background", "#CCC");
	// Exclamação busca por atributo que é diferente do valor informado
	$("a[href!=h]").css("background", "#CCC");
	// Cifrão busca por atributo que é igual ao valor informado
	$("a[href$=h]").css("background", "#CCC");
	// Asterisco busca por atributo que contem o valor informado
	$("a[href*=h]").css("background", "#CCC");
	//...
		
});