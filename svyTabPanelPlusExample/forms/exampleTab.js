/**
 * @private 
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B1762735-4CFC-41DD-BAC1-FD4AAA92CDB6"}
 */
var selectModule = '';


/**
 * @properties={typeid:24,uuid:"29C338A8-8855-454D-BDA7-00E6E2F3D544"}
 */
function reloadTabs(){
	elements.tabs.removeAllTabs();
	elements.tabs.addTab(forms.form1,'form1','Form 1',null,null,null,null,null,null,true);
	elements.tabs.addTab(forms.form2,'form2','Form 2',null,null,null,null,null,null,true);
//	elements.tabs.addTab(forms.form3,'form3','Form 3',null,null,null,null,null,null,true);
}
/**
 * Perform the element default action.
 * @private
 *
 * @properties={typeid:24,uuid:"10A508E9-F8D0-44D6-9DFD-0EB5FD2E59F3"}
 */
function removeAll() {
	while(elements.tabs.getMaxTabIndex() > 1){
		elements.tabs.removeTabAt(2);
	}
}

/**
 * @properties={typeid:24,uuid:"3B570D28-F471-421C-B8E7-B0886AA17005"}
 */
function addAll(){
	removeAll();
	var modules = application.getValueListArray('modules').sort();
	for(var i in modules){
		var tabText = application.getValueListDisplayValue('modules',modules[i])
		elements.tabs.addTab(forms[modules[i]],tabText,tabText,null,null,null,null,null,null,true);
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"D2502D00-02FB-4866-B86A-79F8421ADF2A"}
 */
function loadModule(event) {
	if(selectModule){
		
		// check if tab already exists
		var index = elements.tabs.indexOf(selectModule);
		if(index != -1){
			elements.tabs.tabIndex = index;
			
		} else {
			
			// add tab
			var formName = application.getValueListDisplayValue('modules',selectModule);
			elements.tabs.addTab(forms[selectModule],formName,formName,null,null,null,null,null,null,true);
			
			// select tab
			elements.tabs.tabIndex = elements.tabs.getMaxTabIndex();
		}
	}
	selectModule = null;
}

