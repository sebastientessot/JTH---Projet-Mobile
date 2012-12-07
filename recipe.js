// TODO : Gerer le bug de quand on en coche 2 differents ! 

var checkList  = document.getElementsByClassName("checkButton");

document.getElementById("chrono").style.display = 'none'; 

function checkTheBox(elmt){
	
	if(elmt.style.backgroundImage == ""){
		elmt.setAttribute("style", "background-image: url(\"picture/Check.png\"); background-size: cover;");
		elmt.style.border = "solid 1px green";
		elmt.innerHTML = "";
		startingTheChrono(event.target.id.substr(1, 2), event.target.id.substr(0, 1)); 
	}else{
		elmt.style.backgroundImage = "";
		elmt.innerHTML = "Done";
		elmt.style.border = "solid 1px black";
		stoppingTheChrono(event.target.id.substr(1, 2), event.target.id.substr(0, 1)); 
	}
	
}

var buttonID = null;
var pause = false;  
var afficher = false; 
var hours; 
var min; 
var sec; 

/**
	This function decides if we have to be redirected to the startTheChrono function or not. 
*/
function startingTheChrono(time, id){
	
	// if time == -1 there is not chronometer to start. 
	if(time != -1){ 
		// at the beginning of this function, I want to have the pause variable at false; 
		if (pause == true){
			pause = false; 
		}
		
		// if buttonID is not null, if means a chronometer is already running
		if (buttonID != id ){
			if(buttonID == null){
				buttonID = id;
				afficher = true; 
				startTheChrono(time); 
			}
			else {
				alert("Another Chronometer is already running"); 
			}  
		}
		// if we enter in the "else", it means that buttonID == id, so we want to stop the chronometer 
		/*else {
				
			alert("The time won't be saved");
			pause = true;  
			hours = 0; 
			min = 0; 
			sec = 0; 
	
			buttonID = null; 
			var output = document.getElementById("chronoNumber");
			document.getElementById("chrono").style.display = 'none'; 
			afficher = false; 
		}*/
	}

}

function stoppingTheChrono(time, id){
	if (time !=-1){
		alert("The time won't be saved");
	}
	//alert("The time won't be saved");
	pause = true;  
	hours = 0; 
	min = 0; 
	sec = 0; 

	buttonID = null; 
	var output = document.getElementById("chronoNumber");
	document.getElementById("chrono").style.display = 'none'; 
	afficher = false; 
}

function startTheChrono(time){
var output = document.getElementById("chronoNumber");	
	
	if(output.innerHTML == "FirstButton" && afficher == true) {
		document.getElementById("chrono").style.display = "block"; 
		
		hours = parseInt(time/3600); 
		min = parseInt((time-hours*3600)/60);
		sec = parseInt(time - hours*3600 - min*60); 
	 }
	 else {
	 	hours = hours;
	 	min = min; 
	 	sec = sec -1;
	 }
	 output.innerHTML = hours + "h " + min + "min " + sec + "sec";
	if(hours == 0 && min == 0 && sec == 0 || sec == -1){
		if (hours == 0 && min == 0 && sec == 0){
			output.innerHTML = hours + "h " + min + "min " + sec + "sec";
			alert ("Time finsihed");
			document.getElementById("chrono").style.display = 'none'; 
			buttonID = null; 
		}
		output.innerHTML = "FirstButton"; 
	} 
	else{
		if (sec == 0){
			sec = 60; 
			min = min-1;  
		}
		else if(min == 0){
			if(hours != 0){
				min = 60; 
				hours = hours -1; 
			}

		}
		if (hours == -1){
			hours = 0;
		}
		setTimeout(startTheChrono, 1000); 
	}
}

 
for(var i =0 ; i < checkList.length; i++){
	checkList[i].addEventListener("touch", function (event){
	var test = event.target.id.toString; 
	
	checkTheBox(event.target);
	//	startingTheChrono(event.target.id.substr(1, 2));
	}, false); 	
	checkList[i].addEventListener("click", function (event){checkTheBox(event.target); 
	//	startingTheChrono(event.target.id.substr(1, 2), event.target.id.substr(0, 1)); 
	}, false);
}

function subscribe(){
	
	document.getElementById("menuButton").addEventListener("click", function (event) {goToMenu(event)}, false); 
	document.getElementById("menuButton").addEventListener("touch", function(event){goToMenu(event); event.preventDefault();}, false); 
}

subscribe();