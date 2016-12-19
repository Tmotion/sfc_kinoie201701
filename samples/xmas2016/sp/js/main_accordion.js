$(function(){
	
$(".accordion p").click(function(){
    $(this).next("ul").slideToggle();
    $(this).toggleClass("open");

});	

$(".close").click(function(){
	$("ul li ul li").slideUp();
});


}); 