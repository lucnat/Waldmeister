var currentWin = Ti.UI.currentWindow;
var db = Ti.Database.open('db2');
var query = db.execute('SELECT * FROM Daten WHERE id=' + currentWin.id);

// expand images
var expandImage0 = Ti.UI.createImageView ({
	image:'/images/expandimages/expandimage0.png',
	right:10
});
var expandImage1 = Ti.UI.createImageView ({
	image:'/images/expandimages/expandimage1.png',
	right:10
});

var expandImage2 = Ti.UI.createImageView ({
	image:'/images/expandimages/expandimage0.png',
	right:10
});
var expandImage3 = Ti.UI.createImageView ({
	image:'/images/expandimages/expandimage1.png',
	right:10
});

var expandImage4 = Ti.UI.createImageView ({
	image:'/images/expandimages/expandimage0.png',
	right:10
});
var expandImage5 = Ti.UI.createImageView ({
	image:'/images/expandimages/expandimage1.png',
	right:10
});

var expandImage6 = Ti.UI.createImageView ({
	image:'/images/expandimages/expandimage0.png',
	right:10
});
var expandImage7 = Ti.UI.createImageView ({
	image:'/images/expandimages/expandimage1.png',
	right:10
});

var expandImage8 = Ti.UI.createImageView ({
	image:'/images/expandimages/expandimage0.png',
	right:10
});
var expandImage9 = Ti.UI.createImageView ({
	image:'/images/expandimages/expandimage1.png',
	right:10
});

var expandImage10 = Ti.UI.createImageView ({
	image:'/images/expandimages/expandimage0.png',
	right:10
});
var expandImage11 = Ti.UI.createImageView ({
	image:'/images/expandimages/expandimage1.png',
	right:10
});

var expandImage12 = Ti.UI.createImageView ({
	image:'/images/expandimages/expandimage0.png',
	right:10
});
var expandImage13 = Ti.UI.createImageView ({
	image:'/images/expandimages/expandimage1.png',
	right:10
});

var expandImage14 = Ti.UI.createImageView ({
	image:'/images/expandimages/expandimage0.png',
	right:10
});
var expandImage15 = Ti.UI.createImageView ({
	image:'/images/expandimages/expandimage1.png',
	right:10
});

var expandImage16 = Ti.UI.createImageView ({
	image:'/images/expandimages/expandimage0.png',
	right:10
});
var expandImage17 = Ti.UI.createImageView ({
	image:'/images/expandimages/expandimage1.png',
	right:10
});

var expandImage18 = Ti.UI.createImageView ({
	image:'/images/expandimages/expandimage0.png',
	right:10
});
var expandImage19 = Ti.UI.createImageView ({
	image:'/images/expandimages/expandimage1.png',
	right:10
});

var expandImage20 = Ti.UI.createImageView ({
	image:'/images/expandimages/expandimage0.png',
	right:10
});
var expandImage21 = Ti.UI.createImageView ({
	image:'/images/expandimages/expandimage1.png',
	right:10
});

var expandImage22 = Ti.UI.createImageView ({
	image:'/images/expandimages/expandimage0.png',
	right:10
});
var expandImage23 = Ti.UI.createImageView ({
	image:'/images/expandimages/expandimage1.png',
	right:10
});


var scrollView = Ti.UI.createScrollView({
	layout:'vertical',
	verticalScrollIndicator: true
});



var titelLabel = Ti.UI.createLabel({
 	text: query.fieldByName('titel'),
 	font: { fontSize:22 },
 	top:5,
 	right:5,
 	left:5
});


var standorteigenschaftenLabel = Ti.UI.createLabel({
 	text: 'Standorteigenschaften',
 	font: { fontSize:18, fontStyle:'italic' },
 	top:5,
 	left:5,
 	right:0
});


var diagramm = Ti.UI.createImageView({
	image: '/images/diagramme/' + query.fieldByName('bildpfad') + '.png',
	left:'5%',
	right:'5%',
});


var b_standortLabel = Ti.UI.createLabel({
 	text: 'Standort: ' + query.fieldByName('b_standort'),
 	font: { fontSize:14 },
 	top:10,
 	left:5,
 	right:0
});


var b_oberbodenLabel = Ti.UI.createLabel({
 	text: 'Oberboden: ' + query.fieldByName('b_oberboden'),
 	font: { fontSize:14 },
 	top:5,
 	left:5,
 	right:0
});


var b_bodenLabel = Ti.UI.createLabel({
 	text: 'Boden: ' + query.fieldByName('b_boden'),
 	font: { fontSize:14 },
 	top:5,
 	left:5,
 	right:0
});


