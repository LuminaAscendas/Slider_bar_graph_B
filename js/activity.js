var begin_entered = false;
var userAgent = navigator.userAgent || navigator.vendor || window.opera;
(function(app) {

    $(document).ready(function(){
        $(".topContent").hide();/*SB*/
		//setTimeout(function(){
			
			$('.imageDiv').css({'background':'url(images/7-14_slide1.png)','background-repeat':'no-repeat'});
			$('#img1').css('opacity','1');
			
		//}, 500);
		
		
		var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
			if(isSafari){
			   $('#heading_text').attr('role','text')
			}
		
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
				  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
				  if(isSafari){
					   $('#ui_handler').blur();
					   $('#ui_handler').off('click').on('click',function(){
							$('#directionId').focus();
							setTimeout(function(){
								$('#ui_handler').focus();
							},10)
						});
					  setTimeout(function(){
						$('#ui_handler').trigger('click')
					  },20)
				  }
				  
              }
			    			  
			  
            });
            $(".beginBtn").bind("click",fnBegin);
        });
        setTimeout(function(){
			$('.ui-slider-handle').addClass('customPlayhead tabindex')//.addClass('');
			$('.ui-slider,.ui-slider-range').addClass('sliderRange');
			//$('.ui-slider-handle').bind('keyup mouseup',showTextFn);
			
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
//				alert();
				$('#'+document.activeElement.id).trigger('click');
			}
		}

//	alert()
//      return false;
//});

    });
	

	
	window.onresize = function(){
		resizeApp(); 
	}
//		if( /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent) ) {		
////			alert()
//		$(document).on('touchend', '.ui-slider-handle', function(event){
////			alert()
////			$('.ui-slider-handle').css('border',' !important');
//			
//////			if ($(".ui-slider-handle").is(":focus")) {
////				//alert()
////				if(event.handled === false) return
////				event.stopPropagation();
////				event.preventDefault();
////				event.handled = true;
////				$("#slider").slider("option", "values", [value[flag_touch]]);
//				//var isAndroid = /(android)/i.test(navigator.userAgent);	
//				//if(isAndroid){
////					setTimeout(function(){
//							$('.ui-slider-handle').blur()//.focus();
//						setTimeout(function(){
////							$('.ui-slider-handle').removeAttr('aria-label')//.blur()
//							$('.ui-slider-handle').focus()//.blur()
//						},100)
//						
////						setTimeout(function(){
////							$('.ui-slider-handle').blur()
////						},200)
////					},100)
//				//}
////			
////				flag_touch++
////				if(flag_touch>value.length-1){
////					flag_touch=0
////				}
//////			}
//		});
//	}
		var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
	if(iOS){
		$('#ui_handler').attr('aria-live','assertive')
	}
		  $(document).on('touchend', '.ui-slider-handle', function(event){
////			$('.ui-slider-handle').focus()
			if( /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent) ) {	
//				//aria-live="assertive"
////				$(document).on('click','body',function(){
////					//  $(this) = your current element that clicked.
////					// additional code
////					alert()
////				});
////				$(document).trigger('click')
////				$('.ui-slider-handle').trigger('click')
				
				var isAndroid = /(android)/i.test(navigator.userAgent);
				if(isAndroid){
					$('.ui-slider-handle').blur();
					setTimeout(function(){
						$('.ui-slider-handle').focus();	
					},200)		
				}
				
//				
////					$('#heading_text').trigger('click');
//////					$('.ui-slider-handle').off('click').on('click',function(){
////////						$('.ui-slider-handle').attr('aria-label',' ');
////						$('.ui-slider-handle').focus()//.trigger();
//////					});
//////					$('.ui-slider-handle').trigger('click')
			}	
		});
	
    function fnBegin(){
		begin_entered = true;
        $(".beginPage").remove();
        $(".loadDiv").remove();
		$(".mainConatiner").css({"width":"766px","height":"870px"});
		$("#focus_gaurd_3").show();
		$("#textContainer").show();
        $("#textContainer").css({"opacity":"1"});
//		setTimeout(function(){
        $(".topContent").fadeIn(800)
        $(".slider").fadeIn(800)
        $("#reset_btn").fadeIn(800)
		$("#focus_gaurd_4").fadeIn(800)
//		},100);
//		$('#responsive_container').fadeIn()
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
		
//		if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
////				alert();
//			setTimeout(function(){
//				$('.ui-slider-handle').focus();
//			},100)
////				$('a').remove();
////				$('#direction_text').attr('role','text').attr('aria-label',data.directText_AriaLable);
//			}
		
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

	
	
//	var flag_touch=0;
//	if( /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent) ) {		
//		$(document).on('touchend', '.ui-slider-handle', function(event){
//////			if ($(".ui-slider-handle").is(":focus")) {
////				//alert()
////				if(event.handled === false) return
////				event.stopPropagation();
////				event.preventDefault();
////				event.handled = true;
////				$("#slider").slider("option", "values", [value[flag_touch]]);
//				var isAndroid = /(android)/i.test(navigator.userAgent);	
//				if(isAndroid){
////					setTimeout(function(){
//							$('.ui-slider-handle').blur()//.focus();
//						setTimeout(function(){
////							$('.ui-slider-handle').removeAttr('aria-label')//.blur()
//							$('.ui-slider-handle').focus()//.blur()
//						},100)
//						
////						setTimeout(function(){
////							$('.ui-slider-handle').blur()
////						},200)
////					},100)
//				}
////			
////				flag_touch++
////				if(flag_touch>value.length-1){
////					flag_touch=0
////				}
//////			}
//		});
//	}
	
    function enable_scorm(event){
//		 	$('#ui_handler').off('click').on('click',function(){
//				alert();
//				$('#ui_handler').off('click')
////				return false;
//			});
        $(this).addClass("ontab");
        if(event.type=="mousedown"){
			
            //$(".tabindex").blur();
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
			$('.ui-slider-handle').attr('aria-label',data[0].sliderValue[roundVal-1]); 
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
			$('.ui-slider-handle').addClass('tab_index');
			$('#focus_gaurd_3').addClass('tab_index');
			$('#directionId').addClass('tab_index');
			var contentCheck = $('.textDiv').text();
			if(contentCheck == ''){
				$('.textDiv').removeClass('tab_index');
			}else{
				$('.textDiv').addClass('tab_index');
			}
			$('#img'+(a+1)).addClass('tab_index');
			
			$('#reset_btn').addClass('tab_index');
			$('#focus_gaurd_4').addClass('tab_index');
			$('.tab_index').each(function( index ){		
				$('.tab_index').attr('tabindex',0);
			});
		}
	}
	
})(player = player || {})
var player

/*slider track off */
