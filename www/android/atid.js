var cordova = require('cordova'),
    exec = require('cordova/exec');

module.exports =  {
	scanner_handle_keycode : 2,
	onKeyUp : function(successCallback, errorCallback){
		exec(successCallback, errorCallback, "Atid", 'register_keyUp', []);
	},
	onKeyDown : function(successCallback, errorCallback){
		exec(successCallback, errorCallback, "Atid", 'register_keyDown', []);
	},
	playSound : function(soundName, successCallback, errorCallback){
		exec(successCallback, errorCallback, "Atid", 'playSound', [soundName]);
	}
}