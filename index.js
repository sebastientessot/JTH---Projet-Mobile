(function($){

function goToPage(event){
	if(document.getElementById("content").style.left == "0px" || document.getElementById("content").style.left == ""){
		var elmt = event.target;
		while(elmt.getAttribute('class') != "recipe"){
			elmt = elmt.parentNode;
		}
		if(elmt.getAttribute("id") == 1 ){
			window.location = "recipe1.html";
		}
		if(elmt.getAttribute("id") == 2 ){
			window.location = "recipe2.html";
		}
		if(elmt.getAttribute("id") == 3 ){
			window.location = "recipe3.html";
		}
		if(elmt.getAttribute("id") == 4 ){
			window.location = "recipe4.html";
		}
		if(elmt.getAttribute("id") == 5 ){
			window.location = "recipe5.html";
		}
	}
	event.preventDefault();
}

function subscribe(){
	for(var i =0 ; i < recipesList.length; i++){
		recipesList[i].addEventListener("touchend", goToPage, false); 	
		recipesList[i].addEventListener("click", goToPage, false); 	
	}
	
	$("#menuButton").bind({
		click: function(){
			goToMenu();
		},
		tap: function(){
			goToMenu();
		}
	});
}
	

subscribe();

})(jQuery);