var b_bodeneigenschaftenLabel = Ti.UI.createLabel({
 	text: 'Besondere Bodeneigenschaften: ' + query.fieldByName('b_bodeneigenschaften'),
 	font: { fontSize:14 },
 	top:5,
 	left:5,
 	right:0
});

var waldbild = Ti.UI.createLabel({
 	text: 'Waldbild',
 	font: { fontSize:18, fontStyle:'italic' },
 	top:15,
 	left:5,
 	right:0
});
waldbild.add(expandImage1);
waldbild.addEventListener ('click', function(e){
	if (cb_waldbild.height==0) {
		cb_waldbild.setHeight(Ti.UI.SIZE);
		waldbild.remove(expandImage1);
		waldbild.add(expandImage0);
	} else {
		cb_waldbild.setHeight(0);
		waldbild.remove(expandImage0);
		waldbild.add(expandImage1);
	};
	
});
var cb_waldbild = Ti.UI.createView ({
	width:'100%',
	height:0,
	layout:'vertical'
});
var b_waldbild = Ti.UI.createLabel({
 	text: query.fieldByName('b_waldbild'),
 	font: { fontSize:14 },
 	top:5,
 	left:5,
 	right:0
});


var t_pflanzen_titel = Ti.UI.createLabel({
 	text: 'Häufige, typische Pflanzen',
 	font: { fontSize:18, fontStyle:'italic' },
 	top:15,
 	left:5,
 	right:0
});
t_pflanzen_titel.add(expandImage3);
t_pflanzen_titel.addEventListener ('click', function(e){
	if (b_t_box.height==0) {
		b_t_box.setHeight(Titanium.UI.SIZE);		
		t_pflanzen_titel.remove(expandImage3);
		t_pflanzen_titel.add(expandImage2);
	} else {
		b_t_box.setHeight(0);
		t_pflanzen_titel.remove(expandImage2);
		t_pflanzen_titel.add(expandImage3);
	};
	
});

var b_t_box = Ti.UI.createView ({
	width:'100%',
	height:0,
	layout:'vertical'
});
var b_t_bs = Ti.UI.createLabel({
 	text: 'BS: ',
 	font: { fontSize:14 },
 	top:5,
 	left:5,
 	right:0
});


var b_t_bs_text = Ti.UI.createLabel({
 	text: query.fieldByName('b_t_bs'),
 	font: { fontSize:14 },
 	left:'12%',
 	top:'-18em',
 	right:0
});

var b_t_ss = Ti.UI.createLabel({
 	text: 'SS: ',
 	font: { fontSize:14 },
 	top:5,
 	left:5,
 	right:0
});

var b_t_ss_text = Ti.UI.createLabel({
 	text: query.fieldByName('b_t_ss'),
 	font: { fontSize:14 },
 	left:'12%',
 	top:'-18em',
 	right:0
});


var b_t_ks = Ti.UI.createLabel({
 	text: 'KS: ',
 	font: { fontSize:14 },
 	top:5,
 	left:5,
 	right:0
});
var b_t_ks_text = Ti.UI.createLabel({
 	text: query.fieldByName('b_t_ks'),
 	font: { fontSize:14 },
 	left:'12%',
 	top:'-18em',
 	right:0
});

var b_t_ms = Ti.UI.createLabel({
 	text: 'MS: ',
 	font: { fontSize:14 },
 	top:5,
 	left:5,
 	right:0
});
var b_t_ms_text = Ti.UI.createLabel({
 	text: query.fieldByName('b_t_ms'),
 	font: { fontSize:14 },
 	left:'12%',
 	top:'-18em',
 	right:0
});

var t_vorkommen = Ti.UI.createLabel({
 	text: 'Vorkommen',
 	font: { fontSize:18, fontStyle:'italic' },
 	top:15,
 	left:5,
 	right:0
});

// b_vorkommen, b_v_ch_t, b_v_ch_b ausblenden
t_vorkommen.add(expandImage5);
t_vorkommen.addEventListener ('click', function(e){
	if (vorkommen_box.height==0) {
		vorkommen_box.setHeight(Titanium.UI.SIZE);
		t_vorkommen.remove(expandImage5);
		t_vorkommen.add(expandImage4);
	} else {
		vorkommen_box.setHeight(0);
		t_vorkommen.remove(expandImage4);
		t_vorkommen.add(expandImage5);
	};
	
});
var vorkommen_box = Ti.UI.createView ({
	width:'100%',
	height:0,
	layout:'vertical'
});
var b_vorkommen = Ti.UI.createLabel({
 	text: query.fieldByName('b_vorkommen'),
 	font: { fontSize:14 },
 	top:5,
 	left:5,
 	right:0

});
var b_v_ch_t = Ti.UI.createLabel({
 	text: 'CH: ',
 	font: { fontSize:14 },
 	top:5,
 	left:5,
 	right:0

});
var b_v_ch_b = Ti.UI.createLabel({
 	text: query.fieldByName('b_v_ch'),
 	font: { fontSize:14 },
 	left:'12%',
 	top:'-18em',
 	right:0,
});


