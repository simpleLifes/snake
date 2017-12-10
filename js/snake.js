
	var c = document.getElementById("can");
	var cxt = c.getContext("2d");
	cxt.fillStyle = "blue";
	cxt.fillRect(20,20,10,10);

	var left = false;
      var right = false;
      var top = false;
      var bottom = false;
      
	document.onkeydown = function(ev){
		var oEvent = ev || event;
		var keycode = oEvent.keyCode;
		switch(keycode){
			case 37:
			 left= true;
			 break;
			case 38:
				top  = true;
				break;
			case 39:
				right = true;
				break;
			case 40:
				bottom = true;
				break;
		}
	}
