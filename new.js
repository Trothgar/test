//new 20201010 spc

//populates video player and divs  
function populate( isStream ){
	document.querySelector('meta[name="description"]').setAttribute("content", "Caltrans image / video for " + routePlace + " : " + locationName);
	document.title=routePlace + " : " + locationName;
	if( isStream=='true' ){
		videojs("my-video").src( { src: videoStreamURL, type: 'application/vnd.apple.mpegurl' } );
		videojs("my-video").poster( posterURL );
		videojs("my-video").preload( "metadata" );
	}
	else{
		var today = new Date();
		document.getElementById("cctvImage").src = posterURL + "?" + today.getTime();
		document.getElementById("cctvImage").alt= routePlace + " : " + locationName;
		document.getElementById("cctvImage").title = routePlace + " : " + locationName;
	}
	document.getElementById("wxText").innerHTML="<p><b>" + routePlace + "<\/b><br><b>" + locationName + "<\/b><br><br>" + "<b>Weather Forecast as of " + localTime + " on " + localDate + " : <\/b><br>" + " High: " + temperatureHigh + "&deg;F<br>" + " Low: " + temperatureLow  + "&deg;F<br>" + " Sunrise: " + sunrise + "<br>" + " Sunset:  " + sunset + "<\/p>";
	document.getElementById("forecast").innerHTML="<p>" + periodName0 + " : " + weatherSummary0 + "<br>" + periodName1 + " : " + weatherSummary1 + "<br>Elevation : " + elevation + " feet<\/p>";
}

//populates video player and divs 
function streamOLD( isStream ){
	document.querySelector('meta[name="description"]').setAttribute("content", "Caltrans image / video for " + routePlace + " : " + locationName);
	document.title=routePlace + " : " + locationName;
	if( isStream=='true' ){
		WowzaPlayer.create("poster", {"title":routePlace + " : " + locationName,"sourceURL":videoStreamURL,"posterFrameURL":posterURL,"description":"","loop":"true","autoPlay":"true","mute":"true","volume":"0","uiPosterFrameFillMode":"fit","license":"PLAY1-4NkbT-zdH8p-TRnGE-uWKha-6Wppn"})
	}
	else if( isStream=='false' ){
		var today = new Date();
		document.getElementById("poster").src = posterURL + "?" + today.getTime();
		document.getElementById("poster").alt= routePlace + " : " + locationName;
		document.getElementById("poster").title = routePlace + " : " + locationName;
	}
	else{
		var ax="",hasFlash=false,today=new Date();
		if (navigator.mimeTypes["application/x-shockwave-flash"]!=undefined)
			hasFlash = true
		else flashDetect:{try {ax = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.7');hasFlash=true;break flashDetect;}catch(e){} try {ax = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.6');hasFlash=true;break flashDetect;}catch(e){} try {ax = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');hasFlash=true;break flashDetect;}catch(e){}}
		if (navigator.userAgent.indexOf("iPhone")!=-1 || navigator.userAgent.indexOf("Opera")!=-1)
			document.getElementById("poster").innerHTML="<A HREF=" + videoStreamURL + ">go to live camera<P><img id=\"cctvImage\" src=\"" + posterURL + "\" alt=\"\"><\/A>";
		else if ( hasFlash == false )
			document.getElementById("poster").innerHTML="<img id=\"cctvImage\" src=\"" + posterURL + "\" alt=\"\">";
		else
			document.getElementById("poster").innerHTML="<object width=\"369px\" height=\"277px\"><param name=\"movie\" value=\"https:\/\/cwwp2.dot.ca.gov\/vm\/StrobeMediaPlayback.swf\"><\/param><param name=\"flashvars\" value=\"src=" + videoStreamURL + "&poster=" + posterURL + "&streamType=live&controlBarAutoHide=false&verbose=true&verbose=true&optimizeInitialIndex=false&optimizeBuffering=false&bufferTime=3&playButtonOverlay=false\"><\/param><param name=\"allowFullScreen\" value=\"true\"><\/param><param name=\"allowscriptaccess\" value=\"always\"><\/param><param name=\"wmode\" value=\"window\"><\/param><embed src=\"https:\/\/cwwp2.dot.ca.gov\/vm\/StrobeMediaPlayback.swf\" type=\"application\/x-shockwave-flash\" allowscriptaccess=\"always\" allowfullscreen=\"true\" wmode=\"window\" width=\"369\" height=\"277\" flashvars=\"src=" + videoStreamURL + "&poster=" + posterURL + "&streamType=live&controlBarAutoHide=false&verbose=true&verbose=true&optimizeInitialIndex=false&optimizeBuffering=false&bufferTime=3&playButtonOverlay=false\"><\/embed><\/object>";
	}
	document.getElementById("wxText").innerHTML="<p><b>" + routePlace + "<\/b><br><b>" + locationName + "<\/b><br><br>" + "<b>Weather Forecast as of " + localTime + " on " + localDate + " : <\/b><br>" + " High: " + temperatureHigh + "&deg;F<br>" + " Low: " + temperatureLow  + "&deg;F<br>" + " Sunrise: " + sunrise + "<br>" + " Sunset:  " + sunset + "<\/p>";
	document.getElementById("forecast").innerHTML="<p>" + periodName0 + " : " + weatherSummary0 + "<br>" + periodName1 + " : " + weatherSummary1 + "<br>Elevation : " + elevation + " feet<\/p>";
