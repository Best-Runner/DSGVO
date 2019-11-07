/**
 * Copyright (c) 2019-present, Value Grid
 * C:\Users\Klaus\Docusaurus\website\node_modules\docusaurus\lib\static\js
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * Copyright (c) 2019-present, Value Grid
 * C:\Users\Klaus\Docusaurus-Test
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**************************************************************************
**************************Datenschutzauditor*******************************
**************************************************************************/
// Alles aus Maske initialisieren
let Frage        = "text"; // Frage
let Antwort      = [];   // Antwort 
let Loesung      = [];   // Lösung False, true, Wert!
let Checkbox     = [];   // Checkbox angekreuzt!
let Versteck	 = [];   // Felder verstecken
let refListe	 = [];	 // refListe für alle Fragen
let anzAntworten;		 // Anzahl Antworten und Lösungen
let aktTest	     = [];   // Test ob Karte richtig beantwortet
let arrSort      = [];	 // Unsortierte Liste von 0 bis Max
let refStart     = null; // Startknopf
let refZurueck   = null; // Button zurück
let refVorwaerts = null; // Button weiter

let flagg        = false; // Flag
let flagListe 	 = false; // Listenerstellung umgeht Maskenerstellung

//initialize the numbers:
let maxAntwortfelder;  	// Max 10 Antwortfelder
let maxAntworten;  		// Maximale Anzahl Antworten
let anzKarten; 			// Anzahl Elemente im Array von 0 - x
let maxKarten; 			// Anzahl Elemente im Array = x + 1

let check 	         = 0; 

let refCheck        = []; // Checkbox angekreuzt oder nicht
let refKnopf        = []; // Knöpfe einfach verschwinden lassen
var aktKarte;          // Aktuelle Karte
var refErgebnis;       // Ergebnisausgabe in Fenster  
let aktErgebnis     = 0;  // Ergebnis für 1 Karte
let przErgebnis     = 0;  // Ergebnissumme in % für alle Karten
var reflfdKarte;
var aktProzent      = 0;  // Prozent Ergebnis für 1 Karte
var aktPruefung     = false; // Karte nicht geprüft
var sumProzent      = []; // Werte für die einzelnen Karten
let refHinweis      = null;
let refProzent      = null;
let refLink         = null;  
let refAnzahl       = null; 

let dsb01start;
let dsa01start;

// Alles aus Maske initialisieren siehe flash dsa js

