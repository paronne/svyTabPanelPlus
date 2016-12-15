/**
 * @properties={typeid:24,uuid:"29C338A8-8855-454D-BDA7-00E6E2F3D544"}
 */
function reloadTabs(){
	elements.tabs.removeAllTabs();
	elements.tabs.addTab(forms.form1,'form1','Form 1');
	elements.tabs.addTab(forms.form2,'form2','Form 2',null,null,null,null,null,null,true);
	elements.tabs.addTab(forms.form3,'form3','Form 3',null,null,null,null,null,null,true);
}