//=============================================================
// KEYBOARD
//=============================================================
if(!window.jQuery){
	throw new Error("jQuery must be loaded to use keyboard.js");
}

var keyboard = (function(){

	var debug = false;
	var keyStates = {};
	var keyPressStates = {};
	var keyReleaseStates = {};

	// Add event listeners
	$(document).ready(function(){


		$("body").on("keydown", function(e){
			
			if(debug){console.log(e.keyCode);}

			// Trigger press if going from up to down
			if(!keyStates[e.keyCode]){
				keyPressStates[e.keyCode] = true;
				keyReleaseStates[e.keyCode] = false;
			}


			keyStates[e.keyCode] = true;
		});

		$("body").on("keyup", function(e){

			// Trigger release if going from down to up
			if(keyStates[e.keyCode]){
				keyPressStates[e.keyCode] = false;
				keyReleaseStates[e.keyCode] = true;
			}

			keyStates[e.keyCode] = false;

		});

	}); 

	return {
		getKey: function(keyCode){return keyStates[keyCode];},
		getPress: function(keyCode){return keyPressStates[keyCode];},
		setDebug: function(_debug){debug = _debug;},
		flushPressReleaseState: function(){
			keyPressStates = {};
			keyReleaseStates = {};
		}
	};
}());
