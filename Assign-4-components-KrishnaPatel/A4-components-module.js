//ASSIGNMENT 4 WEB COMPONENTS
//MODULE FILE
//IN THIS FILE YOU WILL CREATE YOUR CUSTOM MODULE FOR YOUR REQUIRED FUNCTIONALITY AND EXPOSE IT THROUGH A 'PUBLICLY' ACCESSIBLE METHOD.
var clockNs = (function(){  
	
	function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	h = checkTime(h);
	m = checkTime(m);
	s = checkTime(s);
	
	document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
	var t = setTimeout(startTime, 500);
}
	function checkTime(i) {
	  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	  return i;
	}
	    
	    var module={
	        start:startTime
	    };

	    return module;
	})();