// Synonym
var t_synonym = Ti.UI.createLabel({
 	text: 'Synonyme',
 	font: { fontSize:18, fontStyle:'italic' },
 	top:15,
 	left:5,
 	right:0
});


t_synonym.add(expandImage21);
t_synonym.addEventListener ('click', function(e){
	if (cb_synonym.height==0) {
		cb_synonym.setHeight(Ti.UI.SIZE);
		t_synonym.remove(expandImage21);
		t_synonym.add(expandImage20);
	} else {
		cb_synonym.setHeight(0);
		t_synonym.remove(expandImage20);
		t_synonym.add(expandImage21);
	};
	
});
var cb_synonym = Ti.UI.createView ({
	width:'100%',
	height:0,
	layout:'vertical'
});
var b_synonym = Ti.UI.createLabel({
 	text: query.fieldByName('synonym'),
 	font: { fontSize:14 },
 	top:5,
 	left:5,
 	right:0
});


// Abweichende Ausbildung
var t_ausbildungen = Ti.UI.createLabel({
 	text: 'Ausbildungen',
 	font: { fontSize:18, fontStyle:'italic' },
 	top:15,
 	left:5,
 	right:0
});


t_ausbildungen.add(expandImage23);
t_ausbildungen.addEventListener ('click', function(e){
	if (cb_ausbildungen.height==0) {
		cb_ausbildungen.setHeight(Ti.UI.SIZE);
		t_ausbildungen.remove(expandImage23);
		t_ausbildungen.add(expandImage22);
	} else {
		cb_ausbildungen.setHeight(0);
		t_ausbildungen.remove(expandImage22);
		t_ausbildungen.add(expandImage23);
	};
	
});
var cb_ausbildungen = Ti.UI.createView ({
	width:'100%',
	height:0,
	layout:'vertical'
});
var b_ausbildungen = Ti.UI.createLabel({
 	text: query.fieldByName('abweichende_ausbildungen'),
 	font: { fontSize:14 },
 	top:5,
 	left:5,
 	right:0
});


var t_baumarten = Ti.UI.createLabel({
 	text: 'Baumarten und Waldbau',
 	font: { fontSize:18, fontStyle:'italic' },
 	top:15,
 	left:5,
 	right:0
});


t_baumarten.add(expandImage7);
t_baumarten.addEventListener ('click', function(e){
	if (cb_baumarten.height==0) {
		cb_baumarten.setHeight(Ti.UI.SIZE);
		t_baumarten.remove(expandImage7);
		t_baumarten.add(expandImage6);
	} else {
		cb_baumarten.setHeight(0);
		t_baumarten.remove(expandImage6);
		t_baumarten.add(expandImage7);
	};
	
});
var cb_baumarten = Ti.UI.createView ({
	width:'100%',
	height:0,
	layout:'vertical'
});
var b_baumarten = Ti.UI.createLabel({
 	text: query.fieldByName('b_baumarten'),
 	font: { fontSize:14 },
 	top:5,
 	left:5,
 	right:0
});


var t_wuchsleistung = Ti.UI.createLabel({
 	text: 'Wuchsleistung',
 	font: { fontSize:18, fontStyle:'italic' },
 	top:15,
 	left:5,
 	right:0
});

// b_wuchleistung, wuechs ausblenden
t_wuchsleistung.add(expandImage9);
t_wuchsleistung.addEventListener ('click', function(e){
	if (cb_wuchsleistung.height==0) {
		cb_wuchsleistung.setHeight(Ti.UI.SIZE);
		t_wuchsleistung.remove(expandImage9);
		t_wuchsleistung.add(expandImage8);
	} else {
		cb_wuchsleistung.setHeight(0);
		t_wuchsleistung.remove(expandImage8);
		t_wuchsleistung.add(expandImage9);
	};
	
});
var cb_wuchsleistung = Ti.UI.createView ({
	width:'100%',
	height:0,
	layout:'vertical'
});
var b_wuchsleistung = Ti.UI.createLabel({
 	text: query.fieldByName('b_wuchsleistung'),
 	font: { fontSize:14 },
 	top:5,
 	left:5,
 	right:0
});
var wuechs = Ti.UI.createImageView({
	image: '/images/diagramme/wuchsleistung/' + query.fieldByName('typennummer') + '.png',
	top:5,
	left:5,
	right:0
});

