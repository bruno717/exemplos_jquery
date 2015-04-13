$(document).ready(function(){


	$("span").click(function(){

		//alert($("img").attr("src"));
		//$("img").attr("src", "img/Desert.jpg").attr("title", "Deserto");

		//Alterar attr da forma json
		//$("img").attr({src:"img/Desert.jpg",title:"Deserto"});

		//$("img").removeAttr("src").removeAttr("alt").removeAttr("title");

		//alert($("img").hasClass("destaque"));
		//$("img").addClass("destaque");
		//alert($("img").hasClass("destaque"));

		$("img").toggleClass("destaque");
	});
});