function ApplicationTabGroup(Window) {
	//create module instance
	var self = Ti.UI.createTabGroup();
	
	//create app tabs
	var win1 = Ti.UI.createWindow ({
		title:'Übersicht',
		url:'ui/common/tab1.js',
		backgroundColor:'white'
	});
	
	var win2 = Ti.UI.createWindow ({
		title:'Legende',
		url:'ui/common/tab2.js',
		backgroundColor:'white'
	});
	
	var win3 = Ti.UI.createWindow ({
		title:'Ökogramme',
		url:'ui/common/tab3.js',
		backgroundColor:'white'
	});
	
	var win4 = Ti.UI.createWindow ({
		title:'Mehr',
		url:'ui/common/tab4.js',
		backgroundColor:'white'
	});
	
	
	//TABs
	var tab1 = Ti.UI.createTab({
		title: L('Katalog'),
		icon: '/images/icons/1.png',
		window: win1
	});
	win1.containingTab = tab1;
	
	var tab2 = Ti.UI.createTab({
		title: L('Legende'),
		icon: '/images/icons/2.png',
		window: win2
	});
	win2.containingTab = tab2;
	
	var tab3 = Ti.UI.createTab({
		title: L('Ökogramme'),
		icon: '/images/icons/3a.png',
		window: win3
	});
	win3.containingTab = tab3;
	
	var tab4 = Ti.UI.createTab({
		title: L('Mehr'),
		icon: '/images/icons/4.png',
		window: win4
	});
	win4.containingTab = tab4;
	
	self.addTab(tab1);
	self.addTab(tab2);
	self.addTab(tab3);
	self.addTab(tab4);
	
	return self;
};

module.exports = ApplicationTabGroup;
