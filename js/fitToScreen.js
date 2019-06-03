
var cont;
var	cont_1;
var isWebkit = 'webkitRequestAnimationFrame' in window;
var scale = 1;

function resizeApp(){
	if(!begin_entered){
		cont_1 = document.getElementById('beginPageId');
		var winWidth = $("#beginPageId").width();
		var winHeight = $("#beginPageId").height();
		var appWidth = cont_1.offsetWidth;
		var appHeight = cont_1.offsetHeight;	
		console.log(appWidth,appHeight)
		winWidth = window.innerWidth; //retrieve current window width
		winHeight = window.innerHeight;
		if(winWidth-60 < appWidth || winHeight-60 < appHeight) {
			scale = (((winWidth/appWidth)<(winHeight/appHeight))?(winWidth/appWidth):(winHeight/appHeight))-0.01//-0.15; //scaling
        }else {
			scale=1;
        }
		cont_1.style.msTransformOrigin = '0 0';	
		cont_1.style.msTransform = "scale("+scale+","+scale+")";
		cont_1.style.TransformOrigin = '0 0';	
		cont_1.style.Transform = "scale("+scale+")";
		cont_1.style.webkitTransformOrigin = '0 0';
		cont_1.style.webkitTransform = "scale("+scale+")";
		cont_1.style.MozTransformOrigin = '0 0';	
		cont_1.style.MozTransform = "scale("+scale+")";
		$('body').css('height',(bodyheight)+'px');
		$('body').css('background-size','100% '+(bodyheight)+'px');
		$('.mainConatiner').css('height',($("#beginPageId").height()*scale));
		$('.mainConatiner').css('width',$("#beginPageId").width()*scale-0.01);
	}else{
		cont = document.getElementById('responsive_container');
		var winWidth = $(".mainConatiner").width();
		var winHeight = $(".mainConatiner").height();
		var appWidth = cont.offsetWidth;
		var appHeight = cont.offsetHeight;	
		winWidth = window.innerWidth; //retrieve current window width
		winHeight = window.innerHeight; //retrieve current window height
		//console.log(winWidth+'::'+winHeight+':appWidth:'+appWidth+'::'+appHeight)
	  	if(winWidth < appWidth || winHeight < appHeight) {
			scale = (((winWidth/appWidth)<(winHeight/appHeight))?(winWidth/appWidth):(winHeight/appHeight))-0.01//-0.15; //scaling
        }else {
            scale=1;
        }
		cont.style.msTransformOrigin = '0 0';	
		cont.style.msTransform = "scale("+scale+","+scale+")";
		cont.style.TransformOrigin = '0 0';	
		cont.style.Transform = "scale("+scale+")";
		cont.style.webkitTransformOrigin = '0 0';
		cont.style.webkitTransform = "scale("+scale+")";
		cont.style.MozTransformOrigin = '0 0';	
		cont.style.MozTransform = "scale("+scale+")";
		var appWidth = cont.offsetWidth * scale;
		var bodyheight = cont.offsetHeight*scale;
		var bodywidth = cont.offsetWidth*scale;
		var winWidth = window.innerWidth;
		$('body').css('height',(bodyheight)+'px');
		$('body').css('background-size','100% '+(bodyheight)+'px');

		$('#textContainer').css('width',($("#responsive_container").width()*scale-0.01)-1);
		$('.mainConatiner').css('width',$("#responsive_container").width()*scale-0.01);
		
		$('.slider').css({"top":Math.round($("#position_Analyzer").offset().top+2)+"px","left":Math.round($("#position_Analyzer").position().left+15)+"px","height":Math.round($("#position_Analyzer").height()*scale-0.01)+"px"});
		$('.sliderBar').css({"height":Math.round($("#internalDiv_Analyzer").height()*scale-0.01)+"px","top":Math.round($("#internalDiv_Analyzer").position().top)+"px"});
		$('.labels').css({"height":Math.round($("#internalDiv_Analyzer").height()*scale-0.01)+"px","top":Math.round($("#internalDiv_Analyzer").position().top)+"px"});
		$('#slider').css({"height":Math.round($("#internalDiv_Analyzer").height()*scale-0.01)+"px"});		
		var labelHeight = ($("#internalDiv_Analyzer").height()+3)*scale-0.01;
		//console.log(labelHeight,labelHeight/21);
		$('.label').css({"height":(labelHeight/21)+0.5+"px"});
		
		$('#reset_btn').css({'top':(Math.round($("#position_Analyzer").offset().top+2)+($("#responsive_container").height()*scale))+"px"});
	}
}

resizeApp();

