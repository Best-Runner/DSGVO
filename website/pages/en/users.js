/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

class Users extends React.Component {
  render() {
    const {config: siteConfig} = this.props;
    if ((siteConfig.users || []).length === 0) {
      return null;
    }
	
    const editUrl = `${siteConfig.repoUrl}/edit/master/website/siteConfig.js`;
    const showcase = siteConfig.users.map(user => (
      <a href={user.infoLink} key={user.infoLink}>
        <img src={user.image} alt={user.caption} title={user.caption} />
      </a>
    ));

    return (
    
	  
	  <div className="mainContainer">
        <Container padding={['bottom', 'top']}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>FLASHCARD</h1>
            </div>
			
<body onLoad="starte()"> 


	<form name="flash" id="flash">

		<div id="entry" name="entry" class="entry"></div>
		
		<table id="Tabelle8">
			<tr><td class="chkbox"><input name="field1" id="field1" type="checkbox" onClick="toggle(1)"/></td>
				<td class="ansbox" name="answer1" id="answer1"></td></tr>
			<tr><td class="chkbox"><input name="field2" id="field2" type="checkbox" onClick="toggle(2)"/></td>
				<td class="ansbox" name="answer2" id="answer2"></td></tr>
			<tr><td class="chkbox"><input name="field3" id="field3" type="checkbox" onClick="toggle(3)"/></td>
				<td class="ansbox" name="answer3" id="answer3"></td></tr>
		</table>

		<div class="knopfpos"><input name="restart" type="button" class="knopf rot"     id="restart" value="Start " onClick="starte()"/>
			<input name="back"    type="button" class="knopf gruen"   id="back"    value="Prüfen" onClick="proof()"/>
			<input name="forw"    type="button" class="knopf blau"  id="forw"    value="Weiter" onClick="forward()"/></div>
		
		<div id="mess" name="mess" class="sectiontitle"></div>
		
		<table id="Tabelle9" >
			<tr><td id="cardnumber" name="cardnumber" class="cardnumber"></td><td id="alle" name="alle" class="alle"></td></tr>  
			<tr><td id="score"      name="score"      class="score"     ></td><td id="percent"    name="percent"    class="percent"   ></td></tr>
		</table>
	</form>


</body>
          </div>

        </Container>
      </div>
    );
  }
}

module.exports = Users;
