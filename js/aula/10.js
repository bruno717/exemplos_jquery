$(document).ready(function(){


	$("span").click(function(){

		//alert($("p").html());
		//$("p").html("<h1>Conheça o Brasil</h1>");

		//$("div").html("<h1>Conheça o Brasil</h1>");

		//$("div").text($("p").html());

		//$("p").html($("textarea").val());

		$("div").replaceWith($("textarea").val());
	});
});