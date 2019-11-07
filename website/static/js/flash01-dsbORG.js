/**
 * Copyright (c) 2019-present, Value Grid
 * C:\Users\Klaus\Docusaurus\website\node_modules\docusaurus\lib\static\js
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**************************************************************************
**************************Datenschutzauditor*******************************
**************************************************************************/
// Alles aus Maske initialisieren
let Frage        = "text";               // Frage
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
let maxAntwortfelder = 8;  // Max 10 Antwortfelder
let maxAntworten     = 8;  // Maximale Anzahl Antworten
let anzKarten        = 33; // Anzahl Elemente im Array = 34
let maxKarten        = 34; // Anzahl Elemente im Array = 34

let check 	         = 0; 

/**************************************************************************
*************************Datenschutzbeauftragter***************************
**************************************************************************/
// Arrays initialisieren
var  q  = []; // Original Frage
var a1  = []; // Original Antwort
var a2  = [];
var a3  = [];
var l1  = []; // Original Lösung
var l2  = [];
var l3  = [];
var nq  = []; // Kopie von q wird zerstört
var na1 = []; // Kopie von a wird zerstört
var na2 = [];
var na3 = [];
var nl1 = []; // Kopie von l wird zerstört
var nl2 = [];
var nl3 = [];

var refAntwort = []; 
var pruefe     = [];  // Achtung ist jetzt Array
var show       = [];

//initialize the numbers:

var total       = 0; // Anzahl Elemente im Array

//initialize the references:
var refFrage;

var dsbcheck 

/**************************************************************************
************************Gemeinsame Datendeklarationen**********************
**************************************************************************/
let refCheck     = []; // Checkbox angekreuzt oder nicht
let refKnopf     = []; // Knöpfe einfach verschwinden lassen
var aktKarte;          // Aktuelle Karte
var refErgebnis;       // Ergebnisausgabe in Fenster  
let aktErgebnis  = 0;  // Ergebnis für 1 Karte
let przErgebnis  = 0;  // Ergebnissumme in % für alle Karten
var reflfdKarte;
var aktProzent   = 0;  // Prozent Ergebnis für 1 Karte
var aktPruefung  = false; // Karte nicht geprüft
var sumProzent   = []; // Werte für die einzelnen Karten
let refHinweis   = null;
let refProzent   = null;
let refLink      = null;  
let refAnzahl    = null; 

let dsb01start;
let dsa01start;

