$(document).ready(function(){

	//$("tbody tr:lt(2)").css("background", "#CCC");


$( "#run" ).click(function() {
  $( "thead:animated" ).toggleClass( "colored" );
});
 
function animateIt() {
  $( "#mover" ).slideToggle( "slow", animateIt );
}
 
animateIt();			
});