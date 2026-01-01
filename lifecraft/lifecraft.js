const lifecraftField = document.getElementById("lifecraft-field");
const currentDateField = document.getElementById("current-date-field");
const modal = document.querySelector(".modal");
const closeModal = document.getElementsByClassName("close-modal")[0];

function enableModal() {
	document.querySelectorAll(".modal-prompt").forEach(prompt => {

		prompt.onmouseenter = function() {
			prompt.classList.add("secondary-highlight");
		}
		prompt.onmouseleave = function() {
			prompt.classList.remove("secondary-highlight");
		}
		prompt.onclick = function () {
			generateModalListHeader(prompt.innerHTML);
			modal.style.display = "block";
		};
		closeModal.onclick = function () {
			clearModal();
			modal.style.display = "none";
		};
		window.onclick = function (event) {
			if (event.target === modal) {
				modal.style.display = "none";
				clearModal();
			}
		};
	});
}
enableModal();

/**
 * @description Removes all elements within the main calerdar window
 */
function clearLifecraftField() {
	lifecraftField.innerHTML = "";
	console.log("Lifecraft Field Cleared!");
}
/**
 * @description Removes only the prose within modal 
 */
function clearModal() {
	document.getElementById("modal-text").innerHTML = "";
	console.log("Modal Text Cleared!");
}


function getDaysInMonthOfYear(year, month) {
	return new Date(year, month, 0).getDate();
}

/**
 * 
 * @param {Date} present 
 * @param {Date} birth 
 */
function findDaysSinceBirthday(present, birth) {
	const yearsSinceBirth = present.getFullYear() - birth.getFullYear() - 1; // -1 accounts for present year lived months
	
	console.log(yearsSinceBirth); // Says 32; TODO correct by month.
	console.log(present.getMonth());
	console.log(birth.getMonth());
	const monthOfBirthDaysTotal = new Date(birth.getFullYear(), birth.getMonth(), 0).getDate();
	const monthOfBirthDaysLived = monthOfBirthDaysTotal - birth.getDate();
	const presentMonthDaysLived = present.getDate();

	let totalDaysLived = monthOfBirthDaysLived + presentMonthDaysLived;
	console.log("Birth Month & Current Month Days Lived: " + totalDaysLived + " Nov 1993 Total: " + monthOfBirthDaysTotal + " Nov 1993 Lived: " + monthOfBirthDaysLived);
	const monthsRemainingInBirthYear = 12 % birth.getMonth();
	const monthsRemainingInPresentYear = present.getMonth();
	console.log("Months remaining in Birth Year: " + monthsRemainingInBirthYear);
	console.log("Remaining in Present Year: " + monthsRemainingInPresentYear);

	const daysRemainingInBirthYear = getDaysInMonthOfYear(birth.getFullYear(), (birth.getMonth() + monthsRemainingInBirthYear));

	// Gathers days following birth month for all months of birth year.
	for (let i = 1; i <= monthsRemainingInBirthYear; i++) {
		totalDaysLived += getDaysInMonthOfYear(birth.getFullYear(), (birth.getMonth() + i)); // BIRTH doesn't need +1; it's inbuilt
	}
	console.log("Days remaining in birth Year: " + daysRemainingInBirthYear);

	// Gathers days before present month for all lived months of current year.
	if (present.getMonth() > 0) {
		for (let i = present.getMonth(); i >= 0; i--) {
			totalDaysLived += getDaysInMonthOfYear(present.getFullYear(), ((present.getMonth() + 1) - i)); // +1 FOR DAY COUNT VALUES ONLY
		}
	}

	// Gathers days between birth year and present year.
	let by = birth.getFullYear() + 1;
	console.log(by);
	for (let i = 0; i < yearsSinceBirth; i++) {
		for (let j = 1; j <= 12; j++)
		totalDaysLived += getDaysInMonthOfYear(by, j);
	}
	return totalDaysLived;
}

const daysSinceBirth = findDaysSinceBirthday(new Date(currentYear, currentMonth, currentDay), currentUser.birthday);
document.getElementById("days-lived").textContent = ("Days Lived: " + daysSinceBirth);
document.getElementById("weeks-lived").textContent = ("Weeks Lived: " + (daysSinceBirth / 7).toFixed(2));
document.getElementById("years-lived").textContent = ("Years Lived: " + (daysSinceBirth / 366).toFixed(2));
document.getElementById("pslf").textContent = (": " + creditedPSLFMonths + "/" + pslfRequirement);

currentDateField.innerHTML = currentDate;

function getMonthText(val){
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	return months[val - 1];
}
console.log(getMonthText(birthMonth) + " " + birthDate + " " + birthYear);

/**
 * @param {number} year 
 */