function dsb01(jump){

if(jump == 1 && dsb01start == true){
	start01dsb();
	return;
}
if(jump == 2 && dsb01start == true){
	dsbweiter();
	return;
}
if(jump == 3 && dsb01start == true){
	proof();
	return;
}

	// Alle Eingabenm für dei Flashcards kommen hierrein:
	// Array q = Fragetext / Array a = Antworten / Array L = Lösung / Alles in Anführungsstriche schreiben und einschließen. Hervorhebungen innerhalb mit einfachem Hochkomma kennzeichnen.
	var y = 0;
	 q[y]="Die DSGVO ist für die Verantwortlichen zwingend ab wann zu beachten?";
	l1[y]=false; a1[y]="Verstöße gegen die DSGVO können von den Behörden auch vor dem 25.05.2018 sanktioniert werden.";
	l2[y]=false; a2[y]="Am 24.05.2016 und unmittelbar anwendbar";
	l3[y]=true;  a3[y]="Die DSGVO ist am 24.05.2016 in Kraft getreten, verbindlich anzuwenden erst ab dem 25.05.2018";
	y++
	 q[y]="Die Datenschutzgrundverordnung ...";
	l1[y]=true;  a1[y]="... gilt unmittelbar in allen Mitgliedstaaten.";
	l2[y]=true;  a2[y]="... enthält Öffnungsklauseln, welche es den Mitgliedstaaten ermöglichen, im Rahmen der DSGVO ergänzend eigene Datenschutzvorschriften zu erlassen.";
	l3[y]=false; a3[y]="... muss erst in eigenes Recht (BDSG) umgesetzt werden und gilt dann unmittelbar.";
	y++
	 q[y]="Anonymisierte Daten ...";
	l1[y]=false; a1[y]="fallen in den Schutzbereich der DSGVO.";
	l2[y]=true;  a2[y]="fallen nicht in den Schutzbereich der DSGVO.";
	l3[y]=false; a3[y]="werden in Art. 5 DSGVO definiert.";
	y++
	 q[y]="Das neue Bundesdatenschutzgesetz (BDSG neu) ...";
	l1[y]=true;  a1[y]="... ist mit Wirkung zum 25.05.2018 angepasst worden und ist Teil des Datenschutz-Anpassungs- u. Umsetzungsgesetzes (DSAnpUG-EU).";
	l2[y]=false; a2[y]="... setzt die DSGVO um.";
	l3[y]=false; a3[y]="... spezifiziert in Teil 1 und 2 datenschutzrechtliche Regelungen entsprechend der Öffnungsklauseln der DSGVO.";
	y++
	 q[y]="In welchem Zeitraum sind die Betroffenenrechte vom Verantwortlichen zu erfüllen?";
	l1[y]=false; a1[y]="innerhalb von 42 Tagen ab Geltendmachung der Betroffenenrechte.";
	l2[y]=false; a2[y]="innerhalb von 24 Stunden nach Eingang des Antrags des Betroffenen mit der Option, diese Frist auf 72 Stunden zu verlängern.";
	l3[y]=true;  a3[y]="unverzüglich bzw. grundsätzlich innerhalb von einem Monat";
	y++
	 q[y]="Welche Grundsätze benennt die DSGVO?";
	l1[y]=true;  a1[y]="Rechtmäßigkeit, Verarbeitung nach Treu und Glauben, Transparenz.";
	l2[y]=true;  a2[y]="Zweckbindung, Datenminimierung, Richtigkeit.";
	l3[y]=true;  a3[y]="Speicherbegrenzung, Integrität und Vertraulichkeit, Rechenschaftspflicht.";
	y++
	 q[y]="Welche wesentlichen Voraussetzungen müssen entsprechend der DSGVO vorliegen, damit eine Person zum Datenschutzbeauftragten (DSB) benannt werden kann?";
	l1[y]=true;  a1[y]="Der DSB erfüllt die Mindestanforderungen für den Datenschutz an Fachkunde und Unabhängigkeit nach § 7 BDSG.";
	l2[y]=false; a2[y]="Insbesondere wird der DSB aufgrund seines IT-Fachwissens, das er zur Erfüllung seiner Aufgaben benötigt, benannt";
	l3[y]=true;  a3[y]="Der DSB besitzt die Fähigkeiten zur Erfüllung der in Artikel 39 genannten Aufgaben.";
	y++
	 q[y]="Sie prüfen eine schriftliche Einwilligung gem. Art. 7 DSGVO des Betroffenen zur Datenerhebung. Worauf müssen Sie achten, damit diese Einwilligung formal-juristisch korrekt ist?";
	l1[y]=true;  a1[y]="Der Verantwortliche sollte nachweisen können, dass die betroffene Person ihre Einwilligung zu dem Verarbeitungsvorgang gegeben hat.";
	l2[y]=true;  a2[y]="Die Einwilligung erfolgte <strong>freiwillig</strong>, <strong>zwanglos</strong> und <strong>nachweislich</strong>.";
	l3[y]=true;  a3[y]="Die Einwilligung kann jederzeit, durch die betroffene Person, widerrufen werden.";
	y++
	 q[y]="Muss der Verantwortliche im Falle einer Datenerhebung beim Betroffenen seinen Informationspflichten nachkommen? Und wenn, wann?";
	l1[y]=true;  a1[y]="Ja";
	l2[y]=false; a2[y]="Nein";
	l3[y]=false; a3[y]="Innerhalb von 72 Stunden bzw. innerhalb eines Monats";
	y++
	 q[y]="Erläutern Sie den Begriff 'Pseudonymisieren'.";
	l1[y]=true;  a1[y]="Austausch der personenbezogenen Daten, so dass eine Nachvollziehbarkeit für Dritte ausgeschlossen ist und nicht mehr spezifisch betroffenen Personen zugeordnet werden kann.";
	l2[y]=true;  a2[y]="Bei der Pseudonymisierung wird der Name durch ein Pseudonym, zum Beispiel eine Chiffre oder Hash-Code, ersetzt. Diese zusätzlichen Informationen werden gesondert aufbewahrt und unterliegen technischen und organisatorischen Maßnahmen, die gewährleisten, dass eine Re-Pseudonymisierung nur noch eingeschränkt möglich ist.";
	l3[y]=false; a3[y]="Die pseudonymisierten Daten unterliegen nicht mehr der DSGVO, da diese Daten nicht einer identifizierten oder identifizierbaren natürlichen Person zugewiesen werden können.";

	start01dsb();

	// **************************************************************************

	function start01dsb(){
		dsb01start = true;
		findrefdsb();
		begin01dsb();
	}

	function findrefdsb(){ // Zur Initialisierung Daten aus Browser ziehen (getElementById)
		refFrage      = document.getElementById("dsbFrage");
		refAntwort[1] = document.getElementById("Antwort1");
		refAntwort[2] = document.getElementById("Antwort2");
		refAntwort[3] = document.getElementById("Antwort3");
		refCheck[1]   = document.getElementById("check1");
		refCheck[2]   = document.getElementById("check2");
		refCheck[3]   = document.getElementById("check3");
		refKnopf[1]   = document.getElementById("rotKnopf");
		refKnopf[2]   = document.getElementById("gruKnopf");
		refKnopf[3]   = document.getElementById("oraKnopf");
		refProzent    = document.getElementById("Prozent");
		refErgebnis   = document.getElementById("Ergebnis");
		reflfdKarte   = document.getElementById("lfdKarte");
		refAnzahl     = document.getElementById("von");
		refHinweis    = document.getElementById("Hinweis");
	}

	function begin01dsb(){ // Alle sicht- und unsichbaren Daten auf Null und den Bildschirm putzen.

		// Initialisierung zum Start und Wiederholung
		aktKarte    = 1;
		aktErgebnis = 0;
		aktProzent  = 0;

		// Alle Buttons und Antworteinträge sichtbar machen und zurücksetzen
		refKnopf[1].style.visibility = 'visible';
		refKnopf[2].style.visibility = "visible";
		refKnopf[3].style.visibility = "visible";
			
		refProzent.innerHTML = "Prozent: " + "0" + "%";  

		// 1. Benutzerhinweis	
		refHinweis.innerHTML="";

		// q enthält die Anzahl Elemente / Fragen	
		total=q.length; 
		
		// Anzahl Karten ins Display schreiben
		refAnzahl.innerHTML   = "von "       + total;
		refErgebnis.innerHTML = "Ergebnis: " + aktErgebnis   + " / " + total;
			
		// nq verweist auf q /alle Arrays nur in Kopie manipulieren / q bleibt immer gleich
		nq=q.slice(0); 

		// na enthält die möglichen Antworten
		na1=a1.slice(0);
		na2=a2.slice(0);
		na3=a3.slice(0);
			
		// nl enthält die Lösungen
		nl1=l1.slice(0);
		nl2=l2.slice(0);
		nl3=l3.slice(0);

		// Anzeige erste Frage
		show01dsb();
	}

	function show01dsb(){// Überprüft das Ergebnis und schickt die Knöpfe in den Hintergrund, wenn alle Fragen beantwortet.
		
		refAntwort[1].style.color = "black";
		refAntwort[2].style.color = "black";
		refAntwort[3].style.color = "black";
		
		refCheck[1].checked = false; // checkbox
		refCheck[2].checked = false; // checkbox
		refCheck[3].checked = false; // checkbox

	// 1. Durchlauf und weitere werden in updateErgebnis() geprüft
		updateErgebnis(); 
		aktProzent = 0; // Karte wird bewertet
		refProzent.innerHTML = "Prozent : " + " 0%";

	// Alle Karten wurden bearbeitet	
		if (nq.length == 0){ 
			if (aktKarte > total) reflfdKarte.innerHTML = "Karte   : " + total;
			dsb01start=false;
			refKnopf[1].style.visibility = 'visible';
			refKnopf[2].style.visibility = "hidden";
			refKnopf[3].style.visibility = "hidden";
			refHinweis.innerHTML="Alle Flashcards vervollständigt.<br />Start anklicken um von vorne loszulegen.";
			// Alle Fragen durch: Buttons verstecken
			
		}
		else {	// weiter mit Anzeigen
			displayFrage();
		}
	}

	function updateErgebnis(){// Richtig und Falsch kalkuliert und als Prozentangabe
	//	aktKarte wird von weiter() und proof() gesteuert	
		
		if (aktKarte > total)aktKarte = total;
		
		if ((aktKarte >= 1) && (aktKarte <= total+1)){ // zwischen 1 und Länge Array von Null
			reflfdKarte.innerHTML = "Karte   : " + aktKarte;
			refErgebnis.innerHTML = "Ergebnis: " + aktErgebnis   + " / " + total;
		}
	}

	function displayFrage(){ //zeigt Frage und Antwort passend an

	// Zufallszahl auswählen 
	dsbcheck = Math.round(Math.random()*(nq.length-1)); //NQ nicht NG

	// Ausgewählter Eintrag aus den Arrays löschen, 
	// so dass sie beim nächsten Durchlauf nicht erscheinen.
	// Die Länge des Arrays nq.length wird automatisch um 1 reduziert. 
		refFrage.innerHTML      = nq.splice(dsbcheck,1);  //anzeigen
		var chosena1            = na1.splice(dsbcheck,1); //zuweisen
		refAntwort[1].innerHTML = chosena1;               //anzeigen
		var chosena2            = na2.splice(dsbcheck,1); //zuweisen
		refAntwort[2].innerHTML = chosena2;               //anzeigen
		var chosena3            = na3.splice(dsbcheck,1); //zuweisen
		refAntwort[3].innerHTML = chosena3;               //anzeigen
		pruefe[1]               = nl1.splice(dsbcheck,1); //zuweisen
		pruefe[2]               = nl2.splice(dsbcheck,1); //zuweisen
		pruefe[3]               = nl3.splice(dsbcheck,1); //zuweisen
	}

	function dsbweiter(){ // Vorwärts und show-dsb()
//		if(aktProzent < 100) return
		aktErgebnis++;
		aktKarte++; // Aktuelle Karte hochzählen
		show01dsb();
	}

	function proof(){// Überprüfen 

	let antw1 = true;
	let antw2 = true;
	let antw3 = true;
	let cbox1 = true;
	let cbox2 = true;
	let cbox3 = true;

	// Arraywert auf normale Variable zuweisen

	antw1 = (pruefe[1].toString() == "true") ? true : false;
	antw2 = (pruefe[2].toString() == "true") ? true : false;
	antw3 = (pruefe[3].toString() == "true") ? true : false;
		
	cbox1 = refCheck[1].checked; cbox2 = refCheck[2].checked; cbox3 = refCheck[3].checked; // Verkürzung und kein Array mehr
	
	aktProzent = 0;	// Bei jeder Prüfung Null
	
	// Wahr ist: wenn beide Werte True oder False sind, 
	// bedeutet Angekreuzt plus Antwort ist richtig
	// oder nicht Angekreuzt und Antwort ist falsch

	// Anzeige ob Treffer oder nicht 

		pruefung(1, cbox1, antw1);
		pruefung(2, cbox2, antw2);
		pruefung(3, cbox3, antw3);
	}

	function pruefung(nr, cbox, antw){
	var nr, cbox, antw; //Antwort und true oder false

		if((!cbox && !antw) || (cbox && antw)) {
			refAntwort[nr].style.color ="green";
			aktProzent += 33.33;
		} 
		else {
			refAntwort[nr].style.color ="blue";
			refCheck[nr].checked = false;
		}
		refProzent.innerHTML = "Prozent : " + Math.round(aktProzent) + "%";
	}
}