
'use strict';

var oLastUrl = null;

function alleFragen(intKarte){
	
switch (intKarte) {

	case 0:
		Frage = 'Wie können Verstöße gegen die Datenschutzgrundverordnung geahndet werden?';
		Antwort[0] = ['Mit einer Geldbuße'];
		Antwort[1] = ['Strafrechtlich'];
		Antwort[2] = ['Arbeitsrechtlich'];
		Loesung = [true, true, true]; 
	break;
	case 1 :
		Frage = 'Sollte vor der eigentlichen Auditierung ein Einführungsgespräch stattfinden?'; 
		Antwort[0] = ['Ja, um offene Fragen zu klären.'];
		Antwort[1] = ['Nein, das sollte auf jeden Fall unterbleiben, um die Auditierung nicht zu beeinflussen.'];
		Antwort[2] = ['Ja, um Sinn und Zweck des Audits darzulegen.'];
		Loesung = [true, false, true];
	break;
	case 2 :
		Frage = 'Die europäische DSGVO ist anzuwenden, wenn...';
		Antwort[0] = ['die verantwortliche Stelle ihren Sitz in Deutschland hat.'];
		Antwort[1] = ['die verantwortliche Stelle mit Sitz in Frankreich über eine Niederlassung in Deutschland verfügt und diese Niederlassung Datenerhebungen durchführt.'];
		Antwort[2] = ['die verantwortliche Stelle ihren Sitz in einem EWR-Mitgliedsstaat mit Niederlassungen in Deutschland hat.'];
		Loesung = [true, true, true];
	break;
	case 3 :
		Frage = 'Der Datenschutzbeauftragte darf neben dieser Funktion...';
		Antwort[0] = ['jede andere Tätigkeit im Unternehmen ausüben.'];
		Antwort[1] = ['keine anderen Tätigkeiten im Unternehmen ausführen.'];
		Antwort[2] = ['nur solche Aufgaben übernehmen, deren Wahrnehmung zu keiner Interessenkollision führt.']
		Loesung = [false, false, true];	
	break;
	case 4 :
		Frage = 'Ein Ingenieurbüro bietet einem Kunden den Einsatz eines Spezialisten zur Unterstützung an. Der Kunde erhält hierzu ein Angebot mit dem Qualifikationsprofil des vorgesehenen Mitarbeiters (Name, Ausbildungsgang, berufliche Erfahrungen, etc.). Dieses Qualifikationsprofil kann an den Kunden geleitet werden:';
		Antwort[0] = ['im Rahmen der Zweckbestimmung des Arbeitsvertrages'];
		Antwort[1] = ['mit Zustimmung des Mitarbeiters'];
		Antwort[2] = ['ohne Zustimmung des Mitarbeiters'];
		Loesung = [true,true,false];		
	break;
	case 5 :
		Frage = 'Welche Stellen gelten als „nicht-öffentlich“ im Sinne der Datenschutzgrundverordnung?';
		Antwort[0] = ['Verwaltung der Stadt Kiel'];
		Antwort[1] = ['Tennis Verband Norddeutschland e.V.'];
		Antwort[2] = ['Deutsche Rentenversicherung Bund'];
		Loesung = [false, true, false];		
	break;
	case 6 :
		Frage = 'Die Erhebung, Verarbeitung und Nutzung von personenbezogenen Daten ist zulässig, wenn...';
		Antwort[0] = ['die Datenschutzgrundverordnung (DSGVO) dies erlaubt.'];
		Antwort[1] = ['andere Rechtsvorschriften dies anordnen oder erlauben.'];
		Antwort[2] = ['der Betroffene eingewilligt hat.'];
		Loesung = [true, true, true];	
	break;
	case 7 :
		Frage = 'Ein Softwareunternehmen hat seinen Sitz in Indien und erhebt personenbezogene Daten zu Werbezwecken in Deutschland. Welche Rechtsgrundlage gilt?';
		Antwort[0] = ['Das Datenschutzabkommen der EU mit der indischen Regierung'];
		Antwort[1] = ['Die DSGVO'];
		Antwort[2] = ['keine der genannten Rechtsgrundlagen'];
		Loesung = [false, true, false];	
	break;
	case 8 :
		Frage = 'Beschreiben Sie den klassischen Ablauf eines Datenschutz-Audits.';
		Antwort[0] = ['Vorbereitung'];
		Antwort[1] = ['Durchführung'];
		Antwort[2] = ['Auswertung '];
		Loesung = [true, true, true];		
	break;
	case 9 :
		Frage = 'Der Datenschutz-Auditor…';
		Antwort[0] = ['weist auf datenschutzrechtliche Missstände im Unternehmen hin.'];
		Antwort[1] = ['ist berechtigt, den weiteren Einsatz von DV-Anwendungen im Unternehmen bei fehlender Rechtsgrundlage zu verbieten.'];
		Antwort[2] = ['ist berechtigt, bei Bedarf die Aufsichtsbehörde zur Klärung einzuschalten.'];
		Loesung = [true, false, false];		
	break;
	case 10 :
		Frage = 'Die Veröffentlichung von Personaldaten (Vorname, Name, Funktion im Unternehmen, dienstliche Telefonnummer und Email-Adresse) auf der Webseite eines Unternehmens...';
		Antwort[0] = ['ist zulässig, wenn die Nutzung dieser Daten zur Erfüllung des Geschäftszweckes im Rahmen der Zweckbestimmung der Arbeitsverhältnisses liegt. Art6'];
		Antwort[1] = ['ist zulässig, wenn die Einwilligung des Betroffenen vorliegt.'];
		Antwort[2] = ['bedarf immer der Einwilligung der Betroffenen.'];
		Loesung = [true, true, false];		
	break;
	case 11 :
		Frage = 'Zu den mit der automatisierten Verarbeitung personenbezogener Daten beschäftigten Personen in einem Unternehmen zählen folgende Personengruppen:';
		Antwort[0] = ['freie Mitarbeiter'];
		Antwort[1] = ['Praktikanten mit einer Praktikantenzeit von maximal 4 Wochen'];
		Antwort[2] = ['Leiharbeiter'];
		Loesung = [true, true, true];	
	break;
	case 12 :
		Frage = 'Welche/s Gewährleistungsziel/e muss/müssen mit technischen oder organisatorischen Maßnahmen gesichert werden?';
		Antwort[0] = ['Vertraulichkeit'];
		Antwort[1] = ['Verschlüsselung'];
		Antwort[2] = ['Verfügbarkeit '];
		Loesung = [true, true, true];		
	break;
	case 13 :
		Frage = 'Ein Mitarbeiter legt auf einem Personalcomputer seines Unternehmens mit Hilfe einer Tabellenkalkulationssoftware eine Geburtstagsliste an und nimmt hier Anschriften, Telefonnummern, Geburtstage und Hobby naher Angehöriger und guter Freunde auf. Auf was ist zu achten?';
		Antwort[0] = ['Die Nutzung des Personalcomputer für private Zwecke muss im Unternehmen erlaubt oder geduldet sein.'];
		Antwort[1] = ['Für dienstliche Zwecke dürfen diese Daten nicht verwendet werden.'];
		Antwort[2] = ['Der Datenschutzbeauftragte des Arbeitgebers muss dem zustimmen.'];
		Loesung = [true, true, false];	
	break;
	case 14 :
		Frage = 'Welcher aus dem IT Grundschutzkompendium bekannte Eintrag verweist auf das SDM?';
		Antwort[0] = ['INF.10'];
		Antwort[1] = ['ORP.3'];
		Antwort[2] = ['CON.2 '];
		Antwort[3] = ['DER.1'];
		Loesung = [false, false, true, false];	
	break;
	case 15 :
		Frage = 'Unter anderem bezieht sich der Anwendungsbereich der ISO 19011:2011 auf First-Party-Audits (interne Audits). Wie ist der Aufbau der Norm? Sortieren Sie die Begriffe in die richtige Reihenfolge.';
		Antwort[0] = ['Kompetenz und Bewertung von Auditoren'];
		Antwort[1] = ['Durchführung eines Audits'];
		Antwort[2] = ['Anwendungsbereich'];
		Antwort[3] = ['Leiten und Lenken eines Auditprogramms'];
		Antwort[4] = ['Begriffe'];
		Antwort[5] = ['Auditprinzipien'];
		Antwort[6] = ['Normative Verweisungen'];
		Loesung = [true, true, true, true, true, true];
	break;
	case 16 :
		Frage = 'Nennen Sie die sieben typischen Auditaktivitäten in der richtigen Reihenfolge. (Nummer und Bezeichnung) ';
		Antwort[0] = ['Planen (Zeitplan…)'];
		Antwort[1] = ['Prüfen (Dokumente, Unterlagen)'];
		Antwort[2] = ['Vorbereitung'];
		Antwort[3] = ['Audittätigkeit vor Ort'];
		Antwort[4] = ['Auditbericht'];
		Antwort[5] = ['Abschluss des Berichts'];
		Antwort[6] = ['Mängelbehebung (nach Vereinbarung)'];
		Loesung = [true, true, true, true, true, true, true];
	break;
	case 17 :
		Frage = 'Was verstehen Sie unter dem Begriff „Audit-Evidenz“?';
		Antwort[0] = ['Auszeichnungen, Aufsätze zu Theorien oder andere Information, die verifizierbar und für die Auditkriterien relevant sind'];
		Antwort[1] = ['Aufzeichnungen, Aussagen zu Fakten oder andere Information, die verifizierbar und für die Auditkriterien relevant sind'];
		Antwort[2] = ['Aufzeichnungen, Aussagen zu Fakten oder andere Information, die vorliegen und für die Auditkriterien irrelevant sind'];
		Loesung = [false, true, false];
	break;
	case 18 :
		Frage = 'Wer bewertet die Konformität einer Anforderungsnorm (in Europa) mit?';
		Antwort[0] = ['IAF'];
		Antwort[1] = ['FIA'];
		Antwort[2] = ['IFA'];
		Antwort[3] = ['DAkkS'];
		Loesung = [true, false, false, true];
	break;
	case 19 :
		Frage = 'Stellen Sie bitte die sieben Begriffe aus der High Level Structure (HLS) der ISO (9001) Normen in der richtigen Reihenfolge dar. (Nummer und Bezeichnung z.B. 1. Bezeichnung)';
		Antwort[0] = ['Kontext Org'];
		Antwort[1] = ['Führung'];
		Antwort[2] = ['Planung'];
		Antwort[3] = ['Unterstützung'];
		Antwort[4] = ['Betrieb'];
		Antwort[5] = ['Bewertung der Leistung'];
		Antwort[6] = ['Verbesserung'];
		Loesung = [true,true,true,true,true,true,true];
	break;
	case 20 :
		Frage = 'Nennen Sie die technischen und organisatorischen Maßnahmen gem. Art. 32 Abs. 1 DSGVO für Verantwortliche (Art. 30 Abs. 1 lit. g) und Auftragsverarbeiter (Art. 30 Abs. 2 lit. d).' 
		Antwort[0] = ['Pseudonymisierung'];
		Antwort[1] = ['Verschlüsselung'];
		Antwort[2] = ['Gewährleistung der Vertraulichkeit'];
		Antwort[3] = ['Gewährleistung der Integrität'];
		Antwort[4] = ['Gewährleistung der Verfügbarkeit'];
		Antwort[5] = ['Gewährleistung der Belastbarkeit der Systeme'];
		Antwort[6] = ['Verfahren zur Wiederherstellung der Verfügbarkeit personenbezogener Daten nach einem physischen oder technischen Zwischenfall'];
		Antwort[7] = ['Verfahren regelmäßiger Überprüfung, Bewertung und Evaluierung der Wirksamkeit der technischen und organisatorischen Maßnahmen'];
		Loesung = [true, true, true, true, true, true, true, true];
	break;
	case 21 :
		Frage = 'Wer legt die sogenannte Prüftiefe bei einem Audit fest?';
		Antwort[0] = ['Auditor'];
		Antwort[1] = ['Geschäftsführer'];
		Antwort[2] = ['Vorstand'];
		Antwort[3] = ['Deutsche Akkreditierungsstelle'];
		Loesung = [true, false, false, false];
	break;
	case 22 :
		Frage = 'Was sind die möglichen Inhalte eines Datenschutzkonzeptes? ';
		Antwort[0] = ['Dokumentation'];
		Antwort[1] = ['Organisatorische Mindestregelungen'];
		Antwort[2] = ['Datenschutzpolitik und Verantwortlichkeiten im Unternehmen'];
		Antwort[3] = ['Rechtliche Rahmenbedingungen im Unternehmen'];
		Antwort[4] = ['Bestehende technische und organisatorische Maßnahmen']; 
		Loesung = [true, true, true, true, true];
	break;
	case 23 :
		Frage = 'Welche Anforderungen sollte ein Datenschutzmanagementsystem enthalten?';
		Antwort[0] = ['Ausrichtung & Ziele des Unternehmens'];
		Antwort[1] = ['Kundenanforderungen'];
		Antwort[2] = ['Regulatorische & gesetzliche Anforderungen'];
		Antwort[3] = ['Unternehmensfähigkeiten'];
		Loesung = [true, true, true, true];
	break;
	case 24 :
		Frage = 'Welche Anforderungen werden an einen internen Auditor gestellt? ';
		Antwort[0] = ['Kompetenz'];
		Antwort[1] = ['Objektivität'];
		Antwort[2] = ['Unabhängigkeit'];
		Antwort[3] = ['Kommunikation'];
		Antwort[4] = ['Moderation'];
		Loesung = [true, true, true, true, true];
	break;
	case 25 :
		Frage = 'Was ist die Datenschutz-Grundverordnung?';
		Antwort[0] = ['Europäische Regelung des Datenschutzrechts'];
		Antwort[1] = ['Weltweite Regelung des Datenschutzrechts'];
		Antwort[2] = ['Bundesdeutsche Regelung des Datenschutzrechts'];
		Loesung = [true, false, false];
	break;
	case 26 :
		Frage = 'Wer kann „in der Regel“ zum Datenschutzbeauftragten bestellt werden?';
		Antwort[0] = ['Leiter der Datenverarbeitung'];
		Antwort[1] = ['Leiter der Logistik'];
		Antwort[2] = ['Geschäftsführer einer GmbH'];
		Loesung = [false, true, false];
	break;
	case 27 :
		Frage = 'Nennen Sie die Bestandteile eines Zwischenberichts zum Datenschutz-Audit.';
		Antwort[0] = ['Name des Unternehmens '];
		Antwort[1] = ['Name des Auditors'];
		Antwort[2] = ['Ergebnisse des Audits (nach DSGVO, BDSG)'];
		Loesung = [true, true, true];
	break;
	case 28 :
		Frage = 'Was sind personenbezogene Daten in einer Lieferantendatei?';
		Antwort[0] = ['Firmenname und Ort von anderen Kunden (GmbHs) der Lieferanten (keine Einzel-GmbHs)'];
		Antwort[1] = ['Daten über die Geschäftsführer der Lieferanten und deren Hobby'];
		Antwort[2] = ['Allgemeine Geschäftsbedingungen der Lieferanten'];
		Loesung = [false, true, false];
	break;
	case 29 :
		Frage = 'Ist kein Datenschutzbeauftragter zu bestellen, so...';
		Antwort[0] = ['muss keine Übersicht der Verarbeitungen geführt werden.'];
		Antwort[1] = ['muss eine Übersicht der Verarbeitungen erstellt werden.'];
		Antwort[2] = ['ist der Leiter der Datenverarbeitung automatisch für die Aufgaben des Datenschutzbeauftragten zuständig.'];
		Loesung = [false, true, false];
	break;
	case 30 :
		Frage = 'Dritter ist...';
		Antwort[0] = ['eine Tochtergesellschaft soweit diese nicht Auftragsverarbeiter ist.'];
		Antwort[1] = ['die Konzernmutter in Japan, wenn ihr 95% der verantwortlichen Stelle gehören.'];
		Antwort[2] = ['jede Person der verantwortlichen Stelle außer dem Betroffenen.'];
		Loesung = [true, true, false];
	break;
	case 31 :
		Frage = 'Welches Dokument sollte im Rahmen eines Voraudits eingesehen werden?';
		Antwort[0] = ['Richtlinien und Regeln, gegebenenfalls Verträge mit Kunden und Lieferanten'];
		Antwort[1] = ['Organigramm des Unternehmens'];
		Antwort[2] = ['das Verfahrensverzeichnis'];
		Loesung = [true, true, true];
	break;
	case 32 :
		Frage = 'Nennen Sie drei Forderungen, die an eine rechtskonforme Einwilligung zu stellen sind.';
		Antwort[0] = ['Freiwilligkeit'];
		Antwort[1] = ['Zweckbindung'];
		Antwort[2] = ['Widerspruchsmöglichkeit'];
		Antwort[3] = ['Kopplungsverbot'];
		Loesung = [true, true, true, true];
	break;
	case 33 :
		Frage = 'Wann ist eine Datenschutzfolgeabschätzung insbesondere erforderlich?';
		Antwort[0] = ['bei jeder seit Mai 2009 neu geplanten automatisierten Verarbeitung von personenbezogenen Daten'];
		Antwort[1] = ['bei systematischer und umfassender Bewertung persönlicher Aspekte natürlicher Personen, die auf automatisierte Verarbeitung einschließlich Profiling gründet und die ihrerseits als Grundlage für Entscheidungen dient, die Rechtswirkung gegenüber natürlichen Personen entfalten oder diese in ähnlich erheblicher Weise beeinträchtigen'];
		Loesung = [false, true];
	break;
	
} // Switch Ende
	
	anzAntworten = Loesung.length; // Wird benötigt für Liste und Maske
	
	if (flagListe) return;

let y = 0;
let anzAnt = "";
let anzVer = "";

	document.getElementById("dsaFrage").innerHTML = Frage; 
	
	for (y = 0; y < anzAntworten; y++){
		anzAnt = "antwort"+y;
		document.getElementById(anzAnt).innerHTML = Antwort[y]; 

	}	
	for (y = anzAntworten; y < maxAntworten; y++){
		anzAnt = "antwort"+y;
		anzVer = "versteck"+y;
		document.getElementById(anzVer).style.visibility = "hidden"; 
		document.getElementById(anzVer).style.borderBottom  = "solid white";
		document.getElementById(anzAnt).style.visibility = "hidden"; 
		document.getElementById(anzAnt).style.borderBottom  = "solid white";
	}	
	scroll(0,0); // Experiment

} // Funktion Ende

