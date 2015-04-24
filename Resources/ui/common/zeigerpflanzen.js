var currentWin = Ti.UI.currentWindow;

var table = Ti.UI.createTableView ({
	style:Titanium.UI.iPhone.TableViewStyle.GROUPED
});
var A_stark_sauer_trocken = Ti.UI.createTableViewRow ({
	title:'Stark sauer, trocken',
	header:'Starke Säurezelger'
});
table.appendRow(impressumRow);

var literaturRow = Ti.UI.createTableViewRow ({
	title:'Stark sauer, nass-feucht'
});
table.appendRow(literaturRow);

var hilfeRow = Ti.UI.createTableViewRow ({
	title:'Stark sauer, frisch'
});
table.appendRow(hilfeRow);
