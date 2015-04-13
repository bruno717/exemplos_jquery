$(document).ready(function(){


	$("span").click(function(){

		//$("ul").append("<li>Dentro e na última posição</li>");
		//$("ul").prepend("<li>Dentro e na primeira posição</li>");
		//$("ul").before("<h1>Fora e antes do elemento</hi>");
		//$("ul").after("<h1>Dentro e depois do elemento</hi>");
		//$("ul").wrap("<p></p>");
		$("ul").append($("li").clone());

	});
});