const allGridBlocks = document.querySelectorAll(".accounting-item");

window.onload = function () {
	console.log("Running!");
	allGridBlocks.forEach(gridBlock => {
		gridBlock.classList.add("load-padding-transition");
	});
}


// ---------- LEDGER GENERATOR  ---------- //

/**
 * 
 * @param {number} number Amount of double-entry lines to generate
 */
function generateLedger(number) {
	const div = document.createElement("div");
	// specify the above div
	const table = document.createElement("table");
	// table.setAttribute("class", "entry");
	// specify the above table
	const tr = document.createElement("tr");
	const th1 = document.createElement("th");
	th1.setAttribute("class", "th1-w");
	const th2 = document.createElement("th");
	th2.setAttribute("class", "th2-w");
	const th3 = document.createElement("th");
	th3.setAttribute("class", "th2-w");
	th1.innerHTML += `<button id="ledger-settings" class="accounting-button">Ledger Settings</button><select></select>`;
	th2.innerHTML += "Dr.";
	th3.innerHTML += "Cr.";
	tr.appendChild(th1);
	tr.appendChild(th2);
	tr.appendChild(th3);
	table.appendChild(tr);

	for (i = 0; i < number; i++) {
		const tr1 = document.createElement("tr");
		const td1 = document.createElement("td");
		td1.innerHTML = `<input type="text">`;
		const td2 = document.createElement("td");
		td2.innerHTML = `<input type="text">`;
		const td3 = document.createElement("td");
		td3.innerHTML = `<input type="text">`;

		const tr2 = document.createElement("tr");
		const td4 = document.createElement("td");
		td4.innerHTML = `<input type="text">`;
		const td5 = document.createElement("td");
		td5.innerHTML = `<input type="text">`;
		const td6 = document.createElement("td");
		td6.innerHTML = `<input type="text">`;


		tr1.appendChild(td1);
		tr1.appendChild(td2);
		tr1.appendChild(td3);

		tr2.appendChild(td4);
		tr2.appendChild(td5);
		tr2.appendChild(td6);

		

		table.appendChild(tr1);
		table.appendChild(tr2);

	}
	document.getElementById("ledger-prompter").appendChild(table);
}

generateLedger(3);

// ---------- T-ACCOUNT GENERATOR  ---------- //

const tCardGrid = document.getElementById("t-card-grid");
const generateTAccountButton = document.getElementById("generate-t-account-button");
let accountName = document.getElementById("account-name");
let accounts = [];

const tCardForm = document.getElementById("t-card-form");
function handleForm(event) {
	event.preventDefault();
}
tCardForm.addEventListener("submit", handleForm);

