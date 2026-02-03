module.exports = {
	highlight: true, // enable highlight feature
	injectBody: true, // enable instant update
	remoteLogs: true, // enable remoteLogs
	remoteLogs: "yellow", // enable remoteLogs and use the color yellow
	injectCss: true, // disable injecting css
	navigate: true, // enable auto-navigation
	host: 'localhost',
	port: 5500,
	root: 'dev',
	// file: '404.html',
	// open: false,
	https: true,
	browser: ['vivaldi', 'chrome', 'firefox', 'chrome --incognito', 'firefox --incognito'],
	// browser: ['C:\\Program Files\\Firefox Developer Edition\\firefox.exe --private-window'],
	watch: 'dev',
	// ignore: [/\.s[ac]ss$/i, /\.tsx?$/i],
	// mount: { '/img': 'C:\\Users\\yanni\\Pictures' },
	// remoteLogs: 'yellow',
	// logLevel: 2,
	// php: '/usr/bin/php',
	// php: 'C:\\xampp\\php\\php.exe',
	proxy: { '/': 'http://localhost:5500' },
	withExtension: 'redirect',
	logLevel: 2
};