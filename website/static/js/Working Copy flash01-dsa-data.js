
'use strict';

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
		Frage.innerHTML = 'Sollte vor der eigentlichen Auditierung ein Einführungsgespräch stattfinden?'; 
		Antwort[0].innerHTML = ['Ja, um offene Fragen zu klären.'];
		Antwort[1].innerHTML = ['Nein, das sollte auf jeden Fall unterbleiben, um die Auditierung nicht zu beeinflussen.'];
		Antwort[2].innerHTML = ['Ja, um Sinn und Zweck des Audits darzulegen.'];
		Loesung = [true, false, true];
	break;
	case 2 :
		Frage.innerHTML = 'Die europäische DSGVO ist anzuwenden, wenn...';
		Antwort[0].innerHTML = ['die verantwortliche Stelle ihren Sitz in Deutschland hat.'];
		Antwort[1].innerHTML = ['die verantwortliche Stelle mit Sitz in Frankreich über eine Niederlassung in Deutschland verfügt und diese Niederlassung Datenerhebungen durchführt.'];
		Antwort[2].innerHTML = ['die verantwortliche Stelle ihren Sitz in einem EWR-Mitgliedsstaat mit Niederlassungen in Deutschland hat.'];
		Loesung = [true, true, true];
	break;
	case 3 :
		Frage.innerHTML = 'Der Datenschutzbeauftragte darf neben dieser Funktion...';
		Antwort[0].innerHTML = ['jede andere Tätigkeit im Unternehmen ausüben.'];
		Antwort[1].innerHTML = ['keine anderen Tätigkeiten im Unternehmen ausführen.'];
		Antwort[2].innerHTML = ['nur solche Aufgaben übernehmen, deren Wahrnehmung zu keiner Interessenkollision führt.']
		Loesung = [false, false, true];	
	break;
	case 4 :
		Frage.innerHTML = 'Ein Ingenieurbüro bietet einem Kunden den Einsatz eines Spezialisten zur Unterstützung an. Der Kunde erhält hierzu ein Angebot mit dem Qualifikationsprofil des vorgesehenen Mitarbeiters (Name, Ausbildungsgang, berufliche Erfahrungen, etc.). Dieses Qualifikationsprofil kann an den Kunden geleitet werden:';
		Antwort[0].innerHTML = ['im Rahmen der Zweckbestimmung des Arbeitsvertrages'];
		Antwort[1].innerHTML = ['mit Zustimmung des Mitarbeiters'];
		Antwort[2].innerHTML = ['ohne Zustimmung des Mitarbeiters'];
		Loesung = [true,true,false];		
	break;
	case 5 :
		Frage.innerHTML = 'Welche Stellen gelten als „nicht-öffentlich“ im Sinne der Datenschutzgrundverordnung?';
		Antwort[0].innerHTML = ['Verwaltung der Stadt Kiel'];
		Antwort[1].innerHTML = ['Tennis Verband Norddeutschland e.V.'];
		Antwort[2].innerHTML = ['Deutsche Rentenversicherung Bund'];
		Loesung = [false, true, false];		
	break;
	case 6 :
		Frage.innerHTML = 'Die Erhebung, Verarbeitung und Nutzung von personenbezogenen Daten ist zulässig, wenn...';
		Antwort[0].innerHTML = ['die Datenschutzgrundverordnung (DSGVO) dies erlaubt.'];
		Antwort[1].innerHTML = ['andere Rechtsvorschriften dies anordnen oder erlauben.'];
		Antwort[2].innerHTML = ['der Betroffene eingewilligt hat.'];
		Loesung = [true, true, true];	
	break;
	case 7 :
		Frage.innerHTML = 'Ein Softwareunternehmen hat seinen Sitz in Indien und erhebt personenbezogene Daten zu Werbezwecken in Deutschland. Welche Rechtsgrundlage gilt?';
		Antwort[0].innerHTML = ['Das Datenschutzabkommen der EU mit der indischen Regierung'];
		Antwort[1].innerHTML = ['Die DSGVO'];
		Antwort[2].innerHTML = ['keine der genannten Rechtsgrundlagen'];
		Loesung = [false, true, false];	
	break;
	case 8 :
		Frage.innerHTML = 'Beschreiben Sie den klassischen Ablauf eines Datenschutz-Audits.';
		Antwort[0].innerHTML = ['Vorbereitung'];
		Antwort[1].innerHTML = ['Durchführung'];
		Antwort[2].innerHTML = ['Auswertung '];
		Loesung = [true, true, true];		
	break;
	case 9 :
		Frage.innerHTML = 'Der Datenschutz-Auditor…';
		Antwort[0].innerHTML = ['weist auf datenschutzrechtliche Missstände im Unternehmen hin.'];
		Antwort[1].innerHTML = ['ist berechtigt, den weiteren Einsatz von DV-Anwendungen im Unternehmen bei fehlender Rechtsgrundlage zu verbieten.'];
		Antwort[2].innerHTML = ['ist berechtigt, bei Bedarf die Aufsichtsbehörde zur Klärung einzuschalten.'];
		Loesung = [true, false, false];		
	break;
	case 10 :
		Frage.innerHTML = 'Die Veröffentlichung von Personaldaten (Vorname, Name, Funktion im Unternehmen, dienstliche Telefonnummer und Email-Adresse) auf der Webseite eines Unternehmens...';
		Antwort[0].innerHTML = ['ist zulässig, wenn die Nutzung dieser Daten zur Erfüllung des Geschäftszweckes im Rahmen der Zweckbestimmung der Arbeitsverhältnisses liegt. Art6'];
		Antwort[1].innerHTML = ['ist zulässig, wenn die Einwilligung des Betroffenen vorliegt.'];
		Antwort[2].innerHTML = ['bedarf immer der Einwilligung der Betroffenen.'];
		Loesung = [true, true, false];		
	break;
	case 11 :
		Frage.innerHTML = 'Zu den mit der automatisierten Verarbeitung personenbezogener Daten beschäftigten Personen in einem Unternehmen zählen folgende Personengruppen:';
		Antwort[0].innerHTML = ['freie Mitarbeiter'];
		Antwort[1].innerHTML = ['Praktikanten mit einer Praktikantenzeit von maximal 4 Wochen'];
		Antwort[2].innerHTML = ['Leiharbeiter'];
		Loesung = [true, true, true];	
	break;
	case 12 :
		Frage.innerHTML = 'Welche/s Gewährleistungsziel/e muss/müssen mit technischen oder organisatorischen Maßnahmen gesichert werden?';
		Antwort[0].innerHTML = ['Vertraulichkeit'];
		Antwort[1].innerHTML = ['Verschlüsselung'];
		Antwort[2].innerHTML = ['Verfügbarkeit '];
		Loesung = [true, true, true];		
	break;
	case 13 :
		Frage.innerHTML = 'Ein Mitarbeiter legt auf einem Personalcomputer seines Unternehmens mit Hilfe einer Tabellenkalkulationssoftware eine Geburtstagsliste an und nimmt hier Anschriften, Telefonnummern, Geburtstage und Hobby naher Angehöriger und guter Freunde auf. Auf was ist zu achten?';
		Antwort[0].innerHTML = ['Die Nutzung des Personalcomputer für private Zwecke muss im Unternehmen erlaubt oder geduldet sein.'];
		Antwort[1].innerHTML = ['Für dienstliche Zwecke dürfen diese Daten nicht verwendet werden.'];
		Antwort[2].innerHTML = ['Der Datenschutzbeauftragte des Arbeitgebers muss dem zustimmen.'];
		Loesung = [true, true, false];	
	break;
	case 14 :
		Frage.innerHTML = 'Welcher aus dem IT Grundschutzkompendium bekannte Eintrag verweist auf das SDM?';
		Antwort[0].innerHTML = ['INF.10'];
		Antwort[1].innerHTML = ['ORP.3'];
		Antwort[2].innerHTML = ['CON.2 '];
		Antwort[3].innerHTML = ['DER.1'];
		Loesung = [false, false, true, false];	
	break;
	case 15 :
		Frage.innerHTML = 'Unter anderem bezieht sich der Anwendungsbereich der ISO 19011:2011 auf First-Party-Audits (interne Audits). Wie ist der Aufbau der Norm? Sortieren Sie die Begriffe in die richtige Reihenfolge.';
		Antwort[0].innerHTML = ['Kompetenz und Bewertung von Auditoren 7 '];
		Antwort[1].innerHTML = ['Durchführung eines Audits 6'];
		Antwort[2].innerHTML = ['Anwendungsbereich 1'];
		Antwort[3].innerHTML = ['Leiten und Lenken eines Auditprogramms 5'];
		Antwort[4].innerHTML = ['Begriffe 3'];
		Antwort[5].innerHTML = ['Auditprinzipien 4'];
		Antwort[6].innerHTML = ['Normative Verweisungen 2'];
		Loesung = [true, true, true, true, true, true];
	break;
	case 16 :
		Frage.innerHTML = 'Nennen Sie die sieben typischen Auditaktivitäten in der richtigen Reihenfolge. (Nummer und Bezeichnung) ';
		Antwort[0].innerHTML = ['1. Planen (Zeitplan…)'];
		Antwort[1].innerHTML = ['2. Prüfen (Dokumente, Unterlagen)'];
		Antwort[2].innerHTML = ['3. Vorbereitung'];
		Antwort[3].innerHTML = ['4. Audittätigkeit vor Ort'];
		Antwort[4].innerHTML = ['5. Auditbericht'];
		Antwort[5].innerHTML = ['6. Abschluss des Berichts'];
		Antwort[6].innerHTML = ['7. Mängelbehebung (nach Vereinbarung)'];
		Loesung = [true, true, true, true, true, true, true];
	break;
	case 17 :
		Frage.innerHTML = 'Was verstehen Sie unter dem Begriff „Audit-Evidenz“?';
		Antwort[0].innerHTML = ['Auszeichnungen, Aufsätze zu Theorien oder andere Information, die verifizierbar und für die Auditkriterien relevant sind'];
		Antwort[1].innerHTML = ['Aufzeichnungen, Aussagen zu Fakten oder andere Information, die verifizierbar und für die Auditkriterien relevant sind'];
		Antwort[2].innerHTML = ['Aufzeichnungen, Aussagen zu Fakten oder andere Information, die vorliegen und für die Auditkriterien irrelevant sind'];
		Loesung = [false, true, false];
	break;
	case 18 :
		Frage.innerHTML = 'Wer bewertet die Konformität einer Anforderungsnorm (in Europa) mit?';
		Antwort[0].innerHTML = ['IAF'];
		Antwort[1].innerHTML = ['FIA'];
		Antwort[2].innerHTML = ['IFA'];
		Antwort[3].innerHTML = ['DAkkS'];
		Loesung = [true, false, false, true];
	break;
	case 19 :
		Frage.innerHTML = 'Stellen Sie bitte die sieben Begriffe aus der High Level Structure (HLS) der ISO (9001) Normen in der richtigen Reihenfolge dar. (Nummer und Bezeichnung z.B. 1. Bezeichnung)';
		Antwort[0].innerHTML = [' 4. Kontext Org'];
		Antwort[1].innerHTML = [' 5. Führung'];
		Antwort[2].innerHTML = [' 6. Planung'];
		Antwort[3].innerHTML = [' 7. Unterstützung'];
		Antwort[4].innerHTML = [' 8. Betrieb'];
		Antwort[5].innerHTML = [' 9. Bewertung der Leistung'];
		Antwort[6].innerHTML = ['10. Verbesserung'];
		Loesung = [true,true,true,true,true,true,true];
	break;
	case 20 :
		Frage.innerHTML = 'Nennen Sie die technischen und organisatorischen Maßnahmen gem. Art. 32 Abs. 1 DSGVO für Verantwortliche (Art. 30 Abs. 1 lit. g) und Auftragsverarbeiter (Art. 30 Abs. 2 lit. d).' 
		Antwort[0].innerHTML = ['Pseudonymisierung'];
		Antwort[1].innerHTML = ['Verschlüsselung'];
		Antwort[2].innerHTML = ['Gewährleistung der Vertraulichkeit'];
		Antwort[3].innerHTML = ['Gewährleistung der Integrität'];
		Antwort[4].innerHTML = ['Gewährleistung der Verfügbarkeit'];
		Antwort[5].innerHTML = ['Gewährleistung der Belastbarkeit der Systeme'];
		Antwort[6].innerHTML = ['Verfahren zur Wiederherstellung der Verfügbarkeit personenbezogener Daten nach einem physischen oder technischen Zwischenfall'];
		Antwort[7].innerHTML = ['Verfahren regelmäßiger Überprüfung, Bewertung und Evaluierung der Wirksamkeit der technischen und organisatorischen Maßnahmen'];
		Loesung = [true, true, true, true, true, true, true, true];
	break;
	case 21 :
		Frage.innerHTML = 'Wer legt die sogenannte Prüftiefe bei einem Audit fest?';
		Antwort[0].innerHTML = ['Auditor'];
		Antwort[1].innerHTML = ['Geschäftsführer'];
		Antwort[2].innerHTML = ['Vorstand'];
		Antwort[3].innerHTML = ['Deutsche Akkreditierungsstelle'];
		Loesung = [true, false, false, false];
	break;
	case 22 :
		Frage.innerHTML = 'Was sind die möglichen Inhalte eines Datenschutzkonzeptes? ';
		Antwort[0].innerHTML = ['Dokumentation'];
		Antwort[1].innerHTML = ['Organisatorische Mindestregelungen'];
		Antwort[2].innerHTML = ['Datenschutzpolitik und Verantwortlichkeiten im Unternehmen'];
		Antwort[3].innerHTML = ['Rechtliche Rahmenbedingungen im Unternehmen'];
		Antwort[4].innerHTML = ['Bestehende technische und organisatorische Maßnahmen']; 
		Loesung = [true, true, true, true, true];
	break;
	case 23 :
		Frage.innerHTML = 'Welche Anforderungen sollte ein Datenschutzmanagementsystem enthalten?';
		Antwort[0].innerHTML = ['Ausrichtung & Ziele des Unternehmens'];
		Antwort[1].innerHTML = ['Kundenanforderungen'];
		Antwort[2].innerHTML = ['Regulatorische & gesetzliche Anforderungen'];
		Antwort[3].innerHTML = ['Unternehmensfähigkeiten'];
		Loesung = [true, true, true, true];
	break;
	case 24 :
		Frage.innerHTML = 'Welche Anforderungen werden an einen internen Auditor gestellt? ';
		Antwort[0].innerHTML = ['Kompetenz'];
		Antwort[1].innerHTML = ['Objektivität'];
		Antwort[2].innerHTML = ['Unabhängigkeit'];
		Antwort[3].innerHTML = ['Kommunikation'];
		Antwort[4].innerHTML = ['Moderation'];
		Loesung = [true, true, true, true, true];
	break;
	case 25 :
		Frage.innerHTML = 'Was ist die Datenschutz-Grundverordnung?';
		Antwort[0].innerHTML = ['Europäische Regelung des Datenschutzrechts'];
		Antwort[1].innerHTML = ['Weltweite Regelung des Datenschutzrechts'];
		Antwort[2].innerHTML = ['Bundesdeutsche Regelung des Datenschutzrechts'];
		Loesung = [true, false, false];
	break;
	case 26 :
		Frage.innerHTML = 'Wer kann „in der Regel“ zum Datenschutzbeauftragten bestellt werden?';
		Antwort[0].innerHTML = ['Leiter der Datenverarbeitung'];
		Antwort[1].innerHTML = ['Leiter der Logistik'];
		Antwort[2].innerHTML = ['Geschäftsführer einer GmbH'];
		Loesung = [false, true, false];
	break;
	case 27 :
		Frage.innerHTML = 'Nennen Sie die Bestandteile eines Zwischenberichts zum Datenschutz-Audit.';
		Antwort[0].innerHTML = ['Name des Unternehmens '];
		Antwort[1].innerHTML = ['Name des Auditors'];
		Antwort[2].innerHTML = ['Ergebnisse des Audits (nach DSGVO, BDSG)'];
		Loesung = [true, true, true];
	break;
	case 28 :
		Frage.innerHTML = 'Was sind personenbezogene Daten in einer Lieferantendatei?';
		Antwort[0].innerHTML = ['Firmenname und Ort von anderen Kunden (GmbHs) der Lieferanten (keine Einzel-GmbHs)'];
		Antwort[1].innerHTML = ['Daten über die Geschäftsführer der Lieferanten und deren Hobby'];
		Antwort[2].innerHTML = ['Allgemeine Geschäftsbedingungen der Lieferanten'];
		Loesung = [false, true, false];
	break;
	case 29 :
		Frage.innerHTML = 'Ist kein Datenschutzbeauftragter zu bestellen, so...';
		Antwort[0].innerHTML = ['muss keine Übersicht der Verarbeitungen geführt werden.'];
		Antwort[1].innerHTML = ['muss eine Übersicht der Verarbeitungen erstellt werden.'];
		Antwort[2].innerHTML = ['ist der Leiter der Datenverarbeitung automatisch für die Aufgaben des Datenschutzbeauftragten zuständig.'];
		Loesung = [false, true, false];
	break;
	case 30 :
		Frage.innerHTML = 'Dritter ist...';
		Antwort[0].innerHTML = ['eine Tochtergesellschaft soweit diese nicht Auftragsverarbeiter ist.'];
		Antwort[1].innerHTML = ['die Konzernmutter in Japan, wenn ihr 95% der verantwortlichen Stelle gehören.'];
		Antwort[2].innerHTML = ['jede Person der verantwortlichen Stelle außer dem Betroffenen.'];
		Loesung = [true, true, false];
	break;
	case 31 :
		Frage.innerHTML = 'Welches Dokument sollte im Rahmen eines Voraudits eingesehen werden?';
		Antwort[0].innerHTML = ['Richtlinien und Regeln, gegebenenfalls Verträge mit Kunden und Lieferanten'];
		Antwort[1].innerHTML = ['Organigramm des Unternehmens'];
		Antwort[2].innerHTML = ['das Verfahrensverzeichnis'];
		Loesung = [true, true, true];
	break;
	case 32 :
		Frage.innerHTML = 'Nennen Sie drei Forderungen, die an eine rechtskonforme Einwilligung zu stellen sind.';
		Antwort[0].innerHTML = ['Freiwilligkeit'];
		Antwort[1].innerHTML = ['Zweckbindung'];
		Antwort[2].innerHTML = ['Widerspruchsmöglichkeit'];
		Antwort[3].innerHTML = ['Kopplungsverbot'];
		Loesung = [true, true, true, true];
	break;
	case 33 :
		Frage.innerHTML = 'Wann ist eine Datenschutzfolgeabschätzung insbesondere erforderlich?';
		Antwort[0].innerHTML = ['bei jeder seit Mai 2009 neu geplanten automatisierten Verarbeitung von personenbezogenen Daten'];
		Antwort[1].innerHTML = ['bei systematischer und umfassender Bewertung persönlicher Aspekte natürlicher Personen, die auf automatisierte Verarbeitung einschließlich Profiling gründet und die ihrerseits als Grundlage für Entscheidungen dient, die Rechtswirkung gegenüber natürlichen Personen entfalten oder diese in ähnlich erheblicher Weise beeinträchtigen'];
		Loesung = [false, true];
	break;
	
} // Switch Ende
	
	anzAntworten = Loesung.length; // Wird benötigt für Liste und Maske
	
	if (flagListe) return;