function dsb01(jump) {

// console.log("Jump: "+jump);

	//initialize the numbers:
	maxAntwortfelder = 8;  // Max 10 Antwortfelder
	maxAntworten     = 8;  // Maximale Anzahl Antworten
	anzKarten        = 9;  // Anzahl Elemente im Array = 34
	maxKarten        = 10; // Anzahl Elemente im Array = 34
	
	switch (jump) {
		case 1:
			start01dsb();
		return;
		case 2:
			weiter();
		return;
		case 3:
			pruefeKarte();
		return;
		case 4:
			zurueck();
		return;
		case 5:
			flagListe = true;
			dsbListe01();
		return;
		case 6:
			initnext();
		return;
	}
	return;
	
	function start01dsb() {
		uhrzeit();
		dsb01Start = true; // Flag
		findrefsdsb();     // Aufbereitung des Bildschirms
		vorbereitung();    // Alles initialisieren
	}

	function findrefsdsb() { // Zur Initialisierung Daten aus Browser ziehen (getElementById)
	let y;	
	
	    Frage = document.getElementById("dsaFrage");
	
		for(y=0;y < maxAntwortfelder;y++){
			Checkbox[y] = document.getElementById("check" + y); 
			 Antwort[y] = document.getElementById("antwort" + y);
			Versteck[y] = document.getElementById("versteck" + y);
		}
		refErgebnis = document.getElementById("Ergebnis");
		reflfdKarte = document.getElementById("lfdKarte");
		refHinweis  = document.getElementById("Hinweis");
		refProzent  = document.getElementById("Prozent");
		
		// refListe für von 0 bis anzKarten erstellen
		
		for (y = 0; y <= anzKarten; y++) {
			refListe[y] = document.getElementById("f"+y);	
			refListe[y].style.visibility = "hidden";
		}

	for (y = (maxAntwortfelder-1); y >= maxAntworten; y--) Versteck[y].style.visibility="hidden"; 
	//  muss enabled werden, wenn Delta zwischen Felder und Antworten
		
	}

	function vorbereitung(){ // Alle Daten vorbereiten. Wird nur einmal aufgerufen
	let y;

	// Initialisierung zum Start und Wiederholung
		aktErgebnis = 0;
		aktProzent  = 0;
		aktKarte    = 0;

	// 1. Benutzerhinweis	
	refHinweis.value = 'Bei Fragen fragen!';   // Hinweisfeld füttern
		
	// Liste von 0 bis Max erstellen
		for (y = 0; y <= anzKarten; y++) arrSort[y] = y;

	// Liste umsortieren
		arrSort.sort(function(a, b){return 0.5 - Math.random()});
		

	// erster Aufruf Shownext
		shownext();
	}

	function shownext(){// Überprüft das Ergebnis
		
		initnext();
		
		DSBFragen(arrSort[aktKarte]);
	}

	function initnext(){// Initialisiert die Maske
	let y = 0;
	let anzAnt = "";
	let anzVer = "";
	
		for(y = 0;y < maxAntworten; y++) {
			
			anzAnt = "antwort"+y;
		
			Checkbox[y].checked                                = false;     // Angekreuztes löschen
			document.getElementById(anzAnt).innerHTML          = [''];      // Feld leeren
			document.getElementById(anzAnt).style.color        = "black";   // Zurück von Blau/Grün auf Schwarz 
			document.getElementById(anzAnt).style.visibility   = "visible"; // mögliche Unsichtbarkeit aufheben  
			document.getElementById(anzAnt).style.borderBottom = "1px solid blue"; //zurück zur blauen Linie
			Versteck[y].style.visibility                       = "visible"; // mögliche Unsichtbarkeit aufheben aus flash01-dsa-data
			Versteck[y].style.borderBottom                     = "1px solid blue"; // Zurück zur Blauen Grotte
		}

		refProzent.value  = 'Karte 0%';                 // Hinweisfeld füttern
		reflfdKarte.value = 'Aktuelle Karte ist #' + (aktKarte+1) + ' von ' + maxKarten; // Hinweisfeld füttern
	}

	function zurueck(){ // Zurück und shownext()
		scroll(0,0);   // Position korrigieren, falls nötig
		aktPruefung = true;
		aktKarte--; 
		if(aktKarte < 0){
			aktKarte = 0;
			refHinweis.value  = 'Vor der 1. Karte ist nichts';   // Hinweisfeld füttern
		}
		
		shownext();
	}
	function weiter(){ // Vorwärts und shownext()
		scroll(0,0);   // Position korrigieren
	 	if (aktPruefung == false) pruefeKarte();
		aktPruefung = false;
		refListe[arrSort[aktKarte]].style.visibility="visible"; // Liste mit erfolgreich ausgefüllten Masken
		aktKarte++;
		if(aktKarte > anzKarten){
			aktKarte = anzKarten;
			refHinweis.value  = 'Neustart anklicken zum Neubeginn';   // Hinweisfeld füttern
		}
		
		shownext();
	}

	function pruefeKarte(){// Überprüfen 
	let y = 0;
	let prozZaehler = 0;
	let prozKarte   = 0;
		aktProzent  = 0;
		aktPruefung = true;
	let anzAnt = "";
	let anzVer = "";

		const iterator = Loesung.values(); //https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/values

		for(const value of iterator) {

			anzAnt = "antwort"+y;
			
			if((Checkbox[y].checked && value) || (!Checkbox[y].checked && !value)){
				document.getElementById(anzAnt).style.color = "green";
				prozZaehler++
			}
			
			if((!Checkbox[y].checked && value) || (Checkbox[y].checked && !value)){
				document.getElementById(anzAnt).style.color = "blue";
				Checkbox[y].checked = false;    // Angekreuztes löschen
				prozZaehler--
			}
			y++	
		}
		
		if(prozZaehler < 0)prozZaehler = 0;

		aktProzent = Math.round(100 / y * prozZaehler); // Aktuelle Karte in % 
		refProzent.value = "Erfolg: " + aktProzent + "%"; // Ausgabe aktueller Wert in  %
		
		sumProzent[aktKarte] = aktProzent; //Zwischenspeichern im Array 0 - 33
				
		const reducer = (accumulator, currentValue) => accumulator + currentValue;//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce	
				
		przErgebnis = sumProzent.reduce(reducer)/(aktKarte+1); // Aufsummieren und Division durch aktuelle Karte +1 
		
		// console.log(sumProzent.reduce(reducer));
		
		refErgebnis.value = "Gesamt: " + Math.round(przErgebnis) + "%"
	}
	
	function uhrzeit() {
    var jetzt = new Date(),
        h = jetzt.getHours(),
        m = jetzt.getMinutes(),
        s = jetzt.getSeconds();
    m = fuehrendeNull(m);
    s = fuehrendeNull(s);
    document.getElementById('dsaUhr1').value = h + ':' + m + ':' + s;
    setTimeout(uhrzeit, 500);
    }
  
    function fuehrendeNull(zahl) {
    	zahl = (zahl < 10 ? '0' : '' )+ zahl;  
    return zahl;
  	}
}

// Ausserhalb der Kapselung

function dsbMaske(aktKarte){
	dsb01(6);
	aktPruefung = true;
	DSBFragen(aktKarte);
	scroll(0,0);   // Position korrigieren
}

// toggle ist nicht mehr gekapselt

function toggle(angekreuzt){
//	if(refCheck[angekreuzt] == true)refCheck[angekreuzt] = false; else if(refCheck[angekreuzt] == false) refCheck[angekreuzt] = true; 
}
