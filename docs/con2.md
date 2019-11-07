---
id: con2
title: CON.2 Datenschutz
sidebar_label: CON.2 Datenschutz
---
<div class="dsa" id="ds-oben"></div>

<div hidden>

## [>>Link zum BSI CON.2 Original>>](https://www.bsi.bund.de/DE/Themen/ITGrundschutz/ITGrundschutzKompendium/bausteine/CON/CON_2_Datenschutz.html)

## [>>Link zum BSI SDM Original](https://www.bfdi.bund.de/DE/Datenschutz/Themen/Technische_Anwendungen/TechnischeAnwendungenArtikel/Standard-Datenschutzmodell.html)

## [>>BSI IT-Grundschutz-Kompendium mit weiterführenden Links>>](https://www.bsi.bund.de/DE/Themen/ITGrundschutz/ITGrundschutzKompendium/itgrundschutzKompendium_node.html;jsessionid=57B9CF512B6FB76EBA1006185E30F479.2_cid341)

</div>

    1 Beschreibung/Übersicht
        1.1 Einleitung
        1.2 Zielsetzung
        1.3 Abgrenzung
    2 Gefährdungslage
        2 1 Missachtung von Datenschutz-Gesetzen oder Nutzung eines unvollständigen Risikomodells
        2 2 Festlegung eines zu niedrigen Schutzbedarfs
    3 Anforderungen
        3.1 Basis-Anforderungen
        3.2 Standard-Anforderungen
        3.3 Anforderungen bei erhöhtem Schutzbedarf
    4 Weiterführende Informationen
        4.1 Literatur
    5 Anlage: Kreuzreferenztabelle zu elementaren Gefährdungen

<div style="text-align: justify"> 

## 1 Beschreibung

### 1.1 Einleitung

