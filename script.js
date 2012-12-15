(function($){
	var menuIsVisible = false;
	
	function goToMenu(){
		if(menuIsVisible == false){
			document.body.style.overflowY = "hidden";
			$("#content").css("left", "85%");
			
			setTimeout(function(){menuIsVisible = true}, 200);
			
			$(".recipe").unbind('click');
			$(".recipe").unbind('tap');
			$("#menuButton").unbind('click');
			$("#menuButton").unbind('tap');
		}
	}
	
	function backToContent(){
		if(menuIsVisible){
			document.body.style.overflowY = "scroll";
			$("#content").css("left", "0");
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
	
	
	$("#content").bind({
		click: function(){backToContent()},
		tap: function(){backToContent()}
	});
	
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
	
	function subscribe(){
			$(".recipe").bind({
				click: function(){
					if($("#content").css("left") == "0px" || $("#content").css("left") == ""){
					window.location = "recipe"+$(this).attr('id')+".html";
		}
				},
				tap: function(){
					if($("#content").css("left") == "0px" || $("#content").css("left") == ""){
					window.location = "recipe"+$(this).attr('id')+".html";
		}
				}
			});
		
		$("#menuButton").bind({
			click: function(){
				goToMenu();
				event.preventDefault();
			},
			tap: function(){
				goToMenu();
				event.preventDefault();
			}
		});
	}
		
	
	subscribe();

})(jQuery);