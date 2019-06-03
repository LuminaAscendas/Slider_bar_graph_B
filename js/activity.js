var begin_entered = false;
var userAgent = navigator.userAgent || navigator.vendor || window.opera;
(function(app) {

    $(document).ready(function(){
        $(".topContent").hide();/*SB*/
		$('.imageDiv').css({'background':'url(images/7-14_slide1.png)','background-repeat':'no-repeat'});
		$('#img1').css('opacity','1');
		if(!begin_entered){			
			$('#begin_btn').attr("aria-label","Begin");
			set_tab();
			$('#focus_gaurd_1').on('focus', function() {
				$('.biganImg').focus();
			});		
			$('#focus_gaurd_2').on('focus', function() {
				$('.biganImg').focus();
			});
			$(".biganImg").hover(function(event) {
				$('.biganImg').attr("title","Age structures of Ethiopia, the United States, and Italy");
				$(this).focus(function(){
					$('.biganImg').removeAttr("title");
				});
			},function(event) {
				$('.biganImg').removeAttr("title");
			});
			if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
				$('a').remove();
				$('#direction_text').attr('role','text').attr('aria-label',data.directText_AriaLable);
			}
		}
        $(function(){
            $( "#slider" ).slider({
              orientation: "vertical",
              range: "max",
              min: 1,
              max: 21,
              value:1,
              step:0.01,
              slide: function( event, ui ) {
				//console.log("ui.value",ui.value)
				var includeTop = event.keyCode != $.ui.keyCode.TOP;
				var includeDown = event.keyCode != $.ui.keyCode.DOWN;
				console.log(ui.value);
				//if(includeTop&&includeDown){
					displayImage(ui.value);
				//}
              },
              stop: function( event, ui ) {
                  adjustSlider(ui.value);
              }
            });
            $(".beginBtn").bind("click",fnBegin);
        });
        setTimeout(function(){
			$('.ui-slider-handle').addClass('customPlayhead').addClass('tabindex');
			$('.ui-slider,.ui-slider-range').addClass('sliderRange');
			$('.ui-slider-handle').bind('keyup mouseup',showTextFn);
			
			// $('.customPlayhead').bind('mousedownmouseenter',mousedown)
			// $('.customPlayhead').bind('mouseup mouseleave',mouseup)
        },100)

        var isAndroid = /(android)/i.test(navigator.userAgent);
        if (isAndroid) {
            $('div').css('outline', 'none');
        }
        $(document).bind("keydown mousedown",enable_scorm);
		document.body.onkeyup = function(e){
			if(e.keyCode == 32 || e.keyCode == 13){
				e.preventDefault();
				$('#'+document.activeElement.id).trigger('click');
			}
		}
    });
	window.onresize = function(){
		resizeApp(); 
	}
    function fnBegin(){
		begin_entered = true;
        $(".beginPage").remove();
        $(".loadDiv").remove();
		$(".mainConatiner").css({"width":"766px","height":"870px"});
		$("#focus_gaurd_3").show();
		$("#textContainer").show();
        $("#textContainer").css({"opacity":"1"});
        $(".topContent").show();
        $(".slider").show();
        $("#reset_btn").show();
		$("#focus_gaurd_4").show();
		setTimeout(function(){
			resizeApp(); 
			setTabindex(0);
		},100);
		$('#focus_gaurd_3').on('focus', function() {			
			$('#directionId').blur();
			$('#directionId').focus();
		});		
		$('#focus_gaurd_4').on('focus', function() {
			$('#directionId').focus();
		});
		$(".imgC").hover(function(event) {
			$('.imgC').attr("title","Age structures of Ethiopia, the United States, and Italy");
			$(this).focus(function(){
				$('.imgC').removeAttr("title");
			});
		},function(event) {
			$('.imgC').removeAttr("title");
		});
		$('#reset_btn').off('click').on('click',pageReload);
    }
	var pageReload = function(){
		location.reload();
	}
    function showTextFn(e){
		   console.log('key:'+e.keyCode);
		if(e.type=="keyup" && e.keyCode !=13){
            return  true;
        }
        var sliderVal = $( "#slider" ).slider( "value" );
        if (sliderVal>=1 && sliderVal<=21) {
            sliderVal = sliderVal+1;
        }
        if (sliderVal > 21) {
            sliderVal = 1;
            $( "#slider" ).slider("value",Math.round(sliderVal));
           
            displayImage(sliderVal)

        }else
        {
            $( "#slider" ).slider("value",Math.round(sliderVal));
            displayImage(sliderVal)
        }
    }

    function enable_scorm(event){

        $(this).addClass("ontab");
        if(event.type=="mousedown"){

            $(".tabindex").blur();
            $(".tabindex").removeClass("ontab");
        }
        if(event.keyCode==9){

            $(".tabindex").addClass("ontab");
        } 
		console.log(document.activeElement);
		//var actElemt = document.activeElement;
		var sliderVal = $( "#slider" ).slider( "value" );
		console.log(event.keyCode);
		if(event.keyCode==38){
			if (sliderVal>=1 && sliderVal<=20) {
				sliderVal = sliderVal+1;
				adjustSlider(sliderVal);
			}
        }else if(event.keyCode==40){
			console.log(event.keyCode);
			if(sliderVal >= 2 && sliderVal <= 21){
				sliderVal = sliderVal-1;
				adjustSlider(sliderVal);
			}
		}
    }
    function adjustSlider(val){
        $( "#slider" ).slider("value",Math.round(val));
        displayImg(Math.round(val));
    }
    function displayImage(val){
        displayImg(val);
    }
    String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
    }
    function displayImg(val){
        var roundVal = Number(String(val).split(".")[0]);
        var decimalAfterVal = Number(String(val).split(".")[1]);
        var nxtImg = -1;
        var decimalFirstVal = Number(String(val).replaceAt(0, "0"));
        if (decimalFirstVal+'' != 'undefined' && ! isNaN(decimalFirstVal)){         
            nxtImg = roundVal + .5;//if img .11 else 1
        }else{
            decimalFirstVal = 0;
        }

		if(decimalFirstVal ==1){
            decimalFirstVal = 0;
        }else if(decimalFirstVal >1){
            decimalFirstVal = decimalFirstVal - 1;
        }
        if (nxtImg != -1){
            var inc = decimalFirstVal;
            var dec = 100-decimalFirstVal;
           // console.log("jj  ",nxtImg-2)
            $('.textDiv').html(data[0].description[nxtImg-1.5]); //for text slide
			$('.textDiv').attr('role','text'); 
			var textSetTime = setTimeout(function(){			
				$('.textDiv').attr('role','none'); 
				$('.textDiv').attr('aria-label',$('.textDiv').text()); 
			},100);
            
            $(".imgC").css({'-ms-filter':'"progid:DXImageTransform.Microsoft.Alpha(Opacity='+0+')"', 
            'filter': 'alpha(opacity='+0+')',
            '-moz-opacity':(0/100),
            '-khtml-opacity': (0/100),
           'opacity': (0/100)});

            $("#img"+roundVal).css({'-ms-filter':'"progid:DXImageTransform.Microsoft.Alpha(Opacity='+dec+')"', 
            'filter': 'alpha(opacity='+dec+')',
            '-moz-opacity':(dec/100),
            '-khtml-opacity': (dec/100),
           'opacity': (dec/100)});

            $("#img"+nxtImg).css({'-ms-filter':'"progid:DXImageTransform.Microsoft.Alpha(Opacity='+inc+')"', 
            'filter': 'alpha(opacity='+inc+')',
            '-moz-opacity':(inc),
            '-khtml-opacity': (inc),
           'opacity': (inc)});
        }
		setTabindex(nxtImg-1.5);
		resizeApp(); 
    }

	var set_tab = function(){
		$('.tab_index').removeAttr('tabindex').removeClass('tab_index');
		if(!begin_entered){
			$('#focus_gaurd_1').addClass('tab_index');
			$('.biganImg').addClass('tab_index');
			$('#begin_btn').addClass('tab_index');
			$('#focus_gaurd_2').addClass('tab_index');
			$('.tab_index').each(function( index ){		
				$('.tab_index').attr('tabindex',0);
			});
		}
	}
	var setTabindex = function(a){
		$('.tab_index').removeAttr('tabindex').removeClass('tab_index');
		if(begin_entered){
			$('#focus_gaurd_3').addClass('tab_index');
			$('#directionId').addClass('tab_index');
			var contentCheck = $('.textDiv').text();
			if(contentCheck == ''){
				$('.textDiv').removeClass('tab_index');
			}else{
				$('.textDiv').addClass('tab_index');
			}
			$('#img'+(a+1)).addClass('tab_index');
			$('.ui-slider-handle').addClass('tab_index');
			$('#reset_btn').addClass('tab_index');
			$('#focus_gaurd_4').addClass('tab_index');
			$('.tab_index').each(function( index ){		
				$('.tab_index').attr('tabindex',0);
			});
		}
	}
	
})(player = player || {})
var player