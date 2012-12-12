var menuIsVisible = false;
var recipesList = document.getElementsByClassName("recipe");

function goToMenu(event){
	if(menuIsVisible == false){
		document.getElementById("content").style.left = "85%";
		document.body.style.overflowY = "hidden";
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
		document.getElementById("content").style.left = "0";
		document.body.style.overflowY = "visible";
		
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


document.getElementById("content").addEventListener("mousedown", backToContent ,false);
document.getElementById("content").addEventListener("touchstart", backToContent ,false);

document.getElementById("cocktail").addEventListener("mousedown", goToCocktail ,false);
document.getElementById("cocktail").addEventListener("touchstart", goToCocktail ,false);

document.getElementById("appetizer").addEventListener("mousedown", goToAppetizer ,false);
document.getElementById("appetizer").addEventListener("touchstart", goToAppetizer ,false);

document.getElementById("entree").addEventListener("mousedown", goToEntree ,false);
document.getElementById("entree").addEventListener("touchstart", goToEntree ,false);

document.getElementById("dessert").addEventListener("mousedown", goToDessert ,false);
document.getElementById("dessert").addEventListener("touchstart", goToDessert ,false);