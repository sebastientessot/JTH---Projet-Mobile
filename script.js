var menuIsVisible = false;
var recipesList = document.getElementsByClassName("recipe");

function goToMenu(event){
	if(menuIsVisible == false){
		document.body.style.overflowY = "hidden";
		document.getElementById("content").style.left = "85%";
		menuIsVisible = true;
		
		for(var i =0 ; i < recipesList.length; i++){
			recipesList[i].removeEventListener("click", goToPage, false);
			recipesList[i].removeEventListener("touchstart", goToPage, false);
		}
	}
	event.preventDefault();
}

function backToContent(event){
	if(menuIsVisible){
		document.body.style.overflowY = "scroll";
		document.getElementById("content").style.left = "0";
		
		event.preventDefault();
		
		setTimeout(subscribe, 200);
		menuIsVisible = false;
	}
	event.preventDefault();
}

function goToCocktail(event){
	window.location = "cocktail.html";
	event.preventDefault();
}

function goToAppetizer(event){
	window.location = "appetizer.html";
	event.preventDefault();
}

function goToEntree(event){
	window.location = "entree.html";
	event.preventDefault();
}

function goToDessert(event){
	window.location = "dessert.html";
	event.preventDefault();
}

function goToHome(event){
	window.location = "index.html";
	event.preventDefault();
}


document.getElementById("content").addEventListener("mousedown", backToContent ,false);
document.getElementById("content").addEventListener("touchstart", backToContent ,false);

document.getElementById("cocktail").addEventListener("click", goToCocktail ,false);
document.getElementById("cocktail").addEventListener("touch", goToCocktail ,false);

document.getElementById("appetizer").addEventListener("click", goToAppetizer ,false);
document.getElementById("appetizer").addEventListener("touch", goToAppetizer ,false);

document.getElementById("entree").addEventListener("click", goToEntree ,false);
document.getElementById("entree").addEventListener("touch", goToEntree ,false);

document.getElementById("dessert").addEventListener("click", goToDessert ,false);
document.getElementById("dessert").addEventListener("touch", goToDessert ,false);

document.getElementById("home").addEventListener("click", goToHome ,false);
document.getElementById("home").addEventListener("touch", goToHome ,false);