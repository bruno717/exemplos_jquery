$(document).ready(function(){


	$("span").click(function(){

		var img = $("<img/>", {
			src:"img/Desert.jpg",
		    title:"Deserto",
		    click:function(){alert("Isto é um Deserto");}
	});

		var ul = $("<ul/>").append($("<li/>").append("Programador de Interface WEB"));

		$("body").append(ul).append(img);
	});
});