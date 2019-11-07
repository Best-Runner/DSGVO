/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'Wikipedia',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.wikipedia.de/',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Digital Audit', // Title for your website.
  tagline: 'Die Webseite für den Auditor',
  url: 'https://valuegrid.info', // Your website URL https://your-docusaurus-test-site.com
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'Digital Audit',
  organizationName: 'Value Grid Engineering Group',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'gesetze', label: 'Gesetze'},
	{doc: 'flashcards', label: 'Lernen'},
    {doc: 'foerderung', label: 'Förderung'},
	{doc: 'doc1', label: 'AUDIT'},
	{doc: 'projekt', label: 'Projekte'},
//	{doc: 'reveal', label: 'Reveal'},
//  {page: 'help', label: 'Hilfe'},
//	{page: 'users', label: 'User'},
    {blog: true, label: 'Blog'},
  ],
 // Pfad zum editieren - Klappt noch nicht
 
// editUrl: 'file://%homepath%/Docusaurus/docs/',
 
  // If you have users set above, you add it here:
  users,
	algolia: {
		apiKey: 'b380d374e37dbd64cb6ba52314274089',
		indexName: 'github',
	  },
  /* path to images for header/footer */
  headerIcon: 'img/favicon.ico',
  footerIcon: 'img/favicon.ico',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#209c2f',
    secondaryColor: '#166d20',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Value Grid`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
	'https://buttons.github.io/buttons.js',
	{src: '/js/flash01-dsb.js', type: 'text/javascript',}, 
	{src: '/js/flash01-dsa.js', type: 'text/javascript',},
	{src: '/js/flash01-dsa-data.js', type: 'text/javascript',},
  ],
  stylesheets: [
    'https://docusaurus.io/style.css',
    {href: '/css/flash01-dsb.css', type: 'text/css'},
	{href: '/css/flash01-dsa.css', type: 'text/css',
    },
  ],	
  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,
	// Markdown Sub und Sup
  markdownPlugins: [
    function foo(md) {
      md.inline.ruler.enable(['sub', 'sup']);
    },
  ],
  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',
  // Set this to true if you want to enable the scroll to top button at the bottom of your site.
	scrollToTop: true,
  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,
  // Boolean flag to indicate whether HTML files in /pages should be wrapped with Docusaurus site styles, header and footer. This feature is experimental and relies on the files 
  // being HTML fragments instead of complete pages. It inserts the contents of your HTML file with no extra processing. Defaults to false.
  
  wrapPagesHTML: true,
  
  // Übernommen aus Example Siteconfigjs
	scrollToTop: true,
	scrollToTopOptions: {
		zIndex: 100,
  },
  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
