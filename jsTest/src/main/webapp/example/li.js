window.addEventListener("load" , function(){
	
	var content = document.querySelector(".content");
	var img = content.querySelector(".img1");
	var btn = content.querySelector(".btn1");
	
	btn.onclick = function(){
		img.src = "../images/2.jpg"
		
		 
	};
	
	});