/* ----- NOTES DEPOSITORY / ANKI PAGE ----- */

/** @description Dummy HTML Data if File Protocol Used @constant {String[][]} */
const dummyExports = [
	["CMBR_BUS-115",
		`
	#separator:tab
#html:true
#deck column:1
#tags column:4
CMBR:BUS-115	Article I of the Constitution establishes what?	The Legislatative Branch (Congress)	constitution
CMBR:BUS-115	Article II of the Constitution enables what?	It enables the Executive Branch (President &amp; Agencies)	constitution
CMBR:BUS-115	Article III of the Constitution grants what?	It grants authority to the Judicial Branch to interpret law.	constitution
CMBR:BUS-115	Why does the First Amendment protect Free Speech?	"If a state protects Free Speech, then there would be an open <span style=""background-color: rgb(255, 255, 0); color: rgb(0, 0, 255);"">Marketplace of Ideas</span> that leads to an informed citizenry and effective government."	constitution
CMBR:BUS-115	Buckley v. Valeo (1976)	Addressed campaign finance laws and determined that limits on campaign expenditures violate the First Amendment, though contributions can be restricted to prevent corruption. Followed precedent from the Federal Election Campaign Act of 1971 and set precedent for Citizens United v. Federal Election Commission (2010) which determines corporations and unions can work to influence elections.	case constitution
CMBR:BUS-115	Boos v. Barry (1988)	Court determined that prohibiting display of signs critical of foreign governments near their embassies is unconstitutional. Police may disperse protestors, though.	case constitution
CMBR:BUS-115	When are speech restrictions constitutional?	"When they're:<ol>
  <li>Content neutral</li>
  <li>Serving an important government interest</li>
  <li>Leaving open ample, alternative channels of communication</li>
</ol>"	censorship constitution
CMBR:BUS-115	United States v. O'Brien (1968)	"Courts upheld that the ""willful destruction of draft cards mandate"" of the Selected Service Act is constitutional; it was a valid time, place, and manner restriction on speech."	case constitution
CMBR:BUS-115	Heffron v. Int'l Soc. for Krishna Consciousness Inc. (1981)	Minnesota rule preventing religious solicitations for sales at a fairgrounds was held as constitutional; rule was deemed content-neutral as it didn't target the religious practice itself and that limiting solicitation on fairgrounds reduces congestion.	case constitution
CMBR:BUS-115	What's the extent to which the Free Speech could be curtailed in the Courts?	"Only to the narrowest extent required to preserve public safety, since the Courts are sworn to protect this critical  right. <i>Benjamin Franklin said: <br>  ""Those who trade liberty for safety deserve neither liberty or safety.""</i>"	case constitution
CMBR:BUS-115	Edwards v. Aguillard (1987)	Courts ruled that government cannot permit a school district to teach creationism, a religiously-based theory.	case constitution
CMBR:BUS-115	Burwell v. Hobby Lobby (2014)	Courts ruled that employees couldn't be barred from contraceptive treatment on the grounds of employer's religious convictions.	case constitution
CMBR:BUS-115	Masterpiece Cakeshop v. Colorado Civil Rights Commission (2018)	"Crux of issue is: <i>""whose rights prevail?""</i> Lower Courts agreed with the respondent, but Supreme Court agreed with the baker: Commission was seemingly negative towards religion, but no definitive resolution happened."	case constitution
CMBR:BUS-115	National Socialist Party v. Village of Skokie (1977)	"The ""Skokie Affair:"" citizen assertion of free speech being restrained must be reviewed by judiciary. First Amendment, NSP v. Skokie, and R.A.V. v. St. Paul"	case constitution
CMBR:BUS-115	Tinker v. Des Moines (1965)	High school students wore armbands to protest war; Courts ruled that they were covered given Free Speech.	case constitution
CMBR:BUS-115	Right to Anonymity	"Shields people from retribution from unpopular ideas; from the <i>""Tyranny of the Majority.""</i> Yet, Yelp &amp; Glassdoor were forced to reveal identities.&nbsp;"	case constitution
CMBR:BUS-115	West v. Barnette (1943)	Jehovah's Witnesses didn't salute the flag in school; Courts held that government cannot compel speech.	case constitution
CMBR:BUS-115	Due Process Clauses	Based on the <mark>5th Amendment</mark>and the <mark>14th Amendment</mark>. Neither the Federal nor State government may deprive an individual of  <u>life, liberty, or property</u> without due process of law.	case constitution
CMBR:BUS-115	Mathews v. Eldridge (1976)	Courts held that a citizens have a statutorily-granted property right for Social Security benefits and that termination of such benefits implicates due process, but a pre-termination hearing is not required.	case constitution
CMBR:BUS-115	The Takings Clause	Part of the <mark>5th Amendment</mark> that states that the government may seize private property but the owner must be compensated justly for it.	case constitution
CMBR:BUS-115	14th Amendment Scrutiny Tests	"<ol>
  <li>Strict Scrutiny Test: government must prove reason for different treatment; applies for cases of race, national origin, religion.</li>
  <li>Intermediate Scrutiny Test: government must show important interest in keeping different treatment; applies for cases of gender</li>
  <li>Minimal Scrutiny/Rational Basis Test: to determine whether a government interest exists; applies for cases of economics, age, and wealth.</li>
</ol>"	case constitution
CMBR:BUS-115	Privileges and Immunities Clause	From Article IV of the Constitution: ensures that citizens of each state are entitled to the same privileges of citizens of other states.	constitution
CMBR:BUS-115	Commerce Clause	"From Article I of the Constitution: <i>""Congress shall have the power to regulate Commerce with foreign Nations, and among the several States, and with the Indian Tribes.""</i>"	constitution
CMBR:BUS-115	Establishment Clause	"From Article I of the Constitution, concerning a law:<ol>
  <li>It must have a secular purpose.</li>
  <li>It must not foster excessive entanglement of government with religion.
  </li><li>It must  not have a primary effect of advancing or  inhibiting religion.</li>
</ol>"	constitution
CMBR:BUS-115	Equal Protection Inquiry	An inquiry as to whether equal treatment under the law applied, from the 14th Amendment: requires the three-step scrutiny test.	constitution
CMBR:BUS-115	Discuss the evolution of Commercial Speech and its steps for determination.	"Interpreted as part of Article I of the Constitution; originally not constitutional by Valentine v. Chrestensen (1942) but became constitutional later on. Four steps:<ol>
  <li>Speech mustn't  be misleading or involve illegal activity.</li>
  <li>A <i>substantive interest</i> in regulating the speech must be exist.</li>
  <li>A regulation must relate directly to the reason the speech needs to be limited.</li>
  <li>A regulation must not be more strict than necessary.</li>
</ol>"	constitution
	`],
];
const dummyFileSelect = (dump) => {
	const select = document.getElementById("anki-file-select");
	(()=>{x = document.createElement("option"); y = document.createTextNode("Select File"); x.appendChild(y); select.appendChild(x);})();
	for (let i = 0; i < dump.length; i++) {
		const option = document.createElement("option");
		option.setAttribute("value", dump[i][0]);
		option.textContent = dump[i][0];
		select.appendChild(option);

		select.onchange = function(){
			document.getElementById("anki-target").innerHTML = (()=>{ delimited = dump[i][1].split("\n"); delimited.forEach(segment => { segment.split("\t"); }); return "<span>" + delimited + "</span>"; })();
		}
	};
	
}