var t_befahrbarkeit = Ti.UI.createLabel({
 	text: 'Befahrbarkeit',
 	font: { fontSize:18, fontStyle:'italic' },
 	top:15,
 	left:5,
 	right:0
});
// b_befahrbarkeit, verdichtung ausblenden
t_befahrbarkeit.add(expandImage11);
t_befahrbarkeit.addEventListener ('click', function(e){
	if (cb_befahrbarkeit.height==0) {
		cb_befahrbarkeit.setHeight(Ti.UI.SIZE);
		t_befahrbarkeit.remove(expandImage11);
		t_befahrbarkeit.add(expandImage10);
	} else {
		cb_befahrbarkeit.setHeight(0);
		t_befahrbarkeit.remove(expandImage10);
		t_befahrbarkeit.add(expandImage11);
	};
	
});
var cb_befahrbarkeit = Ti.UI.createView ({
	width:'100%',
	height:0,
	layout:'vertical'
});
var b_befahrbarkeit = Ti.UI.createLabel({
 	text: query.fieldByName('b_befahrbarkeit'),
 	font: { fontSize:14 },
 	top:5,
 	left:5,
 	right:0,
});
var verdichtung = Ti.UI.createImageView({
	image: '/images/diagramme/befahrbarkeit/' + query.fieldByName('typennummer') + '.png',
	top:5,
	left:5,
	right:5
});

var t_bestockungsziel = Ti.UI.createLabel({
 	text: 'Bestockungsziel',
 	font: { fontSize:18, fontStyle:'italic' },
 	top:15,
 	left:5,
 	right:0
});
// b_bestockungsziel, laub ausblenden
t_bestockungsziel.add(expandImage13);
t_bestockungsziel.addEventListener ('click', function(e){
	if (cb_bestockungsziel.height==0) {
		cb_bestockungsziel.setHeight(Ti.UI.SIZE);
		t_bestockungsziel.remove(expandImage13);
		t_bestockungsziel.add(expandImage12);
	} else {
		cb_bestockungsziel.setHeight(0);
		t_bestockungsziel.remove(expandImage12);
		t_bestockungsziel.add(expandImage13);
	};
	
});
var cb_bestockungsziel = Ti.UI.createView ({
	width:'100%',
	height:0,
	layout:'vertical'
});
var b_bestockungsziel = Ti.UI.createLabel({
 	text: query.fieldByName('b_bestockungsziel'),
 	font: { fontSize:14 },
 	top:5,
 	left:5,
 	right:0
});
var laub = Ti.UI.createImageView({
	image: '/images/diagramme/laubanteil/' + query.fieldByName('typennummer') + '.png',
	top:5,
	left:5,
	right:5
});

var t_verjuengung = Ti.UI.createLabel({
 	text: 'Verjüngung',
 	font: { fontSize:18, fontStyle:'italic' },
 	top:15,
 	left:5,
 	right:0
});
t_verjuengung.add(expandImage15);
t_verjuengung.addEventListener ('click', function(e){
	if (cb_verjuengung.height==0) {
		cb_verjuengung.setHeight(Ti.UI.SIZE);
		t_verjuengung.remove(expandImage15);
		t_verjuengung.add(expandImage14);
	} else {
		cb_verjuengung.setHeight(0);
		t_verjuengung.remove(expandImage14);
		t_verjuengung.add(expandImage15);
	};
	
});
var cb_verjuengung = Ti.UI.createView ({
	width:'100%',
	height:0,
	layout:'vertical'
});
var b_verjuengung = Ti.UI.createLabel({
 	text: query.fieldByName('b_verjuengung'),
 	font: { fontSize:14 },
 	top:5,
 	left:5,
 	right:0
});

var t_pflege = Ti.UI.createLabel({
 	text: 'Pflege',
 	font: { fontSize:18, fontStyle:'italic' },
 	top:15,
 	left:5,
 	right:0
});
t_pflege.add(expandImage17);
t_pflege.addEventListener ('click', function(e){
	if (cb_pflege.height==0) {
		cb_pflege.setHeight(Ti.UI.SIZE);
		t_pflege.remove(expandImage17);
		t_pflege.add(expandImage16);
	} else {
		cb_pflege.setHeight(0);
		t_pflege.remove(expandImage16);
		t_pflege.add(expandImage17);
	};
	
});
var cb_pflege = Ti.UI.createView ({
	width:'100%',
	height:0,
	layout:'vertical'
});
var b_pflege = Ti.UI.createLabel({
 	text: query.fieldByName('b_pflege'),
 	font: { fontSize:14 },
 	top:5,
 	left:5,
 	right:0
});