function generateTAccount(account){
	accounts.push(account);
	const div = document.createElement("div");
	div.setAttribute("class", "t-card");
	const table = document.createElement("table");
	table.setAttribute("id", `${account}-table`);

	for (let i = 0; i < 6; i++) {
		if (i === 0){
			let tr = document.createElement("tr");
			let th1 = document.createElement("th");
			let th2 = document.createElement("th");
			let th3 = document.createElement("th");
			let th4 = document.createElement("th");
			let text1 = document.createTextNode("ref#");
			let text2 = document.createTextNode("dr.");
			let text3 = document.createTextNode("cr.");
			let text4 = document.createTextNode("ref#");

			let hr = document.createElement("hr");
			let span = document.createElement("span");
			let text = document.createTextNode(account);
			span.appendChild(text);
			th1.appendChild(text1);
			th2.appendChild(text2);
			th3.appendChild(text3);
			th4.appendChild(text4);
			tr.appendChild(th1);
			tr.appendChild(th2);
			tr.appendChild(th3);
			tr.appendChild(th4);
			table.appendChild(tr);
			div.appendChild(span);
			div.appendChild(hr);

		} else {
		let tr = document.createElement("tr");
		let td1 = document.createElement("td");
		let td2 = document.createElement("td");
		let td3 = document.createElement("td");
		let td4 = document.createElement("td");
		let inp1 = document.createElement("input");
		let inp2 = document.createElement("input");
		let inp3 = document.createElement("input");
		let inp4 = document.createElement("input");
		inp1.setAttribute("type", "text");
		inp2.setAttribute("type", "text");
		inp2.setAttribute("id", `${account}-debits-${i}`);
		inp2.setAttribute("class", "t-value");
		inp2.setAttribute("value", 0);
		inp3.setAttribute("type", "text");
		inp3.setAttribute("id", `${account}-credits-${i}`);
		inp3.setAttribute("class", "t-value");
		inp3.setAttribute("value", 0);
		inp4.setAttribute("type", "text");
		inp1.setAttribute("style", "width:3rem;");
		inp2.setAttribute("style", "width:4rem;");
		inp3.setAttribute("style", "width:4rem;");
		inp4.setAttribute("style", "width:3rem;");
		td1.appendChild(inp1);
		td2.appendChild(inp2);
		td3.appendChild(inp3);
		td4.appendChild(inp4);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		table.appendChild(tr);
		}
	}
	const tr = document.createElement("tr");
	const td1 = document.createElement("td");
	const td2 = document.createElement("td");
	const td3 = document.createElement("td");
	const td4 = document.createElement("td");
	const debitsText = document.createTextNode("Debits");
	const creditsText = document.createTextNode("Credits");
	td1.appendChild(debitsText);
	td2.setAttribute("id", `${account}-debits-total`);
	td3.setAttribute("id", `${account}-credits-total`);
	td4.appendChild(creditsText);
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tr.appendChild(td4);
	table.appendChild(tr);
	div.appendChild(table);
	div.setAttribute("style", "text-align: left;");
	tCardGrid.appendChild(div);
	enableTCardCalculator();
}

function enableTCardCalculator(){
	document.querySelectorAll(".t-value").forEach(val => {
		let tId = val.id.toString();
		tId = tId.substring(0, tId.indexOf("-"));
		val.onchange = function(){
			calculateTCardTotals(tId);
			console.log("hitting change");
		}
		val.onsubmit = function(){
			calculateTCardTotals(tId);
		}
	})
}

function calculateTCardTotals(account){
	const tableRowCount = document.getElementById(`${account}-table`).children.length;
	const accountDebitsTotal = document.getElementById(`${account}-debits-total`);
	const accountCreditsTotal = document.getElementById(`${account}-credits-total`);
	let total = 0;
	for (let i = 1; i < tableRowCount - 1; i++) {
		let debits = document.getElementById(`${account}-debits-${i}`).value;
		let credits = document.getElementById(`${account}-credits-${i}`).value;
		debits = parseFloat(debits).toFixed(2);
		credits = parseFloat(credits).toFixed(2);
		total += parseFloat(debits) - parseFloat(credits);
		console.log("calculating" + total);
	}
	console.log(accountDebitsTotal);
	if (total >= 0) {
		accountDebitsTotal.innerHTML = total;
		accountCreditsTotal.innerHTML = 0;
	} else if (total < 0) {
		accountDebitsTotal.innerHTML = 0;
		accountCreditsTotal.innerHTML = total;
	}
}

// ---------- BUTTON MODULES ---------- //

function initAccountingButtons() {
	document.querySelectorAll(".accounting-button").forEach(button => {
	button.onclick = function() {
		ButtonInterface.buttonOnClick(button);
		switch(button.id) {
			case "one":
				console.log("pending!");
			break;
			case "two":
				console.log("pending!");
			break;
			case "generate-t-account":
				let account = accountName.value;
				if (!accounts.includes(account)) {
					console.log(account);
					generateTAccount(account);
					accountName.innerHTML = "";
				}
			break;
			default:
				console.log("pending!");
			break;
		}
	}

	button.onmouseenter = function() {
		ButtonInterface.buttonOnMouseEnter(button);
	}
	button.onmouseleave = function() {
		ButtonInterface.buttonOnMouseLeave(button);
	}

	});
}
initAccountingButtons();