function DSBFragen(intKarte){
	
switch (intKarte) {
	case 0:
		Frage = 'Die DSGVO ist für die Verantwortlichen zwingend ab wann zu beachten?';
		Antwort[0] = ['Verstöße gegen die DSGVO können von den Behörden auch vor dem 25.05.2018 sanktioniert werden.'];
		Antwort[1] = ['Am 24.05.2016 und unmittelbar anwendbar'];
		Antwort[2] = ['Die DSGVO ist am 24.05.2016 in Kraft getreten, verbindlich anzuwenden erst ab dem 25.05.2018'];
		Loesung = [false, false, true]; 
	break; 
	case 1:
		Frage = 'Die Datenschutzgrundverordnung ...';
		Antwort[0] = ['... gilt unmittelbar in allen Mitgliedstaaten.'];
		Antwort[1] = ['... enthält Öffnungsklauseln, welche es den Mitgliedstaaten ermöglichen, im Rahmen der DSGVO ergänzend eigene Datenschutzvorschriften zu erlassen.'];
		Antwort[2] = ['... muss erst in eigenes Recht (BDSG) umgesetzt werden und gilt dann unmittelbar.'];
		Loesung = [true, true, false]; 
	break; 
	case 2:
		Frage = 'Anonymisierte Daten ...';
		Antwort[0] = ['fallen in den Schutzbereich der DSGVO.'];
		Antwort[1] = ['fallen nicht in den Schutzbereich der DSGVO.'];
		Antwort[2] = ['werden in Art. 5 DSGVO definiert.'];
		Loesung = [false, true, false]; 
	break; 
	case 3:
		Frage = 'Das neue Bundesdatenschutzgesetz (BDSG neu) ...';
		Antwort[0] = ['... ist mit Wirkung zum 25.05.2018 angepasst worden und ist Teil des Datenschutz-Anpassungs- u. Umsetzungsgesetzes (DSAnpUG-EU).'];
		Antwort[1] = ['... setzt die DSGVO um.'];
		Antwort[2] = ['... spezifiziert in Teil 1 und 2 datenschutzrechtliche Regelungen entsprechend der Öffnungsklauseln der DSGVO.'];
		Loesung = [true, false, false]; 
	break; 
	case 4:
		Frage = 'In welchem Zeitraum sind die Betroffenenrechte vom Verantwortlichen zu erfüllen?';
		Antwort[0] = ['innerhalb von 42 Tagen ab Geltendmachung der Betroffenenrechte.'];
		Antwort[1] = ['innerhalb von 24 Stunden nach Eingang des Antrags des Betroffenen mit der Option, diese Frist auf 72 Stunden zu verlängern.'];
		Antwort[2] = ['unverzüglich bzw. grundsätzlich innerhalb von einem Monat'];
		Loesung = [false, false, true]; 
	break; 
	case 5:
		Frage = 'Welche Grundsätze benennt die DSGVO?';
		Antwort[0] = ['Rechtmäßigkeit, Verarbeitung nach Treu und Glauben, Transparenz.'];
		Antwort[1] = ['Zweckbindung, Datenminimierung, Richtigkeit.'];
		Antwort[2] = ['Speicherbegrenzung, Integrität und Vertraulichkeit, Rechenschaftspflicht.'];
		Loesung = [true, true, true]; 
	break; 
	case 6:
		Frage = 'Welche wesentlichen Voraussetzungen müssen entsprechend der DSGVO vorliegen, damit eine Person zum Datenschutzbeauftragten (DSB) benannt werden kann?';
		Antwort[0] = ['Der DSB erfüllt die Mindestanforderungen für den Datenschutz an Fachkunde und Unabhängigkeit nach § 7 BDSG.'];
		Antwort[1] = ['Insbesondere wird der DSB aufgrund seines IT-Fachwissens, das er zur Erfüllung seiner Aufgaben benötigt, benannt'];
		Antwort[2] = ['Der DSB besitzt die Fähigkeiten zur Erfüllung der in Artikel 39 genannten Aufgaben.'];
		Loesung = [true, false, true]; 
	break; 
	case 7:
		Frage = 'Sie prüfen eine schriftliche Einwilligung gem. Art. 7 DSGVO des Betroffenen zur Datenerhebung. Worauf müssen Sie achten, damit diese Einwilligung formal-juristisch korrekt ist?';
		Antwort[0] = ['Der Verantwortliche sollte nachweisen können, dass die betroffene Person ihre Einwilligung zu dem Verarbeitungsvorgang gegeben hat.'];
		Antwort[1] = ['Die Einwilligung erfolgte <strong>freiwillig</strong>, <strong>zwanglos</strong> und <strong>nachweislich</strong>.'];
		Antwort[2] = ['Die Einwilligung kann jederzeit, durch die betroffene Person, widerrufen werden.'];
		Loesung = [true, true, true]; 
	break; 
	case 8:
		Frage = 'Muss der Verantwortliche im Falle einer Datenerhebung beim Betroffenen seinen Informationspflichten nachkommen? Und wenn, wann?';
		Antwort[0] = ['Ja'];
		Antwort[1] = ['Nein'];
		Antwort[2] = ['Innerhalb von 72 Stunden bzw. innerhalb eines Monats'];
		Loesung = [true, false, false];  
	break; 
	case 9:
		Frage = 'Erläutern Sie den Begriff <strong>Pseudonymisieren</strong>.';
		Antwort[0] = ['Austausch der personenbezogenen Daten, so dass eine Nachvollziehbarkeit für Dritte ausgeschlossen ist und nicht mehr spezifisch betroffenen Personen zugeordnet werden kann.'];
		Antwort[1] = ['Bei der Pseudonymisierung wird der Name durch ein Pseudonym, zum Beispiel eine Chiffre oder Hash-Code, ersetzt. Diese zusätzlichen Informationen werden gesondert aufbewahrt und unterliegen technischen und organisatorischen Maßnahmen, die gewährleisten, dass eine Re-Pseudonymisierung nur noch eingeschränkt möglich ist.'];
		Antwort[2] = ['Die pseudonymisierten Daten unterliegen nicht mehr der DSGVO, da diese Daten nicht einer identifizierten oder identifizierbaren natürlichen Person zugewiesen werden können.'];
		Loesung = [true, true, false];  
	break; 	
	
} // Switch Ende

	anzAntworten = Loesung.length; // Wird benötigt für Liste und Maske
	
	if (flagListe) return;

let y = 0;
let anzAnt = "";
let anzVer = "";

	document.getElementById("dsaFrage").innerHTML = Frage;     
	
	for (y = 0; y < anzAntworten; y++){
		anzAnt = "antwort"+y;
		document.getElementById(anzAnt).innerHTML = Antwort[y]; 

	}	
	for (y = anzAntworten; y < maxAntworten; y++){
		anzAnt = "antwort"+y;
		anzVer = "versteck"+y;
		document.getElementById(anzVer).style.visibility = "hidden"; 
		document.getElementById(anzVer).style.borderBottom  = "solid white";
		document.getElementById(anzAnt).style.visibility = "hidden"; 
		document.getElementById(anzAnt).style.borderBottom  = "solid white";
	}	
	scroll(0,0); // Experiment

} // Funktion Ende


 
function OnDownloadFile(){
    var sText, oBlob, elLink;
     
    // Letzte Objekt-URL löschen (falls vorhanden)
    if (oLastUrl == null){
        window.URL.revokeObjectURL(oLastUrl);
        oLastUrl = null;
    }

	sText = "<!DOCTYPE html>\r\n<html lang='en'>\r\n<head>\r\n<meta charset='utf-8'>\r\n<title>Testfile</title>\r\n<meta name='author' content='Axel Larator'>\r\n<meta name='description' content='Liste Flashcard'>\r\n<meta name='viewport' content='width=device-width, initial-scale=1.0'>\r\n<link rel='stylesheet' href='/css/custom.css'>\r\n<link rel='stylesheet' href='/css/flash01-dsa.css'>\r\n</head>\r\n<body>\r\n"


    sText = sText + '---\r\n' + 'title: Liste\r\n' + 'author: Blog Author\r\n' + '---\r\n'; // Kopie anlegen
	sText = sText + dsaListe01(1) + '</body>\r\n</html>\r\n'; // Inhalt Liste DSA erzeugen
 
    // Blob-Objekt erzeugen
    oBlob = new Blob([ sText ], { type: "text/html" });
     
        // Download-Element laden
        // elLink = zeigt auf richtiges directory

		elLink = document.getElementById("downloadLink");
         
        // URL erzeugen und merken
        oLastUrl = window.URL.createObjectURL(oBlob);
         
        // URL dem HTML-Element zuweisen
        elLink.href = oLastUrl;
        
		// var openingPreview = browser.tabs.printPreview();
        
		// Klick auslösen
        elLink.click();
		
		// oLastUrl = window.URL.revokeObjectURL(oBlob);
}
	