function addEventsByYear(year) {
	const presentMoment = new Date(currentYear, currentMonth, currentDay);
	if (year === currentYear) {
		document.getElementById(currentYear + "-" + (currentMonth + 1) + "-" + currentDay).classList.add("current-day-highlight");
		document.getElementById("event-title").textContent = "The Present Moment";
		document.getElementById("event-date").textContent = currentDate;
		document.getElementById("event-description").textContent = "This very moment, you are browsing my site.";
	}
	for (let event of events) {
		let eventSplit = event.eventDate.split("-");
		// eventSplit - 1 compels proper month
		let eventSplitDate = new Date(eventSplit[0], eventSplit[1] - 1, eventSplit[2]);
		if (event.eventDate.substring(0,4) == year) {
			document.getElementById(event.eventDate).classList.add("event");
			if (eventSplitDate.getTime() > presentMoment.getTime()) {
				console.log(event.title + " is in the future");
				// console.log("Times: " + eventSplitDate.toDateString() + " " + presentMoment.toDateString());
				document.getElementById(event.eventDate).classList.add("future-event");
			}
			document.getElementById(event.eventDate).onclick = function() {
				document.getElementById("event-title").textContent = event.title;
				document.getElementById("event-date").textContent = eventSplitDate.toLocaleDateString("en-US", dateOptions); //TODO Change
				document.getElementById("event-photo").textContent = event.photo;
				document.getElementById("event-description").textContent = event.description;
			}
		}
	}
	// TODO: create new visual for this object's parameters
	for (let summaries of monthlySummaries) {
		if (document.getElementById(summaries.month) != null) {
		document.getElementById(summaries.month).onclick = function() {
			document.getElementById("event-photo").innerHTML = `<a href="${summaries.tuneLink}" target="_blank">${summaries.tune}</a>`;
			}
		document.getElementById(summaries.month).onmouseenter = function(){
			document.getElementById(summaries.month).classList.add("secondary-highlight");
		}
		document.getElementById(summaries.month).onmouseleave = function(){
			document.getElementById(summaries.month).classList.remove("secondary-highlight");
		}
		}
	}

	addObligations();
}

function addObligations(){
	
		document.querySelectorAll(".these-months").forEach(thisMonth => {
			const span = document.createElement("span");
			span.setAttribute("class", "obligation");
			span.innerHTML = ("\&emsp;\&emsp;\&emsp;");
		for (let task of monthlyObligations) {
			if (task.startMonth === thisMonth.id) {
					span.innerHTML = task.obligation;
				break;
			}
		}
		thisMonth.appendChild(span);
	});
}

// ----- MAIN GENERATOR ----- //

function generateCalendar(year) {
	clearLifecraftField();
	for (let i = 0; i < 12; i++) {
		const div = document.createElement("div");
		div.setAttribute("class", "calendar-month");
		const text = document.createTextNode(getMonthText(i + 1) + " " + year);
		div.setAttribute("id", `${(getMonthText(i + 1) + "-" + year + "-div")}`);
		const monthSpan = document.createElement("span");
		monthSpan.setAttribute("class", "these-months");
		monthSpan.setAttribute("id", `${getMonthText(i + 1) + "-" + year}`);
		const br = document.createElement("br");
		const hr = document.createElement("hr");
		monthSpan.appendChild(text);
		monthSpan.appendChild(br);
		div.appendChild(monthSpan);
		div.appendChild(hr);
		for (let j = 0; j < getDaysInMonthOfYear(year, i + 1); j++) {
			const span = document.createElement("span");
			span.setAttribute("id", `${year}-${i + 1}-${j + 1}`);
			span.setAttribute("class", "calendar-date");
			const text = document.createTextNode(j + 1);
			span.appendChild(text);

			// TODO for creating E schedule.
			div.appendChild(span);
		}
		lifecraftField.appendChild(div);
	}
	addEventsByYear(year);
}
generateCalendar(currentYear);

/**
 * @todo Assign c based on currentYear param
 */
