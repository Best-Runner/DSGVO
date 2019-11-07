---
id: playground
title: Playground
sidebar_label: Playground
---
<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
console.log('Hello, world!');
```
<!--Python-->
```py
print('Hello, world!')
```

<!--C-->
```C
#include <stdio.h>

int main() {
   printf("Hello World!");
   return 0;
}
```

<!--Pascal-->
```Pascal
program HelloWorld;
begin
  WriteLn('Hello, world!');
end.
```

<!--END_DOCUSAURUS_CODE_TABS-->

```js
ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById('root'));
```
______

<style>
	label {
		font-weight: bold;  
    }
</style>

<div>
    <label for="bs">Blocksatz</label><input id="bs" type="radio" name="ukus" value="bs" checked></label>
    <label for="fs">Flattersatz</label><input id="fs" type="radio" name="ukus" value="fs"></label>
	<button onClick="result();" class="ausrichtung">Auswahl!</button>
</div>

<script>
	var ausrichtung = document.querySelector('.ausrichtung');

	ausrichtung.addEventListener('click', result);

	function result() {
		if(document.getElementById("bs").checked ) {
			ausrichtung.textContent = 'Blocksatz!';
		}
		else ausrichtung.textContent = 'Flattersatz!';
	}
</script>

_______



___
## Other Stuff
___

<input type="button" name="Druckknopf" value="Druckknopf" onclick="alert('Druckknopf')"></input>

___

<input type="button" onclick="window.print()" value="Druckknopf"></input>

___

#### Prozentwerte 0-100
<form><input type="number" min="0" max="100" step="1" value="100" maxlength="3" style="width: 50px">%&nbsp;</form>

___

#### Kommentarfeld mit Eintrag
<form><input type="textarea" placeholder="Kommentar" style="width: 150px">&nbsp;</form>

___

#### Kommentarfeld als Textfeld
<textarea cols="20" rows="5" placeholder="Kommentar" ></textarea>

___

#### Ampel kombiniert mit Kommentarfeld
<form method="post">
	<label style="padding:2px;background:#C00"><input type="radio" name="color-1-1" value="R" onclick="alert('OH SHIT')" ></label>
	<label style="padding:2px;background:#FF0"><input type="radio" name="color-1-1" value="Y" ></label>
	<label style="padding:2px;background:#090"><input type="radio" checked name="color-1-1" value="G" ></label>&nbsp;&nbsp;
	<input type="text" pattern="[A-Z0-9]+" size="85" maxlength="250" placeholder="Kommentar" required value=""> 	
</form>

___

#### Auswahlfeld kombiniert mit Kommentarfeld
<form method="post">
	<label>
      <select name="feld-c2-1">
         <option value="NZ">Nicht zutreffend</option>
         <option value="Ja">Ja</option>
         <option value="Nein">Nein</option>
      </select>
	<input type="text" autocomplete="on" name="komm-c2-1" pattern="[A-Z0-9]+" size="85" maxlength="250" placeholder="Kommentar" required value=""> 	
	</label>
	</form>
	
____

#### Druckknopf Script funktioniert und direkter Aufruf
<script> function druck() { 
	window.print();
}
</script>

<label><input type="button" value="Druckknopf" onclick="window.print();" > </label>
   
___

#### HTML Druckknopf 1 funktioniert
<a href="#" onclick="window.print();">window.print</a>

#### HTML/Javascript Druckknopf 2 funktioniert
<a href="javascript:self.print()">Self.Print</a>

___


