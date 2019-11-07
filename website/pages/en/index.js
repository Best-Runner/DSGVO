/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = 'EN'} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/undraw_gdpr_3xfb.svg`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
			<Button href={docUrl('doc1.html')}>Datenschutz-Auditoren</Button>
            <Button href={docUrl('doc2.html')}>Datenschutz-Beauftragte</Button>
            <Button href="#try">Datenschutz lernen</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        
		<h1>Der Datenschutz</h1>
        
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              'und attraktiv präsentieren und vermitteln. Datenschutz betrifft jeden Einzelnen in Europa und praktisch alle Unternehmen mit Kundenkontakten. Jetzt, mit der Datenschutzgrundverordnung und der europaweiten Gültigkeit, wird der Datenschutz auch in rechtlicher Hinsicht verbindlich und erzwingt mit hohen Bussgeldern auch die entsprechenden Akzeptanz.',
            image: `${baseUrl}img/undraw_personal_data_29co.svg`,
            imageAlign: 'left',
            title: 'Datenschutz lernen',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/undraw_gdpr_3xfb.svg`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              'Wichtige Themen im Datenschutz',
            image: `${baseUrl}img/undraw_privacy_protection_nlwy.svg`,
            imageAlign: 'right',
            title: 'Hier könnte etwas zum Thema Datenschutz stehen',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="threeColumn">
        {[
          {
            content: 'Der Datenschutz-Auditor ist von der zu untersuchenden Firma unabhängig und überprüft im Auftrag im Rahmen der fortlaufenden Zertifizierung regelmäßig, meist jährlich, den aktuellen Stand des Datenschutzes. Die Haupttätigkeit besteht darin, systematisch zu beurteilen, ob das bestehende Datenschutzniveau eines Unternehmens ausreichend ist und überprüft und bewertet die umgesetzten technischen und organisatorischen Maßnahmen im Rahmen der gesetzlichen Grundlagen. Der Datenschutz-Auditor ist für die Entwicklung und Steuerung des Auditprogramms und die Erstellung der Checklisten für Stichprobenprüfungen und Interviews verantwortlich.',
            image: `${baseUrl}img/undraw_setup_wizard_r6mr.svg`,
            imageAlign: 'top',
            title: 'Datenschutz-Auditoren',
          },
		  {
            content: 'This is the content of my feature',
            image: `${baseUrl}img/undraw_light_the_fire_gt58.svg`,
            imageAlign: 'top',
            title: 'Datenschutz Informationen',
          },
          {
            content: 'Wikipedia: Ein Datenschutzbeauftragter (DSB) wirkt in einer Organisation auf die Einhaltung des Datenschutzes hin. Die Person kann Mitarbeiter dieser Organisation sein oder als externer Datenschutzbeauftragter bestellt werden. Der Datenschutzbeauftragte muss die notwendige Fachkunde für die Ausübung besitzen und darf nicht in einen Konflikt oder in die Gefahr der Selbstkontrolle geraten.<br />[Wikipedia DSB](https://de.wikipedia.org/wiki/Datenschutzbeauftragter)<br />      Seit Mai 2018 gelten die Datenschutzgrundverordnung (DSGVO) und das neue BundesdatenschutzGesetz (BDSG). Seit dem ist der Einsatz eines externen oder internen Datenschutzbeauftragten für Unternehmen die personalisierte Daten verarbeiten praktisch zwingend.',
            image: `${baseUrl}img/undraw_personal_settings_kihd.svg`,
            imageAlign: 'top',
            title: 'Datenschutz-Beauftragte',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
