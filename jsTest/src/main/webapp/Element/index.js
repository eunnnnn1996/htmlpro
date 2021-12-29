window.addEventListener("load" , function(){
	var section = document.querySelector("#section6");
	
	var titleInput = section.querySelector(".title-input");
	var menuListDiv = section.querySelector(".menu-list");
	var addButton = section.querySelector(".add-button");
	var delButton = section.querySelector(".del-button");
	var addButton =section.qu
	
	
	addButton.onclick = function(){
		var title = titleInput.value;
		var txtNode = document.createTextNode(title);
		
		menuListDiv.appendChild(txtNode);
	};
	});