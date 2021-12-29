window.addEventListener("load" , function(){
	
	var content = document.getElementById("#content");
	var box = content.querySelector(".box");
	var btn1 = content.querySelector(".btn1");
	var front = content.querySelector(".front");
	
	btn1.onclick = function(){
		var con1 = box.value;
		var con2 = document.createTextNode(con1);
		front.appendChild(con2);
		
		
		
	};
	
	
	
	
	
	});
	