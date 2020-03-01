const config = {
	"gatsby": {
		"pathPrefix": "/",
		"siteUrl": "https://englishclasses.live",
		"gaTrackingId": null,
		"trailingSlash": false
	},
	"header": {
		"logo": "/images/ecl.png",
		"logoLink": "https://englishclasses.live",
		"title": "EnglishClasses.Live",
		"githubUrl": "/",
		"helpUrl": "",
		"tweetText": "",
		"links": [
			{ "text": "", "link": ""}
		],
		"search": {
			"enabled": false,
			"indexName": "",
			"algoliaAppId": process.env.GATSBY_ALGOLIA_APP_ID,
			"algoliaSearchKey": process.env.GATSBY_ALGOLIA_SEARCH_KEY,
			"algoliaAdminKey": process.env.ALGOLIA_ADMIN_KEY
		}
	},
	"sidebar": {
		"forcedNavOrder": [
			"/introduction", // add trailing slash if enabled above
    		"/codeblock"
		],
    	"collapsedNav": [
      		"/codeblock" // add trailing slash if enabled above
    	],
		"links": [
			{ "text": "YouTube", "link": "https://youtube.com"},
			{ "text": "Facebook", "link": "https://facebook.com"},
		],
		"frontline": false,
		"ignoreIndex": true,
	},
	"siteMetadata": {
		"title": "EnglishClasses.Live | ECL ",
		"description": "Online English Classes: Spoken English, English Speaking, IELTS, English Reading Comprehension, English Listening, English Writing, Vocabulary Building, Accent Neutralization, and Mother Tounge Influence MTI Reduction",
		"ogImage": null,
		"docsLocation": "",
		"favicon": "/images/ecl.png"
	},
	"pwa": {
		"enabled": true, // disabling this will also remove the existing service worker.
		"manifest": {
			"name": "EnglishClasses.Live",
			"short_name": "ECL",
			"start_url": "/",
			"background_color": "#6b37bf",
			"theme_color": "#6b37bf",
			"display": "standalone",
			
			icons: [
				{
					src: "src/pwa-512.png",
					sizes: `512x512`,
					type: `image/png`,
				},
			],
		},
	}
};

module.exports = config;
