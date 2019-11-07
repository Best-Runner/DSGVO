---
id: flash01-dsb
hide_title: Lernkarten für DSB
sidebar_label: Lernkarten DSB 01
---

<!-- Die Frage --> 

<p id="dsaFrage"></p>

<form> 

<!--Die Antworten ------------------------------------------------------------>

<table id="dsaTab1"><!--Zuerst die CheckBox, dann die Antworten anzeigen-->
	<tr><td	id="versteck0" ><input id="check0" type="checkbox" onClick="toggle(0)"/></td><td class="antwort" id="antwort0"></td></tr>
	<tr><td id="versteck1" ><input id="check1" type="checkbox" onClick="toggle(1)"/></td><td class="antwort" id="antwort1"></td></tr>
	<tr><td id="versteck2" ><input id="check2" type="checkbox" onClick="toggle(2)"/></td><td class="antwort" id="antwort2"></td></tr>
	<tr><td id="versteck3" ><input id="check3" type="checkbox" onClick="toggle(3)"/></td><td class="antwort" id="antwort3"></td></tr>
	<tr><td id="versteck4" ><input id="check4" type="checkbox" onClick="toggle(4)"/></td><td class="antwort" id="antwort4"></td></tr>
	<tr><td id="versteck5" ><input id="check5" type="checkbox" onClick="toggle(5)"/></td><td class="antwort" id="antwort5"></td></tr>
	<tr><td id="versteck6" ><input id="check6" type="checkbox" onClick="toggle(6)"/></td><td class="antwort" id="antwort6"></td></tr>
	<tr><td id="versteck7" ><input id="check7" type="checkbox" onClick="toggle(7)"/></td><td class="antwort" id="antwort7"></td></tr>
</table>

<!--Die Knöpfe --------------------------------------------------------------->

<div id=dsaTab2><!--Dann die Knöpfe Start, Prüfen, Zurück und Weiter--->
	<div id="rot">
		<input type="button" class="knopf rot"    id="rotKnopf" value="NeuStart" onClick="dsb01(1)"/>
		<input type="button" class="knopf blau"   id="blaKnopf" value="Prüfen"   onClick="dsb01(3)"/>
		<input type="button" class="knopf gruen"  id="gruKnopf" value="Zurück"   onClick="dsb01(4)"/>
		<input type="button" class="knopf orange" id="oraKnopf" value="Weiter"   onClick="dsb01(2)"/>
	</div>
</div>

<!--Die Ausgaben ------------------------------------------------------------->

<div id=dsaTab3>
	<div id="dsaTab3out">
		<input type="button" id="Hinweis"  disabled value="Hinweis"/>       <!--Hinweise aller Art ----------->
		<input type="button" id="lfdKarte" disabled value="Karte"/>         <!--Aktuelle Karte von x Karten--->
		<input type="button" id="Prozent"  disabled value="Prozent"/>       <!--Kartenauswertung in % -------->
		<input type="button" id="Ergebnis" disabled value="Gesamtergebnis"/><!--Gesamtergebnis alle Karten---->
		<input type="button" id="dsaUhr1"  disabled value="Uhrzeit"/>
	</div>
</div>

<!-- Initialisierung ------------>

<p hidden><img src="/img/zur.png" width="20" onload="dsb01(1)" /></p> 

</form>

<div id=dsaTab4>
	<div id="dsaTab4out">
		<a href="javascript:dsbMaske(0)" id="f0">[0]</a>
		<a href="javascript:dsbMaske(1)" id="f1">[1]</a>
		<a href="javascript:dsbMaske(2)" id="f2">[2]</a>
		<a href="javascript:dsbMaske(3)" id="f3">[3]</a>
		<a href="javascript:dsbMaske(4)" id="f4">[4]</a>
		<a href="javascript:dsbMaske(5)" id="f5">[5]</a>
		<a href="javascript:dsbMaske(6)" id="f6">[6]</a>
		<a href="javascript:dsbMaske(7)" id="f7">[7]</a>
		<a href="javascript:dsbMaske(8)" id="f8">[8]</a>
		<a href="javascript:dsbMaske(9)" id="f9">[9]</a>
	</div>
</div>

<div hidden>

### [[0](#f0)]---[[1](#f1)]       

### [[2](#f2)]---[[3](#f3)]  

### [[4](#f4)]---[[5](#f5)]

### [[6](#f6)]---[[7](#f7)]   

### [[8](#f8)]---[[9](#f9)]

</div>
