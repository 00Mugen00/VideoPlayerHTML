var myVideo,play,bar,progress,max;
max=400;
function initialize(){
	myVideo=document.getElementById("myVideo");
	play=document.getElementById("play");
	bar=document.getElementById("bar");
	progress=document.getElementById("progress");
	play.addEventListener("click",clicking,false);
	bar.addEventListener("click",forwarding,false);
	
}

function clicking(){
	if(myVideo.paused==false){
		myVideo.pause();
		play.innerHTML="Play";
	}else{
		play.innerHTML="Pause";
		myVideo.play();
		bucle=setInterval(state,20);
	}
}

function state(){
	var total=parseInt(myVideo.currentTime*max/myVideo.duration);
	progress.style.width=total+"px";
}

function forwarding(position){
	if((myVideo.paused==false)&&(myVideo.ended==false)){
		var ratonX=position.pageX-bar.offsetLeft;
		var nuevoTiempo=(ratonX*myVideo.duration)/max;
		myVideo.currentTime=nuevoTiempo;
		progress.style.width=ratonX+"px";
	}
}


window.addEventListener("load",initialize,false);
