var menuIsVisible = false;
var recipesList = document.getElementsByClassName("recipe");

function goToMenu(event){
	if(menuIsVisible == false){
		document.getElementById("content").style.left = "85%";
		document.body.style.overflowY = "hidden";
		menuIsVisible = true;
		
		for(var i =0 ; i < recipesList.length; i++){
			recipesList[i].removeEventListener("click", goToPage, false);
			recipesList[i].removeEventListener("touch", goToPage, false);
		}
	}
	event.preventDefault();
}

function backToContent(event){
	if(menuIsVisible){
		document.getElementById("content").style.left = "0";
		document.body.style.overflowY = "visible";
		
		event.preventDefault();
		
		subscribe();
		menuIsVisible = false;
	}
	event.preventDefault();
}


document.getElementById("content").addEventListener("mousedown", backToContent ,false);
document.getElementById("content").addEventListener("touchstart", backToContent ,false);