let y = 0;

	
	for (y = anzAntworten; y < maxAntworten; y++){
		Versteck[y].style.visibility   = "hidden"; 
		Versteck[y].style.borderBottom = "solid white";
		Antwort[y].style.visibility    = "hidden"; 
		Antwort[y].style.borderBottom  = "solid white";//
	}	
	scroll(0,0); // Experiment

} // Funktion Ende

function DSBFragen(intKarte){
	
switch (intKarte) {
	case 0:
		Frage.innerHTML = 'Die DSGVO ist für die Verantwortlichen zwingend ab wann zu beachten?';
		Antwort[0].innerHTML = ['Verstöße gegen die DSGVO können von den Behörden auch vor dem 25.05.2018 sanktioniert werden.'];
		Antwort[1].innerHTML = ['Am 24.05.2016 und unmittelbar anwendbar'];
		Antwort[2].innerHTML = ['Die DSGVO ist am 24.05.2016 in Kraft getreten, verbindlich anzuwenden erst ab dem 25.05.2018'];
		Loesung = [false, false, true]; 
	break; 
	case 1:
		Frage.innerHTML = 'Die Datenschutzgrundverordnung ...';
		Antwort[0].innerHTML = ['... gilt unmittelbar in allen Mitgliedstaaten.'];
		Antwort[1].innerHTML = ['... enthält Öffnungsklauseln, welche es den Mitgliedstaaten ermöglichen, im Rahmen der DSGVO ergänzend eigene Datenschutzvorschriften zu erlassen.'];
		Antwort[2].innerHTML = ['... muss erst in eigenes Recht (BDSG) umgesetzt werden und gilt dann unmittelbar.'];
		Loesung = [true, true, false]; 
	break; 
	case 2:
		Frage.innerHTML = 'Anonymisierte Daten ...';
		Antwort[0].innerHTML = ['fallen in den Schutzbereich der DSGVO.'];
		Antwort[1].innerHTML = ['fallen nicht in den Schutzbereich der DSGVO.'];
		Antwort[2].innerHTML = ['werden in Art. 5 DSGVO definiert.'];
		Loesung = [false, true, false]; 
	break; 
	case 3:
		Frage.innerHTML = 'Das neue Bundesdatenschutzgesetz (BDSG neu) ...';
		Antwort[0].innerHTML = ['... ist mit Wirkung zum 25.05.2018 angepasst worden und ist Teil des Datenschutz-Anpassungs- u. Umsetzungsgesetzes (DSAnpUG-EU).'];
		Antwort[1].innerHTML = ['... setzt die DSGVO um.'];
		Antwort[2].innerHTML = ['... spezifiziert in Teil 1 und 2 datenschutzrechtliche Regelungen entsprechend der Öffnungsklauseln der DSGVO.'];
		Loesung = [true, false, false]; 
	break; 
	case 4:
		Frage.innerHTML = 'In welchem Zeitraum sind die Betroffenenrechte vom Verantwortlichen zu erfüllen?';
		Antwort[0].innerHTML = ['innerhalb von 42 Tagen ab Geltendmachung der Betroffenenrechte.'];
		Antwort[1].innerHTML = ['innerhalb von 24 Stunden nach Eingang des Antrags des Betroffenen mit der Option, diese Frist auf 72 Stunden zu verlängern.'];
		Antwort[2].innerHTML = ['unverzüglich bzw. grundsätzlich innerhalb von einem Monat'];
		Loesung = [false, false, true]; 
	break; 
	case 5:
		Frage.innerHTML = 'Welche Grundsätze benennt die DSGVO?';
		Antwort[0].innerHTML = ['Rechtmäßigkeit, Verarbeitung nach Treu und Glauben, Transparenz.'];
		Antwort[1].innerHTML = ['Zweckbindung, Datenminimierung, Richtigkeit.'];
		Antwort[2].innerHTML = ['Speicherbegrenzung, Integrität und Vertraulichkeit, Rechenschaftspflicht.'];
		Loesung = [true, true, true]; 
	break; 
	case 6:
		Frage.innerHTML = 'Welche wesentlichen Voraussetzungen müssen entsprechend der DSGVO vorliegen, damit eine Person zum Datenschutzbeauftragten (DSB) benannt werden kann?';
		Antwort[0].innerHTML = ['Der DSB erfüllt die Mindestanforderungen für den Datenschutz an Fachkunde und Unabhängigkeit nach § 7 BDSG.'];
		Antwort[1].innerHTML = ['Insbesondere wird der DSB aufgrund seines IT-Fachwissens, das er zur Erfüllung seiner Aufgaben benötigt, benannt'];
		Antwort[2].innerHTML = ['Der DSB besitzt die Fähigkeiten zur Erfüllung der in Artikel 39 genannten Aufgaben.'];
		Loesung = [true, false, true]; 
	break; 
	case 7:
		Frage.innerHTML = 'Sie prüfen eine schriftliche Einwilligung gem. Art. 7 DSGVO des Betroffenen zur Datenerhebung. Worauf müssen Sie achten, damit diese Einwilligung formal-juristisch korrekt ist?';
		Antwort[0].innerHTML = ['Der Verantwortliche sollte nachweisen können, dass die betroffene Person ihre Einwilligung zu dem Verarbeitungsvorgang gegeben hat.'];
		Antwort[1].innerHTML = ['Die Einwilligung erfolgte <strong>freiwillig</strong>, <strong>zwanglos</strong> und <strong>nachweislich</strong>.'];
		Antwort[2].innerHTML = ['Die Einwilligung kann jederzeit, durch die betroffene Person, widerrufen werden.'];
		Loesung = [true, true, true]; 
	break; 
	case 8:
		Frage.innerHTML = 'Muss der Verantwortliche im Falle einer Datenerhebung beim Betroffenen seinen Informationspflichten nachkommen? Und wenn, wann?';
		Antwort[0].innerHTML = ['Ja'];
		Antwort[1].innerHTML = ['Nein'];
		Antwort[2].innerHTML = ['Innerhalb von 72 Stunden bzw. innerhalb eines Monats'];
		Loesung = [true, false, false]; 
	break; 
	case 9:
		Frage.innerHTML = 'Erläutern Sie den Begriff <strong>Pseudonymisieren</strong>.';
		Antwort[0].innerHTML = ['Austausch der personenbezogenen Daten, so dass eine Nachvollziehbarkeit für Dritte ausgeschlossen ist und nicht mehr spezifisch betroffenen Personen zugeordnet werden kann.'];
		Antwort[1].innerHTML = ['Bei der Pseudonymisierung wird der Name durch ein Pseudonym, zum Beispiel eine Chiffre oder Hash-Code, ersetzt. Diese zusätzlichen Informationen werden gesondert aufbewahrt und unterliegen technischen und organisatorischen Maßnahmen, die gewährleisten, dass eine Re-Pseudonymisierung nur noch eingeschränkt möglich ist.'];
		Antwort[2].innerHTML = ['Die pseudonymisierten Daten unterliegen nicht mehr der DSGVO, da diese Daten nicht einer identifizierten oder identifizierbaren natürlichen Person zugewiesen werden können.'];
		Loesung = [true, true, false]; 
	break; 	
	
} // Switch Ende

// if flag liste return

let y = 0;
	anzAntworten = Loesung.length;
	
	for (y = anzAntworten; y < 9; y++){ // maxAntworten = 3, aber 9 Einträge möglich
		Versteck[y].style.visibility   = "hidden"; 
		Versteck[y].style.borderBottom = "solid white";
		Antwort[y].style.visibility    = "hidden"; 
		Antwort[y].style.borderBottom  = "solid white";//
	}	
	scroll(0,0); // Experiment

} // Funktion Ende
	