function displayBiweeklyRotation(year) {

	const calendarDays = document.querySelectorAll(".calendar-date");
	const biweeklyRelations = [
		"Default", // XX2023 & i0
		"Long On 1", // 2024 @ i1
		"Long On 2",
		"Long Off 1", // 2025 @ i3
		"Long Off 2", // 2026 @ i4
		"Long On 3", // 2027 @ i5
		"Long On 4", // 2028 @ i6
		"Long On 5", 
		"Short Off 1", // 2029 @ i8
		"Short Off 2", // 2030 @ i9
		"Short On 1", // 2020, 2031 @ i10
		"Short On 2", // 2032 @i11
		"Short Off 3", //2021 @ i12
		"Short Off 4", //2022, 2033 @ i13
		"Short Off 5", //2023 @ i14
	];

	// let year = 2025; 
	// let remainder = year - (year % 40);
	let indexBase = year % 40; // IndexBase
	let indexSkip = Math.floor(indexBase / 4); // Amount of times leap year hit
	let indexSum = indexBase + indexSkip;
	if (indexBase % 4 === 0) {
		indexSum -= 1;
	}
	if (indexBase === 0 ) {
		indexSum = 0;
	}
	let indexProper = indexSum % 14;
	if (indexProper === 0) {
		indexProper = 14;
	}
	// console.log("Year: " + year);
	// console.log("Index Base: " + indexBase);
	// console.log("Index Skip: " + indexSkip);
	// console.log("Index Sum: " + indexSum);
	// console.log("Index Proper: " + indexProper);
	// console.log("Result: " + biweeklyRelations[indexProper]);
	// console.log("Includes Off? " + biweeklyRelations[indexProper].includes("Off"));
	// console.log("Includes On? " + biweeklyRelations[indexProper].includes("On"));

	calendarDays.forEach(calendarDay => {
		if (indexProper > 14) {
			indexProper = 1;
		}
		if (biweeklyRelations[indexProper].includes("Off")) {
			calendarDay.innerHTML += `<span class="aRotation">A</span>`;
		} else if (biweeklyRelations[indexProper].includes("On")){
			calendarDay.innerHTML += `<span class="bRotation">B</span>`;;

		}
		indexProper++;
	});
} 
displayBiweeklyRotation(changeYear);

function enableLifecraftButtons() {
	let toggleSavings = false;
	let toggleRotation = false;
	document.querySelectorAll(".lifecraft-button").forEach(button => {
		
		button.onclick = function () {
			ButtonInterface.buttonOnClick(button);
			switch (button.value) {
				case "next":
					generateCalendar(++changeYear);
					displayBiweeklyRotation(changeYear);
					switchDisplay("aRotation", toggleRotation);
					switchDisplay("bRotation", toggleRotation);
					generateSavingsProjector(currentDeposit, true);
					if (toggleSavings) {
						switchDisplay("savings-projection", true);
					}
					console.log(currentBalance);
				break;
				case "previous":
					generateCalendar(--changeYear);
					displayBiweeklyRotation(changeYear);
					switchDisplay("aRotation", toggleRotation);
					switchDisplay("bRotation", toggleRotation);
					generateSavingsProjector(currentDeposit, false);
					if (toggleSavings) {
						switchDisplay("savings-projection", true);
					}
					console.log(currentBalance);
				break;
				case "savings":
					if (toggleSavings) {
						switchDisplay("savings-projection", false);
						toggleSavings = false;
					} else if (!toggleSavings) {
						switchDisplay("savings-projection", true);
						toggleSavings = true;
					}
					console.log(toggleSavings);
				break;
				case "rotation":
						// displayBiweeklyRotation(changeYear);
						if (toggleRotation) {
							switchDisplay("aRotation", false);
							switchDisplay("bRotation", false);
							toggleRotation = false;
						} else if (!toggleRotation) {
							switchDisplay("aRotation", true);
							switchDisplay("bRotation", true);
							toggleRotation = true;
						};
					break;
				default:
					console.log("Default Switch Triggered");
				break;
			}
		}
		button.onmouseenter = function () {
			ButtonInterface.buttonOnMouseEnter(button);
		}
		button.onmouseleave = function () {
			ButtonInterface.buttonOnMouseLeave(button);
		}
	});
}
enableLifecraftButtons();

let currentBalance = 10000;
const originalBalance = currentBalance;
let currentDeposit = 1000;

/**
 * @param {number} deposit - Money to save
 * @param {boolean} ahead - Whether access next or previous calendar
 */
function generateSavingsProjector(deposit, ahead) {
	if (changeYear < currentYear) {
		currentBalance = originalBalance;
	}
	if (changeYear === currentYear) {
		if (!ahead) {
				currentBalance = currentBalance - ((deposit * (12 + ( 12 - (currentMonth)))));
			}
		for (let i = (currentMonth + 1), j = 0; i <= document.querySelectorAll(".calendar-month").length; i++, j++) {
			currentBalance += deposit;
			const div = document.createElement("div");
			div.setAttribute("class", "savings-projection");
			const span = document.createElement("span");
			const text = document.createTextNode(`$${currentBalance}`);
			span.appendChild(text);
			const hr = document.createElement("hr");
			div.appendChild(hr);
			div.appendChild(span);
			document.getElementById(`${getMonthText(currentMonth + 1 + j)}-${currentYear}-div`).appendChild(div);

			// document.getElementById(`${getMonthText(currentMonth + 1 + j)}-${currentYear}-div`).appendChild(hr);
			// document.getElementById(`${getMonthText(currentMonth + 1 + j)}-${currentYear}-div`).appendChild(span);
		}
	}
	if (changeYear > currentYear) {
		if (!ahead) {
				currentBalance = currentBalance - ((deposit * 12) * 2);
			}
		for (let i = 0; i <= document.querySelectorAll(".calendar-month").length - 1; i++) {
			currentBalance += deposit;
			const div = document.createElement("div");
			div.setAttribute("class", "savings-projection");
			const span = document.createElement("span");
			const text = document.createTextNode(`$${currentBalance}`);
			span.appendChild(text);
			const hr = document.createElement("hr");
			div.appendChild(hr);
			div.appendChild(span);
			document.getElementById(`${getMonthText(i + 1)}-${changeYear}-div`).appendChild(div);
		}
	}
	switchDisplay("savings-projection", false);
}
generateSavingsProjector(currentDeposit, true);

