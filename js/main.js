window.onload = function(){
	var img = document.getElementById("figure-0");
	img.style.display = "block";
	switchImg();
}

function switchImg(){
	var ctrs = document.getElementsByClassName("ctrl-i");
	var len = ctrs.length;
	for(let i = 0;i < len; i ++){
		ctrs[i].onclick = function(){
			showImg(i);
		}
	}
}

function showImg(index){
	for(let j = 0;j < 7;j ++){
		var figs = document.getElementById("figure" + "-" + j);
		if(j == index){
			figs.style.display = "block";
		}
		else{
			figs.style.display = "none";
		}
	}
}