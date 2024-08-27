var btnLocation = ['LT', 'LB', 'RT', 'RB']
var btnTop
var btnLeft
var wrapperWidth = "100%"

if(typeof btnRandom !== "undefined"){
    if(btnRandom == true){
        var selected = btnLocation[Math.floor(Math.random() * btnLocation.length)] // 랜덤하게 버튼 위치 설정
    }else{
        selected = btnposition
    }
}else{
    selected = 'LT'
}

if(typeof iframePB !== "undefined"){
    if(iframePB == true && self != top){ //현재 iframe창 일 경우
        adMarginLeft = "0"; 
        adMarginTop = "0";
        wrapperWidth = "0px"
    }
}

if (selected == 'LT') { //Left top
    btnTop = adHeight - (adHeight - btnMargin)
    btnLeft = adWidth - (adWidth - btnMargin)
} else if (selected == 'LB') { //Left bottom
    btnTop = adHeight - (btnSizeHeight + btnMargin)
    btnLeft = adWidth - (adWidth - btnMargin)
} else if (selected == 'RT') { //Right top
    btnTop = adHeight - (adHeight - btnMargin)
    btnLeft = adWidth - (btnSizeWidth + btnMargin)
} else { //Right bottom
    btnTop = adHeight - (btnSizeHeight + btnMargin)
    btnLeft = adWidth - (btnSizeWidth + btnMargin)
}

document.write ('<div id="all_wrapper1" style="position:absolute; left:0px; top:0px; width:'+wrapperWidth+'; height:0px; text-align:center; margin:0 auto; z-index:'+zIndex+';">\n');
document.write ('<div id="second_wrapper1" style="position:relative; left:0px; top:0px; width:0px; height:0px; text-align:left; margin:0 auto;">\n');
document.write ('<div id="FloatLayer1" style="position:absolute; left:'+adMarginLeft+'px; top:'+adMarginTop+'px; width:'+adWidth+'px; height:'+adHeight+'px; display:block; z-index:300;">\n');

document.write ('<IFRAME FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO WIDTH="'+adWidth+'" HEIGHT="'+adHeight+'" SRC="'+adUrl+'" allowTransparency="true"></IFRAME>');
document.write ('<div id="close" style="position:absolute; top:'+btnTop+'px; left:'+btnLeft+'px; display:block;">\n');
document.write ('<a style="display: block;" href="javascript:floating_close();"><img src="https://advimg.khan.co.kr/RealMedia/ads/Creatives/khan/js_upload_NEW/close_1212_black_article.jpg" width="'+btnSizeWidth+'" height="'+btnSizeHeight+'" border="0" style="display: block;"></a></div>\n');

document.write ('</div>\n');
document.write ('</div>\n');
document.write ('</div>\n');

function floating_close() {
    	document.getElementById('all_wrapper1').style.display = 'none'; 
    }