var t_naturkundliche = Ti.UI.createLabel({
 	text: 'Naturkundliche Besonderheiten',
 	font: { fontSize:18, fontStyle:'italic' },
 	top:15,
 	left:5,
 	right:0
});
t_naturkundliche.add(expandImage19);
t_naturkundliche.addEventListener ('click', function(e){
	if (cb_naturkundliche.height==0) {
		cb_naturkundliche.setHeight(Ti.UI.SIZE);
		t_naturkundliche.remove(expandImage19);
		t_naturkundliche.add(expandImage18);
	} else {
		cb_naturkundliche.setHeight(0);
		t_naturkundliche.remove(expandImage18);
		t_naturkundliche.add(expandImage19);
	};
	
});
var cb_naturkundliche = Ti.UI.createView ({
	width:'100%',
	height:0,
	layout:'vertical'
});
var b_naturkundliche = Ti.UI.createLabel({
 	text: query.fieldByName('b_naturkundliche'),
 	font: { fontSize:14 },
 	top:5,
 	left:5,
 	right:0
 	});

currentWin.rightNavButton.addEventListener('click', function(e){
	var win = Ti.UI.createWindow({
		backgroundColor:'black',
	});
	var zoomView = Titanium.UI.createScrollView({
    contentWidth: 'auto',
    contentHeight: 'auto',

    showVerticalScrollIndicator: true,
    showHorizontalScrollIndicator: true,
   	// Min max zoom
    maxZoomScale: 5,
    minZoomScale: 1,
	// Default Zoom:
    zoomScale: 1
}); 
	var imageView = Ti.UI.createImageView({
		image:'/images/waldbilder/' + query.fieldByName('bildpfad') + '.jpg',
		left:0,
		right:0,
		top:0,
		bottom:0
	});
	win.add(zoomView);
	zoomView.add(imageView);
	Ti.UI.currentTab.open(win);
});


scrollView.add(titelLabel);
scrollView.add(standorteigenschaftenLabel);
scrollView.add(diagramm);
scrollView.add(b_standortLabel);
scrollView.add(b_oberbodenLabel);
scrollView.add(b_bodenLabel);
scrollView.add(b_bodeneigenschaftenLabel);

scrollView.add(waldbild);

scrollView.add(cb_waldbild);
cb_waldbild.add(b_waldbild);

scrollView.add(t_wuchsleistung);
scrollView.add(cb_wuchsleistung);
cb_wuchsleistung.add(b_wuchsleistung);
cb_wuchsleistung.add(wuechs);

scrollView.add(t_befahrbarkeit);
scrollView.add(cb_befahrbarkeit);
cb_befahrbarkeit.add(b_befahrbarkeit);
cb_befahrbarkeit.add(verdichtung);

scrollView.add(t_bestockungsziel);
scrollView.add(cb_bestockungsziel);
cb_bestockungsziel.add(b_bestockungsziel);
cb_bestockungsziel.add(laub);


scrollView.add(t_pflanzen_titel);
scrollView.add(b_t_box);
b_t_box.add(b_t_bs);
b_t_box.add(b_t_bs_text);
b_t_box.add(b_t_ss);
b_t_box.add(b_t_ss_text);
b_t_box.add(b_t_ks);
b_t_box.add(b_t_ks_text);
b_t_box.add(b_t_ms);
b_t_box.add(b_t_ms_text);

scrollView.add(t_synonym);
scrollView.add(cb_synonym);
cb_synonym.add(b_synonym);

scrollView.add(t_ausbildungen);
scrollView.add(cb_ausbildungen);
cb_ausbildungen.add(b_ausbildungen);

scrollView.add(t_vorkommen);
scrollView.add(vorkommen_box);
vorkommen_box.add(b_vorkommen);
vorkommen_box.add(b_v_ch_t);
vorkommen_box.add(b_v_ch_b);

scrollView.add(t_baumarten);
scrollView.add(cb_baumarten);
cb_baumarten.add(b_baumarten);

scrollView.add(t_verjuengung);
scrollView.add(cb_verjuengung);
cb_verjuengung.add(b_verjuengung);

scrollView.add(t_pflege);
scrollView.add(cb_pflege);
cb_pflege.add(b_pflege);

scrollView.add(t_naturkundliche);
scrollView.add(cb_naturkundliche);
cb_naturkundliche.add(b_naturkundliche);

currentWin.add(scrollView);
