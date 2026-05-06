/**
 * 
 * @param {Date} d 
 * @param {Boolean} extended Select Shorter or Longer preferred Date format.
 * - True: Weekday, Month DDth, YYYY
 * - False: MM/DD/YYYY
 * @returns {String}
 */
function convertToPreferredDateFormat(d, extended) {
	let preferredDateOptions;
	if (extended) {
	preferredDateOptions = {
		weekday: "long",
		year: "numeric",
		month: "long", 
		day: "numeric",
		}
	} else {
	preferredDateOptions = {
		weekday: "long",
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		}
	}
	const preferredDateFormat = d.toLocaleDateString("en-US", preferredDateOptions);
	// const japaneseIntlFormat = new Intl.DateTimeFormat("ja-US-u-ca-japanese").format(d);
	// const japaneseIntlFormatParsed = Array.from(japaneseIntlFormat.split("/"));
	// console.log("New IntL: " + japaneseIntlFormat + "Weekday: " + japaneseIntlFormatParsed[2] + "Month: " + japaneseIntlFormatParsed[1]);

return preferredDateFormat;
}

function templateButtons() {
	document.querySelectorAll("button").forEach(button => {
		switch(button.id) {
				case "template-button":
					sout(button.id);
					break;
				case "button2":
					sout(button.id);
					break;
				case "button3":
					sout(button.id);
					break;
				default:
					sout("Default triggered!");
				break;
		}
	});
}

const cmbrScriptFile = () => {
	x = "";
	y = document.querySelectorAll("script"); 
	y.forEach(script =>{ x = script.getAttribute("src").toString(); });
	return ("<‰ " + (x.substring(x.lastIndexOf("/") + 1)) + " ‰>"); 
}

(async () => {

	CMBRutil.navigationCharter();
	templateButtons();
	CMBRutil.wireDefaultButtons();

	const focal = document.getElementById("focal");
	focal.style.backgroundImage = `url("../assets/artifacts/chrispy-fried-shrug.jpeg")`;
})();

// { homepage: "Homepage ↺"},
// { dashboard: "Personal Dashboard"},
// { workspace: "Coding Workspace"},
// { blog: "Blogging Page"},
// { accounting: "Accounting Resource"},
// { travel: "Travel Page"},
// { lifecraft: "Lifecraft Page"},
// { musings: "Musings Page"},
// { template: "Template"},
// { fantasy: "Fantasyland"},
// { segregation: "Segregation"},
// { mainframe: "Mainframe"},
// { music: "Original Music"},

// { links: [
// 	homepage: 'Homepage ↺',
// 	dashboard: 'Personal Dashboard',
// 	workspace: 'Coding Workspace',
// 	blog: 'Blogging Page',
// 	accounting: 'Accounting Resource',
// 	travel: 'Travel Page',
// 	lifecraft: 'Lifecraft Page',
// 	musings: 'Musings Page',
// 	template: 'Template',
// 	fantasy: 'Fantasyland',
// 	segregation: 'Segregation' ,
// 	mainframe: 'Mainframe',
// 	music: 'Original Music',
// 	]
// },