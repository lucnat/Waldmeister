var currentWin = Ti.UI.currentWindow;

var table = Ti.UI.createTableView ({
	style:Titanium.UI.iPhone.TableViewStyle.GROUPED
});

var impressumRow = Ti.UI.createTableViewRow ({
	title:'Untereinheiten',
	header:'Legende'
});
table.appendRow(impressumRow);

var literaturRow = Ti.UI.createTableViewRow ({
	title:'Signaturen'
});
table.appendRow(literaturRow);

var hilfeRow = Ti.UI.createTableViewRow ({
	title:'Abkürzungen'
});
table.appendRow(hilfeRow);



currentWin.add(table);

// Eventlisteners
impressumRow.addEventListener('click', function(e){
	var popup = Ti.UI.createWindow ({
		backgroundColor:'white'
	});
	var signaturenview = Ti.UI.createScrollView ({
		layout:'vertical'
	});
	var signaturimage1 = Ti.UI.createImageView ({
		image:'/images/untereinheiten/untereinheiten.png',
		width:'92%',
		bottom:140
	});
	signaturenview.add(signaturimage1);
	popup.add(signaturenview);
	Ti.UI.currentTab.open(popup);
});

literaturRow.addEventListener('click', function(e){
	var popup = Ti.UI.createWindow ({
		backgroundColor:'white',
		title:'Signaturen'
	});
	
	var signaturenview = Ti.UI.createScrollView ({
		layout:'vertical'
	});
	var signaturimage1 = Ti.UI.createImageView ({
		image:'/images/signaturen/signaturen2.png',
		width:'80%'
	});
	var signaturimage2 = Ti.UI.createImageView ({
		image:'/images/signaturen/signaturen1.png',
		width:'80%',
		bottom:250
	});
	signaturenview.add(signaturimage1);
	signaturenview.add(signaturimage2);
	popup.add(signaturenview);
	
	
	
	Ti.UI.currentTab.open(popup);
});

hilfeRow.addEventListener('click', function(e){
	var popup = Ti.UI.createWindow ({
		backgroundColor:'white',
		title:'Signaturen'
	});
	
	var signaturenview = Ti.UI.createScrollView ({
		layout:'vertical'
	});
	var signaturimage1 = Ti.UI.createImageView ({
		image:'/images/abkuerzungen/abkuerzungen.png',
		width:'80%',
		bottom:140
	});
	signaturenview.add(signaturimage1);
	popup.add(signaturenview);
	
	Ti.UI.currentTab.open(popup);
});