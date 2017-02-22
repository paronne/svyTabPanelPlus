/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"05B5BB1D-7804-4903-99D2-2F791C9E0ECC"}
 */
var selection = '';

/**
 * @public 
 * @return {String} returns the form name
 * @properties={typeid:24,uuid:"6E81BBE9-6D9C-449D-A069-72827B65C68B"}
 */
function open(){
	application.createWindow(controller.getName(),JSWindow.MODAL_DIALOG).show(this);
	return selection
}