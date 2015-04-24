var currentWin = Ti.UI.currentWindow;

var table = Ti.UI.createTableView ({
	style:Titanium.UI.iPhone.TableViewStyle.GROUPED
});

var impressumRow = Ti.UI.createTableViewRow ({
	title:'Kollin / Submontan',
	header:'Ökogramme'
});
table.appendRow(impressumRow);

var literaturRow = Ti.UI.createTableViewRow ({
	title:'Untere montane Stufe'
});
table.appendRow(literaturRow);

var hilfeRow = Ti.UI.createTableViewRow ({
	title:'Auen und Hangschutt'
});
table.appendRow(hilfeRow);

var zeigerRow = Ti.UI.createTableViewRow ({
	title:'Wechselnde Wasserbedingungen'
});
table.appendRow(zeigerRow);

currentWin.add(table);

// Eventlisteners
impressumRow.addEventListener('click', function(e){
	var popup = Ti.UI.createWindow ({
		backgroundColor:'white',
		left:0,
		right:0,
		top:0,
		bottom:0
	});
	
	var zoomView = Ti.UI.createScrollView ({
		contentWidth: 'auto',
	    contentHeight: 'auto',
	    top: 0,
	    bottom: 0,
	    showHorizontalScrollIndicator: true,
	    zoomScale:0.3,
	    maxZoomScale:0.3*1.5,
	    minZoomScale: 0.3*0.7
	});
	var imageView = Ti.UI.createImageView ({
		image:'/images/Oekogramme/PNG/1.png'
	});
	zoomView.add(imageView);
	popup.add(zoomView);
	Ti.UI.currentTab.open(popup);
});

literaturRow.addEventListener('click', function(e){
	var popup = Ti.UI.createWindow ({
		backgroundColor:'white',
		left:0,
		right:0,
		top:0,
		bottom:0
	});
	
	var zoomView = Ti.UI.createScrollView ({
		contentWidth: 'auto',
	    contentHeight: 'auto',
	    top: 0,
	    bottom: 0,
	    showVerticalScrollIndicator: true,
	    showHorizontalScrollIndicator: true,
	    zoomScale:1.3,
	    maxZoomScale:1.3*1.5,
	    minZoomScale: 1.3*0.7
	});
	var imageView = Ti.UI.createImageView ({
		image:'/images/Oekogramme/PNG/2.png',
		left:0,
		right:0,
		top:0,
		bottom:0
	});
	zoomView.add(imageView);
	popup.add(zoomView);
	Ti.UI.currentTab.open(popup);
});

hilfeRow.addEventListener('click', function(e){
	var popup = Ti.UI.createWindow ({
		backgroundColor:'white',
		left:0,
		right:0,
		top:0,
		bottom:0
	});
	
	var zoomView = Ti.UI.createScrollView ({
		contentWidth: 'auto',
	    contentHeight: 'auto',
	    top: 0,
	    bottom: 0,
	    showVerticalScrollIndicator: true,
	    showHorizontalScrollIndicator: true,
	    zoomScale:0.3,
	    maxZoomScale:0.3*1.5,
	    minZoomScale: 0.3*0.7
	});
	var imageView = Ti.UI.createImageView ({
		image:'/images/Oekogramme/PNG/3.png'
	});
	zoomView.add(imageView);
	popup.add(zoomView);
	Ti.UI.currentTab.open(popup);
});

zeigerRow.addEventListener('click', function(e){
	var popup = Ti.UI.createWindow ({
		backgroundColor:'white',
		left:0,
		right:0,
		top:0,
		bottom:0
	});
	
	var zoomView = Ti.UI.createScrollView ({
		contentWidth: 'auto',
	    contentHeight: 'auto',
	    top: 0,
	    bottom: 0,
	    showVerticalScrollIndicator: true,
	    showHorizontalScrollIndicator: true,
	    zoomScale:1,
	    maxZoomScale:1,
	    minZoomScale: 1
	});
	var imageView = Ti.UI.createImageView ({
		image:'/images/Oekogramme/PNG/4.png',
		left:0,
		right:0,
		top:0,
		bottom:0
	});
	zoomView.add(imageView);
	popup.add(zoomView);
	Ti.UI.currentTab.open(popup);
});