/* ----- NOTES & ANKI DATA ----- */

/** @description String array of Relevant Anki .txt File Names */
const ankiExports = [
	"CMBR_BUS-115",
	"CMBR_ACC-120",
	"CMBR_ACC-121",
	"CMBR_ACC-210",
	"CMBR_ACC-220",
];

/** @description Converts processed .html from .txt for Use in Current Window @param {DOMParserSupportedType} html @returns {String[]} delimited */
const splitTxt = (html) => {
	const tableBody = document.querySelector(".anki-table-body");
	const cellClasses = ["anki-col-deck", "anki-col-question", "anki-col-answer", "anki-col-tags"];
	let doc = html.querySelector("body").innerText;
	const delimited = Array.from(doc.split("\n"));
	delimited.pop();
	for (let i = 0; i < 4; i++) { delimited.shift(); }
	delimited.forEach(segment => {
		const row = document.createElement("div");
		row.setAttribute("class", "anki-table-row");
		const segmented = Array.from(segment.split("\t"));
		for (let i = 0; i < segmented.length; i++) { 
			const div = document.createElement("div"); 
			div.setAttribute("class", "anki-col"); 
			div.classList.add(cellClasses[i]); 
			div.appendChild(document.createTextNode(segmented[i]));
			row.appendChild(div);
		}
		tableBody.appendChild(row);
	});
	return delimited;
}

