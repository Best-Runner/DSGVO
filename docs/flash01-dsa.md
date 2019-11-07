---
id: flash01-dsa
hide_title: Lernkarten für DSA
sidebar_label: Lernkarten DSA 01
---

<!-- Die Frage -->

<p id="dsaFrage"></p>

<form> 

<!-- Die Antworten -->

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

<!-- Die Knöpfe -->

<div id=dsaTab2><!--Dann die Knöpfe Start, Prüfen, Zurück und Weiter--->
	<div id="rot">
		<input type="button" class="knopf rot"    id="rotKnopf" value="NeuStart" onClick="dsa01(1)"/>
		<input type="button" class="knopf blau"   id="blaKnopf" value="Prüfen"   onClick="dsa01(3)"/>
		<input type="button" class="knopf gruen"  id="gruKnopf" value="Zurück"   onClick="dsa01(4)"/>
		<input type="button" class="knopf orange" id="oraKnopf" value="Weiter"   onClick="dsa01(2)"/>
	</div>
</div>

<!-- Die Ausgaben -->

<div id=dsaTab3>
	<div id="dsaTab3out">
		<input type="button" id="Hinweis"  disabled value="Hinweis"/>       <!--Hinweise aller Art ----------->
		<input type="button" id="lfdKarte" disabled value="Karte"/>         <!--Aktuelle Karte von x Karten--->
		<input type="button" id="Prozent"  disabled value="Prozent"/>       <!--Kartenauswertung in % -------->
		<input type="button" id="Ergebnis" disabled value="Gesamtergebnis"/><!--Gesamtergebnis alle Karten---->
		<input type="button" id="dsaUhr1"  disabled value="Uhrzeit"/>
	</div>
</div>

<!-- Initialisiereung -->

<p hidden><img src="/img/zur.png" width="20" onload="dsa01(1)" /></p> 

</form>

<div id=dsaTab4>
	<div id="dsaTab4out">
		<a href="javascript:dsaMaske(0)"  id="f0" >0</a>
		<a href="javascript:dsaMaske(1)"  id="f1" >1</a>
		<a href="javascript:dsaMaske(2)"  id="f2" >2</a>
		<a href="javascript:dsaMaske(3)"  id="f3" >3</a>
		<a href="javascript:dsaMaske(4)"  id="f4" >4</a>
		<a href="javascript:dsaMaske(5)"  id="f5" >5</a>
		<a href="javascript:dsaMaske(6)"  id="f6" >6</a>
		<a href="javascript:dsaMaske(7)"  id="f7" >7</a>
		<a href="javascript:dsaMaske(8)"  id="f8" >8</a>
		<a href="javascript:dsaMaske(9)"  id="f9" >9</a>
		<a href="javascript:dsaMaske(10)" id="f10">10</a>
		<a href="javascript:dsaMaske(11)" id="f11">11</a>
		<a href="javascript:dsaMaske(12)" id="f12">12</a>
		<a href="javascript:dsaMaske(13)" id="f13">13</a>
		<a href="javascript:dsaMaske(14)" id="f14">14</a>
		<a href="javascript:dsaMaske(15)" id="f15">15</a>
		<a href="javascript:dsaMaske(16)" id="f16">16</a>
		<a href="javascript:dsaMaske(17)" id="f17">17</a>
		<a href="javascript:dsaMaske(18)" id="f18">18</a>
		<a href="javascript:dsaMaske(19)" id="f19">19</a>
		<a href="javascript:dsaMaske(20)" id="f20">20</a>
		<a href="javascript:dsaMaske(21)" id="f21">21</a>
		<a href="javascript:dsaMaske(22)" id="f22">22</a>
		<a href="javascript:dsaMaske(23)" id="f23">23</a>
		<a href="javascript:dsaMaske(24)" id="f24">24</a>
		<a href="javascript:dsaMaske(25)" id="f25">25</a>
		<a href="javascript:dsaMaske(26)" id="f26">26</a>
		<a href="javascript:dsaMaske(27)" id="f27">27</a>
		<a href="javascript:dsaMaske(28)" id="f28">28</a>
		<a href="javascript:dsaMaske(29)" id="f29">29</a>
		<a href="javascript:dsaMaske(30)" id="f30">30</a>
		<a href="javascript:dsaMaske(31)" id="f31">31</a>
		<a href="javascript:dsaMaske(32)" id="f32">32</a>
		<a href="javascript:dsaMaske(33)" id="f33">33</a>
	</div>
</div>

<div hidden>

### [[0](#f0)]---[[1](#f1)]       

### [[2](#f2)]---[[3](#f3)]  

### [[4](#f4)]---[[5](#f5)]

### [[6](#f6)]---[[7](#f7)]   

### [[8](#f8)]---[[9](#f9)]

### [[10](#f10)]---[[11](#f11)]   

### [[12](#f12)]---[[13](#f13)]

### [[14](#f14)]---[[15](#f15)]   

### [[16](#f16)]---[[17](#f17)]

### [[18](#f18)]---[[19](#f19)]   

### [[20](#f20)]---[[21](#f21)]

### [[22](#f22)]---[[23](#f23)]   

### [[24](#f24)]---[[25](#f25)]

### [[26](#f26)]---[[27](#f27)]   

### [[28](#f28)]---[[29](#f29)]

### [[30](#f30)]---[[31](#f31)]   

### [[32](#f32)]---[[33](#f33)]   

</div>
