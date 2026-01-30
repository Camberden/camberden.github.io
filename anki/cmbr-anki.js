const ankiExports = [
	"CMBR_BUS-115",
	"CMBR_ACC-120",
	"CMBR_ACC-121",
	"CMBR_ACC-210",
	"CMBR_ACC-220",
];

const splitTxt = (html) => {
	const doc = html.querySelector("body").innerText;
	const delimited = doc.split("\n");
	delimited.forEach(segment => {
		segment.split("\t");
	});
	return delimited;
}

const ankiFileSelect = (ankiTxtFiles) => {
	const select = document.getElementById("anki-file-select");
	(()=>{x = document.createElement("option"); y = document.createTextNode("Nothing"); x.appendChild(y); select.appendChild(x);})();
	ankiTxtFiles.forEach(txt => {
		const option = document.createElement("option");
		option.setAttribute("value", txt);
		option.textContent = txt;
		select.appendChild(option);

		select.onchange = function(){
			routeAnkiData(select.value);
		}
	});
}

function routeAnkiData(txt) {
	const target = document.getElementById("anki-target");
	let dataset;
	// fetch(`${document.location.origin}/anki/${txt}.txt`).then(response => response.text()).then((data) => {
	// 	console.log(data);
  	// });
	fetch(`${document.location.origin}/anki/${txt}.txt`).then(response => {
    	return response.text()
	}).then(html => {
		const parser = new DOMParser()
		const doc = parser.parseFromString(html, "text/html");
   		// You can now even select part of that html as you would in the regular DOM
   		// const docArticle = doc.querySelector('article').innerHTML

		const pieces = splitTxt(doc);
		console.log(pieces);
		pieces.forEach(piece => {
			(()=>{x = document.createElement("pre"); y = document.createTextNode(piece); x.appendChild(y); x.classList.add("countered-items"); target.appendChild(x);})();
		})
	}).catch(error => {
		console.error('Failed to fetch page: ', error)
	});
	
}

// target.innerHTML = dataset;
(()=> {

	wireDefaultButtons(document.querySelectorAll("button"), true);
	ankiFileSelect(ankiExports);
	

})();