
var menuIsVisible = false;
var recipesList = document.getElementsByClassName("recipe");
var checkList  = document.getElementsByClassName("checkButton");

function goToMenu(event){
	if(menuIsVisible == false){
		document.getElementById("content").style.left = "88%";
		document.body.style.overflowY = "hidden";
		menuIsVisible = true;
	}
	event.preventDefault();
}

function backToContent(event){
	if(menuIsVisible){
		document.getElementById("content").style.left = "0";
		document.body.style.overflowY = "visible";
		menuIsVisible = false;	
	}
	event.preventDefault();
}

function goToPage(elmt){
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

function checkTheBox(elmt){
	if(elmt.style.backgroundImage == ""){
		elmt.setAttribute("style", "background-image: url(\"picture/Check.png\"); background-size: cover;");
		elmt.style.border = "solid 1px green";
		elmt.innerHTML = "";
	}else{
		elmt.style.backgroundImage = "";
		elmt.innerHTML = "Done";
		elmt.style.border = "solid 1px black";
	}
}


for(var i =0 ; i < recipesList.length; i++){
	recipesList[i].addEventListener("touch", function (event){goToPage(event.target);event.preventDefault();}, false); 	
	recipesList[i].addEventListener("click", function (event){goToPage(event.target);}, false); 	
}

for(var i =0 ; i < checkList.length; i++){
	checkList[i].addEventListener("touch", function (event){checkTheBox(event.target);event.preventDefault();}, false); 	
	checkList[i].addEventListener("click", function (event){checkTheBox(event.target);}, false); 	
}

document.getElementById("menuButton").addEventListener("click", function (event) {goToMenu(event)}, false); 
document.getElementById("menuButton").addEventListener("touch", function(event){goToMenu(event); event.preventDefault();}, false); 

document.getElementById("content").addEventListener("mousedown", backToContent ,false);
document.getElementById("content").addEventListener("touchstart", backToContent ,false);