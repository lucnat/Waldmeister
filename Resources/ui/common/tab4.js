var currentWin = Ti.UI.currentWindow;

var table = Ti.UI.createTableView ({
	style:Titanium.UI.iPhone.TableViewStyle.GROUPED
});

var impressumRow = Ti.UI.createTableViewRow ({
	title:'Impressum',
	header:'Weiteres'
});
table.appendRow(impressumRow);

var literaturRow = Ti.UI.createTableViewRow ({
	title:'Literaturangaben'
});
table.appendRow(literaturRow);

var hilfeRow = Ti.UI.createTableViewRow ({
	title:'Kontakt & Support'
});
table.appendRow(hilfeRow);

currentWin.add(table);

// Eventlisteners
impressumRow.addEventListener('click', function(e){
	var popup = Ti.UI.createWindow ({
		backgroundColor:'white'
	});
	var scrollviewx = Ti.UI.createScrollView ({
		width:'90%',
		height:'90%'
	});
	var label1 = Ti.UI.createLabel ({
		text:"Idee, Konzept und Projektleitung:\nPeter Schmider, dipl. Forsting. ETH\nZähringerstrasse 9\n8001 Zürich\n044 261 48 54 / 078 657 72 73\nbgupschmider@bluewin.ch\n\nTechnische Umsetzung, Programmierung:\nDaniel Schmider und Aurel Naterop\nRandom Apps \n\nCopyright 2013 by:\nBGU Peter Schmider\nEin weiterführender Gebrauch der Idee oder der Inhalte (z.B. Export) wird dem Nutzer untersagt.\n\nFotos:\nHeinz Erismann\nMit freundlicher Genehmigung des Fotografen.\n\nDarstellung, verwendete Literatur:\nDie Darstellungen wurden aus dem Buch \"Wälder im Kanton Thurgau\" mit freundlicher Genehmigung des Verlages Naturforschende Gesellschaft Thurgau übernommen und angepasst.\nFür die Erweiterung zum Gebrauch im ganzen Schweizerischen Mittelland/Nordschweiz und im Fürstentum Liechtenstein dienten die entsprechenden kantonalen Kommentare, insbesondere diejenigen des Kantons Zürich, aber auch jene der Kantone Aargau, Basel Landschaft/Basel Stadt, Bern/Fribourg, Luzern, Solothurn und dem Fürstentum Liechtenstein.",
		font: { fontSize:12 },
		verticalAlign:'top'
	});
	scrollviewx.add(label1);
	popup.add(scrollviewx);
	Ti.UI.currentTab.open(popup);
});

literaturRow.addEventListener('click', function(e){
	var popup = Ti.UI.createWindow ({
		backgroundColor:'white'
	});
	var signaturenview = Ti.UI.createScrollView ({
		layout:'vertical'
	});
	var signaturimage1 = Ti.UI.createImageView ({
		image:'/images/literaturangaben/literaturangaben.png',
		width:'92%',
		bottom:140
	});
	signaturenview.add(signaturimage1);
	popup.add(signaturenview);
	Ti.UI.currentTab.open(popup);
});

hilfeRow.addEventListener('click', function(e){
	var popup = Ti.UI.createWindow ({
		backgroundColor:'white'
	});
	var label1 = Ti.UI.createLabel ({
		text:'Kontoktadresse für technische Unterstützung oder Anmerkungen:\nDaniel Schmider\nrandom.schmid@gmail.com',
		width:'92%',
		top: '8%',
		height:'auto',
		font: { fontSize:12 },
		verticalAlign:'top'
	});
	popup.add(label1);
	Ti.UI.currentTab.open(popup);
});