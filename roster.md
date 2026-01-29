# Offender Roster
*08/16/2025*  
*Pittsboro, NC*  
*1603HRS*  

Below are the roster functions.  
They apply to documents printed from OPUS servlets.  
The following code is in JavaScript.

## Roster Functions
### fn => getBolds()  
>``
function getBolds() {
	const beds = document.querySelectorAll("b");
	let counter = 1;
	for (let bed of beds) {
		if (bed.textContent === ("Bed:")) {
			console.log(bed.textContent + " " + counter);
			counter++; 
			} else {
				console.log(bed.textContent);
			}
		}
	}
>``
### fn => smalldataSort()
#### TODO: Collect 6 SmallData into one class.
---
>``
let assignments = [];
function smalldataSort() {
	const smalldata = document.querySelectorAll(".smalldata");
	for (i = 0; i < smalldata.length; i++) {
		if (smalldata[i].textContent.includes("Bed:")){
			let bedStart = smalldata[i].textContent.lastIndexOf("Bed:");
			let bedEnd = smalldata[i].textContent.indexOf("FELON");
			console.log(smalldata[i].textContent.substring(bedStart + 4, bedEnd));
			let assignment = smalldata[i].textContent.substring(bedStart + 4, bedEnd);
			assignments.push(assignment);
		} else {
			console.log(i);
		}
	}
}
>``
### fn => generateBedIds()
#### TODO: Allow proper association between cell name & number.
>``  
function generateBedIds(){  
	const bedIds = [];  
	const scw = "SCW- ";  
	const sce = "SCE- ";  
	for (i = 101; i < 121; i++){  
		console.log(i);  
	}  
}  
>``
### fn => generateNewPageGrid()
#### TODO: Remake DOM display.
>``
function generateNewPageGrid() {
	const div = document.createElement("div");
	div.style = `
	display: grid;
		gap: 1.5rem;
		grid-template-columns: repeat(5, 20%);
		width: min(95%, 70rem);
		margin-inline: auto;
		max-height: min-content;
	`;
	div.setAttribute("id", "new-grid");
	document.getElementById("top").appendChild(div);
	for (i = 0; i < 40; i++) {
		const span = document.createElement("span");
		span.textContent = i;
		document.getElementById("new-grid").appendChild(span);
	}
}
>``