/**
 * 
 * @param {HTMLCollection} elements the HTML Class to target for display triggering
 * @param {Boolean} displayed whether the values are displayed at associated HTML Class
 */
function switchDisplay(elements, displayed) {
	if (displayed) {
		document.querySelectorAll(`.${elements}`).forEach(element => {
			element.style.display = "inline";
		});
	} else if (!displayed) {
		document.querySelectorAll(`.${elements}`).forEach(element => {
			element.style.display = "none";
		});
	}
}
switchDisplay("savings-projection", false);
switchDisplay("aRotation", false);
switchDisplay("bRotation", false);


// ----- MODAL FUNCTIONS ----- //

/**
 * @todo Complete & consolidate Modal List functions
 * @param {String} selection The list to generate, text
 */
function generateModalListHeader(selection) {
	const div = document.createElement("div");
	const selectionId = selection.replaceAll(" ", "-").toLowerCase();
	div.setAttribute("id", `${selectionId}`);
	const span = document.createElement("span");
	span.setAttribute("class", "modal-list-title");
	let ul = document.createElement("ul");
	const hr = document.createElement("hr");
	hr.classList.add("modal-line");
	console.log(selectionId);
	
	switch (selectionId) {

		case "pslf":
		span.innerHTML = `&emsp;Current PSLF Credit: &emsp; <br> &emsp; ${creditedPSLFMonths} months of ${pslfRequirement} months`;
		// const pslfBoxes = document.createElement("div");
		// pslfBoxes.setAttribute("id", "pslf-boxes");
		ul = document.createElement("div");
		for (let i = 0; i < pslfRequirement; i++) {																
				if (i % 12 === 0) {
					const pslfBoxLine = document.createElement("hr");
					pslfBoxLine.classList.add("modal-line");
					ul.appendChild(pslfBoxLine);
				}
				const pslfBox = document.createElement("span");
				pslfBox.classList.add("pslf-box");
				pslfBox.setAttribute("id", `pslf-mo-${pslfRequirement - i}`);
				pslfBox.innerText = pslfRequirement - i;

				if (i >= pslfRequirement - creditedPSLFMonths) {
					pslfBox.classList.add("pslf-box-filled-credited");
				} else if (i >= (pslfRequirement - (creditedPSLFMonths + uncreditedPSLFMonths))) {
					pslfBox.classList.add("pslf-box-filled-uncredited");
				}									
				ul.appendChild(pslfBox);
			}		
		break;
		case "documents":
			span.innerHTML = `&emsp;Reference Documents: &emsp; <br> &emsp; ${refdocs.length} filed.`;
			for (const doc of refdocs) {
				const li = document.createElement("li");
				const a = document.createElement("a");
				const text = document.createTextNode(doc.substring(17, doc.length - 4));
				// a.classList.add("marker");
				a.appendChild(text);
				a.setAttribute("href", doc);
				a.setAttribute("target", "_blank");
				li.appendChild(a);
				ul.appendChild(li);
			};
		break;
		case "wish-list":
			span.innerHTML = `&emsp; Wish List: &emsp; <br> &emsp; ${wishList.size} things are still interesting.`;
			for (const wish of wishList) {
				const li = document.createElement("li");
				const span = document.createElement("span");
				const a = document.createElement("a");
				a.setAttribute("href",`${wish[1]}`);
				a.setAttribute("target", "_blank");
				const text = document.createTextNode(wish[0]);
				a.appendChild(text);
				span.appendChild(a);
				li.appendChild(span);
				li.appendChild(a);
				ul.appendChild(li);
			}
		break;
		case "life-maintenance":
			span.innerHTML = `&emsp; Maintenance Points: &emsp; <br> &emsp; ${maintenancePoints.length} things involved.`;
				for (const point of maintenancePoints) {
					const li = document.createElement("li");
					const text = document.createTextNode(point);
					li.appendChild(text);
					ul.appendChild(li);
				}
			break;
		default:
			console.log("Default @ generateModalListHeader(selection)");
		break;
	}

	div.appendChild(span);
	div.appendChild(hr);
	div.appendChild(ul);
	document.getElementById("modal-text").appendChild(div);
}