Aufgabe des Datenschutzes ist es, Personen davor zu schützen, dass diese durch die Nutzung von personenbezogenen Daten durch Institutionen in der Ausübung von Grundrechten beeinträchtigt werden. Die Verfassung der Bundesrepublik Deutschland gewährleistet das Recht der Bürgerinnen und Bürger, grundsätzlich selbst über die Verwendung ihrer personenbezogenen Daten zu bestimmen. Die Datenschutzgesetze des Bundes und der Bundesländer nehmen darauf Bezug, wenn sie den Schutz des Rechts auf informationelle Selbstbestimmung hervorheben. Die EU-Grundrechte-Charta formuliert in Artikel 8 unmittelbar das Recht auf den Schutz personenbezogener Daten (Absatz 1), hebt die Notwendigkeit einer Rechtsgrundlage zur Datenverarbeitung hervor (Absatz 2) und schreibt die Überwachung der Einhaltung von Datenschutzvorschriften durch eine unabhängige Stelle vor (Absatz 3). Die Datenschutz-Grundverordnung [DSGVO](/docs/en/dsgvo) führt diese Anforderungen der Grundrechte-Charta näher aus. Von herausragender Bedeutung ist dabei der [Artikel 5 DSGVO](/docs/en/dsgvo#art-5), der die Grundsätze versammelt, die teilweise als Schutzziele ausgewiesen sind. Das Standard-Datenschutzmodell (SDM) bietet eine Methode, um diese geforderte Umsetzung von Datenschutzvorschriften auf der Grundlage von sieben Schutzzielen bzw. Gewährleistungszielen systematisch überwachen zu können.

### 1.2 Zielsetzung

Ziel des Bausteins ist es, die Verbindung der Anforderungen des Standard-Datenschutzmodells zum IT-Grundschutz darzustellen.

### 1.3 Abgrenzung

Die Konferenz der unabhängigen Datenschutzbehörden des Bundes und der Länder hat mit dem Standard-Datenschutzmodell ein Konzept entwickelt, dass die in den deutschen und europäischen Rechtsvorschriften genannten technischen und organisatorischen Maßnahmen auf der Basis von Gewährleistungszielen systematisiert. Damit dient das Modell einerseits den für die Verarbeitung verantwortlichen Stellen, erforderliche Maßnahmen systematisch zu planen sowie umzusetzen, und fördert somit die datenschutzgerechte Ausgestaltung und Organisation von informationstechnischen Verfahren und Applikationen. Andererseits bietet das Modell den Datenschutzbehörden eine Möglichkeit, mit einer einheitlichen Systematik zu einem transparenten, nachvollziehbaren, belastbaren Gesamturteil über ein Verfahren und dessen Komponenten zu gelangen. Das SDM ist als Methode geeignet, die Wirksamkeit der technischen und organisatorischen Maßnahmen einer Verarbeitung auf der Grundlage und nach den Kriterien der DSGVO regelmäßig zu überprüfen, zu bewerten und zu evaluieren.

Das SDM nimmt bei der Auswahl geeigneter technischer und organisatorischer Maßnahmen die Perspektive des Betroffenen und dessen Grundrechtsausübung ein und unterscheidet sich daher grundlegend von der Sicht des IT-Grundschutzes. IT-Grundschutz hat vorrangig die Informationssicherheit im Blickfeld und soll die datenverarbeitende Institution schützen. Für die Auswahl von Maßnahmen nach dem SDM ist hingegen die Beeinträchtigung maßgeblich, die ein Betroffener durch die Datenverarbeitung der Institution hinnehmen muss.

Vor diesem Hintergrund ist zwischen der Auswahl von Maßnahmen zur Gewährleistung der Informationssicherheit für Institutionen durch verantwortliche Stellen und der von Maßnahmen zur Gewährleistung der Betroffenenrechte zu unterscheiden. Die IT-Grundschutz-Methodik dient vorrangig der Informationssicherheit, das Standard-Datenschutzmodell dient der Umsetzung von Betroffenenrechten.

Das Standard-Datenschutzmodell hat daher die folgenden Ansprüche:

*  `Es überführt datenschutzrechtliche Anforderungen in einen Katalog von Gewährleistungszielen.`     
*  `Es gliedert die betrachteten Verfahren in die Komponenten Daten, IT-Systeme und Prozesse.`     
*  `Es berücksichtigt die Einordnung von Daten in die drei Schutzbedarfsabstufungen normal, hoch und sehr hoch der Informationssicherheit und ergänzt diese um entsprechende Betrachtungen auf der Ebene von Prozessen und IT-Systemen.`     
*  `Es bietet einen hieraus systematisch abgeleiteten Katalog mit standardisierten Schutzmaßnahmen.`  

## 2 Gefährdungslage

Folgende spezifische Bedrohungen und Schwachstellen sind für den Baustein CON.2 Datenschutz von besonderer Bedeutung:

### 2.1 Missachtung von Datenschutz-Gesetzen oder Nutzung eines unvollständigen Risikomodells

Nach der EU-Datenschutz-Grundverordnung ist die Verarbeitung personenbezogener Daten grundsätzlich verboten und bedarf einer Rechtsgrundlage. Die Erhebung, Nutzung und Übermittlung personenbezogener Daten ist nur zulässig, wenn eine Rechtsvorschrift dies erlaubt oder anordnet oder wenn ein Betroffener eingewilligt hat. [vergleiche Artikel 6 DSGVO](/docs/en/dsgvo#art-6). 

Aus der Sicht des Datenschutzes ist eine Institution, die personenbezogene Daten erhebt, nutzt, übermittelt oder empfängt (zusammengefasst: "verarbeitet") grundsätzlich ein Risiko für Personen. An diesem Risiko ändert sich nichts, wenn die Datenverarbeitung einer Institution rechtskonform ausgestaltet ist.

Ein demgegenüber noch einmal erhöhtes Risiko besteht für Personen dann, wenn eine Institution eine Datenverarbeitung nicht hinreichend zweckbestimmt oder den Zweck überdehnend oder gänzlich zweckungebunden oder intransparent oder ohne integritätssichernde Maßnahmen und ohne hinreichende Optionen für Eingriffsmöglichkeiten durch Betroffene durchführt.

In der Praxis können sich hierbei Zugriffe von Dritten, die nicht dem Zweck der ursprünglichen Datenverarbeitung dienen, als häufiges Risiko darstellen. Dabei kann es sich typischerweise um ausländische Konzernmütter, Sicherheitsbehörden, Banken und Versicherungen, öffentliche Leistungsverwaltungen, IT-Hersteller und IT-Dienstleister (beispielsweise durch übernommene Patienten- und Klienten-Verzeichnisse) oder Forschungsinstitutionen handeln. Oftmals wird in diesen Kontexten die Ordnungsmäßigkeit eines Zugriffs nicht geprüft, beispielsweise weil eine langjährig eingefahrene Praxis fortgesetzt wird oder weil nachrangige Mitarbeiter das persönliche Risiko scheuen, das in einem Thematisieren des Vorliegens einer hinreichenden Rechtsgrundlage liegen kann. Ferner werden aus (teilweise) negativen Prüfergebnissen durch eine Rechtsabteilung oder einen Datenschutzbeauftragten dann oftmals seitens der Verantwortlichen keine Konsequenzen gezogen.

Ein weiteres Risiko sowohl für Personen als auch für verantwortliche Institutionen besteht, wenn für rechtmäßig erfolgte Zugriffe durch Dritte keine Standard-Prozesse für einen (zumeist nur bedingten) Zugriff auf IT-Dienste oder die Übermittlung von Datenbeständen vorgesehen sind oder wenn keine Nachweise über die Ordnungsmäßigkeit der Durchführung, in Form von Protokollen und Dokumentationen, erbracht werden können.

Eine große Gefahr für Personen ist ferner eine mangelhafte Datensicherheit. [Erwägungsgrund 75 der DSGVO](/docs/en/ewg#ewg-75) beschreibt die mit der Verarbeitung personenbezogener Daten einhergehenden Risiken und damit die Gefährdungslage durch unbefugten Zugriff wie folgt: "Die Risiken für die Rechte und Freiheiten natürlicher Personen, mit unterschiedlicher Eintrittswahrscheinlichkeit und Schwere, können aus einer Verarbeitung personenbezogener Daten hervorgehen, die zu einem physischen, materiellen oder immateriellen Schaden führen könnte, insbesondere wenn die Verarbeitung zu einer Diskriminierung, einem Identitätsdiebstahl oder -betrug, einem finanziellen Verlust, einer Rufschädigung, einem Verlust der Vertraulichkeit von dem Berufsgeheimnis unterliegenden personenbezogenen Daten, der unbefugten Aufhebung der Pseudonymisierung oder anderen erheblichen wirtschaftlichen oder gesellschaftlichen Nachteilen führen kann, wenn die betroffenen Personen um ihre Rechte und Freiheiten gebracht oder daran gehindert werden, die sie betreffenden personenbezogenen Daten zu kontrollieren, wenn personenbezogene Daten, aus denen die rassische oder ethnische Herkunft, politische Meinungen, religiöse oder weltanschauliche Überzeugungen oder die Zugehörigkeit zu einer Gewerkschaft hervorgehen, und genetische Daten, Gesundheitsdaten oder das Sexualleben oder strafrechtliche Verurteilungen und Straftaten oder damit zusammenhängende Sicherungsmaßregeln betreffende Daten verarbeitet werden, wenn persönliche Aspekte bewertet werden, insbesondere wenn Aspekte, die die Arbeitsleistung, wirtschaftliche Lage, Gesundheit, persönliche Vorlieben oder Interessen, die Zuverlässigkeit oder das Verhalten, den Aufenthaltsort oder Ortswechsel betreffen, analysiert oder prognostiziert werden, um persönliche Profile zu erstellen oder zu nutzen, wenn personenbezogene Daten schutzbedürftiger natürlicher Personen, insbesondere Daten von Kindern, verarbeitet werden oder wenn die Verarbeitung eine große Menge personenbezogener Daten und eine große Anzahl von betroffenen Personen betrifft.“

### 2.2 Festlegung eines zu niedrigen Schutzbedarfs

Eine weitere Gefahr für Personen ist die Festlegung eines unzutreffenden Schutzbedarfs. Ein falsch angesetzter Schutzbedarf führt dazu, dass wesentliche Anforderungen an eine datenschutzrechtliche Gestaltung der Funktionen eines Verfahrens und des Betriebs spezifischer Datenschutz-Schutzmaßnahmen nicht beachtet werden. Der Schutzbedarf, der typischerweise durch die Institution selber festgelegt wird, die verantwortlich personenbezogene Daten verarbeitet, kann aus Sicht von Personen aus verschiedenen Gründen falsch oder zu niedrig angesetzt sein:

*  `Die Institution hat den gegenüber der Informationssicherheit erweiterten Schutzzielekatalog des Datenschutzes nicht berücksichtigt.`  
*  `Die Institution hat bei der Schutzbedarfsermittlung nicht zwischen den Risiken für die Umsetzung der Grundrechte der Betroffenen und den Risiken für die Institution unterschieden.`  
*   `Die Institution hat zwar die beiden Schutzinteressen unterschieden, aber die Funktionen des Verfahrens und der Schutzmaßnahmen zugunsten der Institution bzw. zu Ungunsten betroffener Personen gestaltet.`  

## 3 Anforderungen

Im Folgenden sind die spezifischen Anforderungen des Bausteins CON.2 Datenschutz aufgeführt. Grundsätzlich ist der Datenschutzbeauftragte zuständig dafür, die Einhaltung der Anforderungen der DSGVO zu überwachen [zu Details und Einschränkungen siehe Art. 39 DSGVO](/docs/en/dsgvo#art-39). Der Informationssicherheitsbeauftragte (ISB) ist bei strategischen Entscheidungen stets einzubeziehen. Außerdem ist der ISB dafür verantwortlich, dass alle Anforderungen gemäß dem festgelegten Sicherheitskonzept erfüllt und überprüft werden.

### 3.1 Basis-Anforderungen

Die folgenden Anforderungen MÜSSEN für den Baustein Datenschutz vorrangig umgesetzt werden:

<h2>**CON.2.A1 Umsetzung Standard-Datenschutzmodell**</h2>

Es MUSS geprüft werden, ob das Standard-Datenschutzmodell angewendet wird. Eine etwaige Nichtberücksichtigung des vollständigen Schutzziele-Katalogs und eine Nichtanwendung der SDM-Methodik sowie der Referenzmaßnahmen MÜSSEN begründet werden.

### 3.2 Standard-Anforderungen

Für den Baustein CON.2 Datenschutz sind keine Standard-Anforderungen definiert.

### 3.3 Anforderungen bei erhöhtem Schutzbedarf

Für den Baustein CON.2 Datenschutz sind keine Anforderungen für einen erhöhten Schutzbedarf definiert.

## 4 Weiterführende Informationen

### 4.1 Literatur

Weiterführende Informationen zu Gefährdungen und Sicherheitsmaßnahmen im Bereich "Datenschutz" finden sich unter anderem in folgenden Veröffentlichungen:

* [DSGVO - EU-Datenschutz-Grundverordnung](/docs/en/dsgvo#kapitel-1)-`Verordnung (EU) 2016/679 des Europäischen Parlaments und des Rates vom 27. April 2016 zum Schutz natürlicher Personen bei der Verarbeitung personenbezogener Daten(Datenschutz-Grundverordnung)“, April 2016,` [Siehe auch hier den EU-Text](http://eur-lex.europa.eu/legal-content/de/TXT/?uri=CELEX%3A32016R0679)  
* [SDM](https://www.bfdi.bund.de/DE/Datenschutz/Themen/Technische_Anwendungen/TechnischeAnwendungenArtikel/Standard-Datenschutzmodell.html) - `Das Standard-Datenschutzmodell (SDM) - Eine Methode zur Datenschutzberatung und -prüfung auf der Basis einheitlicher Gewährleistungszielen. (siehe auch Arbeitskreis Technik der Konferenz der unabhängigen Datenschutzbehörden des Bundes und der Länder (Hrsg.), V1.0 Erprobungsfassung, November 2016.)`

## 5 Kreuzreferenztabelle zu elementaren Gefährdungen

Die folgenden elementaren Gefährdungen sind für den Baustein Datenschutz von Bedeutung.

*  [G 0.18 Fehlplanung oder fehlende Anpassung](https://www.bsi.bund.de/DE/Themen/ITGrundschutz/ITGrundschutzKompendium/elementare_gefaehrdungen/G_0_18_Fehlplanung_oder_fehlende_Anpassung.html)

*  [Die Kreuzreferenztabellen (CSV-Format) findet sich im BSI Downloadbereich](https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/Kompendium/krt2019.csv?__blob=publicationFile&v=5)

</div> 
