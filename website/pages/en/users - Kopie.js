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
              <h1>Wer macht hier was?</h1>
              <p>Dieses Projekt wird oft genutzt</p>
            </div>
            <div className="logos">{showcase}</div>
            <p>Sind Sie bei diesem Projekt dabei?</p>
			
			<p><input type="number" id="Eingabe" value="0" size="2"/>
			<button type="button" id="los">Quadrat errechnen</button></p>
			
			<script>
				var los  = document.getElementById('los');
				los.addEventListener ('click', Quadrat, true);
			</script>
			
			<p>By default, the title of your page is  where title and tagline fields are set in siteConfig.js. You can exclude the tagline in the title by setting disableTitleTagline to true. If you want to set a specific title for your custom pages, add a title class property on your exported React component.</p>
            <a href={editUrl} className="button">
              Value Grid Engineering Group
            </a>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Users;
