window.addEventListener("load" , function(){
	
	var con1 = document.getElementById("content");
	var txtX = con1.querySelector(".txt-x");
	var txtY = document.querySelector(".txt-y");
	var btnAdd = document.querySelector(".btn-add");
	var txtSum = document.querySelector(".txt-sum");
	
	
	
	btnAdd.onclick = function(){
		var x = parseInt(txtX.value);
		var y = parseInt(txtY.value);
			
		txtSum.value = x+y;	
	
		
	}; // 함수  대입 세미 콜론
});


//getElementsByTagName("li") li태그를 가져오는방법
//li의 부모 아이디를 가져와서 var 변수명 = 부모.getElementbttagname("li");
//변수명[0] 으로 배열 순서대로 데이터 입력
