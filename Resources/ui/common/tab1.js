var currentWin = Ti.UI.currentWindow;
var db = Ti.Database.open('db2');
var query = db.execute('SELECT * FROM Daten');


var table = Ti.UI.createTableView ({
});

var waldArray = [];
while (query.isValidRow()) {
	var customRow = Ti.UI.createTableViewRow({
		height: 75,
		hasChild:true, 
		id:query.fieldByName('id'),
		typennummer: query.fieldByName('typennummer')
	});
	var leftimage = Ti.UI.createImageView ({
		image:'/images/leftImages/' + query.fieldByName('bildpfad') + '.png',
		left: -10,
		top: 4,
		bottom: 4
	});
	customRow.add(leftimage);
	var rowTitel = Ti.UI.createLabel({
		top: 5,
		left: 80,
		font: { fontSize:14, fontWeight:'bold' },
		text: query.fieldByName('titel'),
		height: 35
	});
	customRow.add(rowTitel);
	
	var rowLatin = Ti.UI.createLabel({
		top: 40,
		left: 80,
		font: { fontSize:12, fontStyle:'italic' },
		text: query.fieldByName('titel_latin')
	});
	customRow.add(rowLatin);
	
	table.appendRow(customRow);
	query.next();
};
db.close();
query.close();

var bildButton = Titanium.UI.createButton({title:'Zeige Bild'});
table.addEventListener('click', function(e){
	var rightNavView = Ti.UI.createImageView({
		image:'/images/leftImages/1.png'
	});
	var win = Ti.UI.createWindow({ 
		url:'beschreibung.js',
		id: e.rowData.id,
		backgroundColor:'white',
		title:e.rowData.typennummer,
		
		rightNavButton:bildButton
	});
	
	Ti.UI.currentTab.open(win);
});



currentWin.add(table);


 /*waldArray.push({
		title:query.fieldByName('titel'), 
		hasChild:true, 
		id:query.fieldByName('id'),
		typennummer: query.fieldByName('typennummer')
	});
*/



//waldArray[i] = {title:'Gagg', hasChild:true}