/** @description Option Tag Generator for Local Readable .txt Files @param {String[]} txtFiles */
const ankiFileSelect = (txtFiles) => {
	const select = document.getElementById("anki-file-select");
	(()=>{x = document.createElement("option"); y = document.createTextNode("Select File"); x.appendChild(y); select.appendChild(x);})();
	txtFiles.forEach(txt => {
		const option = document.createElement("option");
		option.setAttribute("value", txt);
		option.textContent = txt;
		select.appendChild(option);

		select.onchange = function(){
			routeAnkiData(select.value);
		}
	});
}

const ankiTagSelect = () => {
	const ankiTagSelect = document.getElementById("anki-tag-select");
	const tags = [];
	document.querySelectorAll(".anki-col-tags").forEach(grouping => {
		y = grouping.innerText.split(" "); y.forEach(x => {tags.includes(x) ? console.log(y.length) : tags.push(x); })
	});
	tags.shift();
	tags.forEach(tag => {
		(() => { x = document.createElement("option"); y = document.createTextNode(tag); x.appendChild(y); ankiTagSelect.appendChild(x); })();
	});
}

/** @description Reads .txt File as .html @param {String} txt Name of .txt File @implements {Promise<Object>} */
function routeAnkiData(txt) {

	fetch(`${document.location.origin}/anki/${txt}.txt`).then(response => {
    	return response.text();
	}).then(html => {
		const parser = new DOMParser();
		const doc = parser.parseFromString(html, "text/html");

		splitTxt(doc);
	
		ankiTagSelect();
(html => console.log("Rejected Txt File Read in Promise: " + html[0]));
	}).catch(error => {
		console.error('Failed to fetch page: ', error)
	});
}

/** @param {HTMLAllCollection} buttons @example enable{function}Buttons("button");*/
function enableAnkiButtons(buttons) {
	document.querySelectorAll(buttons).forEach(button => {
		button.onmouseenter = function() {
			CMBRutil.buttonOnMouseEnter(button);
		}
		button.onmouseleave = function() {
			CMBRutil.buttonOnMouseLeave(button);
		}
		button.onclick = function() {
			CMBRutil.buttonOnClick(button);
			switch(button.id) {
				case "button1":
					sout(button.id);
					break;
				case "button2":
					sout(button.id);
					break;
				case "button3":
					button.textContent = "✨sparkle✨"
					setTimeout(() => {
						button.textContent = "button3";
					}, 3000);
				default:
					sout("Default triggered!");
				break;
			}
		}
	});
}



function invoke(action, version, params={}) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('error', () => reject('failed to issue request'));
        xhr.addEventListener('load', () => {
            try {
                const response = JSON.parse(xhr.responseText);
                if (Object.getOwnPropertyNames(response).length != 2) {
                    throw 'response has an unexpected number of fields';
                }
                if (!response.hasOwnProperty('error')) {
                    throw 'response is missing required error field';
                }
                if (!response.hasOwnProperty('result')) {
                    throw 'response is missing required result field';
                }
                if (response.error) {
                    throw response.error;
                }
                resolve(response.result);
            } catch (e) {
                reject(e);
            }
        });

        xhr.open('POST', 'http://127.0.0.1:8765');
        xhr.send(JSON.stringify({action, version, params}));
    });
}

function ankiconnectDemonstrator() {
	const apiLog = document.getElementById("api-log");
	(async() => {
			await invoke('createDeck', 6, {deck: 'another'});
			const result = await invoke('deckNames', 6);
			console.log(`got list of decks: ${result}`);
			apiLog.textContent = result;
	});
}
// invoke('findNotes', 6, {params: {notes: [0]}});
// const result = invoke({
//     action: "findNotes",
//     version: 6,
// 	query: "deck:current"
// });

// console.log(`got list of decks: ${result}`);
// const outbound = result.textContent;
// sout(outbound);
	



(()=> {

	initNav();
	enableAnkiButtons("button");
	CMBRutil.acceptableProtocol() ? ankiFileSelect(ankiExports) : dummyFileSelect(dummyExports);

})();