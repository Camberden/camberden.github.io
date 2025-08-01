window.onload = () => console.log("Running!");

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
			switch (prompt.innerHTML) {
				case "Routine Tester":
					generateRoutineTester();
					modal.style.display = "block";
					break;	
				case "Wish List":
					generateWishList();
					modal.style.display = "block";
					break;
				case "Documents":
					generateReferenceDocuments();
					modal.style.display = "block";
					break;
				case "PSLF":
					modal.style.display = "block";
					generatePSLFinfo();
					break;
				case "Life Maintenance":
					generateMaintenanceList();
					modal.style.display = "block";
				break;
				default:
					console.log("hi");
				break;
			}
			console.log("hi");
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

function clearLifecraftField() {
	lifecraftField.innerHTML = "";
	console.log("Lifecraft Field Cleared!");
}

function clearModal() {
	document.getElementById("modal-text").innerHTML = "";
	console.log("Modal Cleared!");
}

/**
 * @param {string} name
 * @param {Date} birthday
 */
class Person {
	constructor(name, birthday) {
		this.name = name;
		this.birthday = birthday;
	}
}
const currentUser = new Person("Chrispy", new Date(1993, 11, 14));
const birthYear = currentUser.birthday.getFullYear();
const birthMonth = currentUser.birthday.getMonth();
const birthDate = currentUser.birthday.getDate();

const date = new Date();
const currentYear = date.getFullYear();
let changeYear = currentYear;
const currentMonth = date.getMonth();
const currentDay = date.getDate();
const currentDate = date.toDateString();
function getDaysInMonthOfYear(year, month) {
	return new Date(year, month, 0).getDate();
}

/**
 * 
 * @param {Date} currentDate 
 * @param {Date} birthDate 
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
const pslfRequirement = 120;
const creditedPSLFMonths = 45;
const daysSinceBirth = findDaysSinceBirthday(new Date(currentYear, currentMonth, currentDay), currentUser.birthday);
console.log("Current Date " + currentYear + "-" + (currentMonth + 1) + "-" + currentDay);
console.log("Current Date: " + new Date(currentYear, currentMonth, currentDay).toDateString);
document.getElementById("days-lived").textContent = ("Days Lived: " + daysSinceBirth);
document.getElementById("weeks-lived").textContent = ("Weeks Lived: " + (daysSinceBirth / 7).toFixed(2));
document.getElementById("years-lived").textContent = ("Years Lived: " + (daysSinceBirth / 365).toFixed(2));
document.getElementById("pslf").textContent = (": " + creditedPSLFMonths + "/" + pslfRequirement);

currentDateField.innerHTML = currentDate;

function getMonthText(val){
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	return months[val - 1];
}
console.log(getMonthText(birthMonth) + " " + birthDate + " " + birthYear);

// ----- LIFE EVENTS AND MONTHLY SUMMARIES BY YEAR ----- //

/**
 * @param {string} title
 * @param {string} eventDate - Format: YYYY-MM-DD
 * @param {string} photo
 * @param {string[]} description
 */
class LifeEvent {
	constructor(title, eventDate, photo, description) {
		this.title = title;
		this.eventDate = eventDate;
		this.photo = photo;
		this.description = description;
	}
}

const events = [
	birthEvent = new LifeEvent("My Birth", "1993-11-14", "", "I arrived physically on this planet."),
	rofDay = new LifeEvent("R.O.F. Day", "2017-7-9", "", 
		"Personal Holiday Established: the emotional difficulties encountered marked the very beginning of my self-reinvention"),
	firingDay = new LifeEvent("Firing Day", "2017-11-14", "", 
		"I was fired from my first position after college for tardiness. This event, coupled with July 9th, helped set my self-reinvention in motion"),
	securityCareer = new LifeEvent("Began Security Career", "2017-1-19", "", 
		"I began my new role in private security where I set out to redeem myself for past failures"),
	firstSecurityPromotion = new LifeEvent("First Security Promotion", "2018-6-16", "",
		"I promoted for the first time and donned the white shirt as a shift supervisor."),
	secondSecurityPromotion = new LifeEvent("Second Security Promotion", "2018-9-8", "",
		"I promoted a second time to a floating shift supervisor with more intra-region responsibilities"),
	thirdSecurityPromotion = new LifeEvent("Third Security Promotion", "2018-11-2", "", 
		"I promoted a third time to assistant operations manager, with intra-regional duties including payroll"),
	wvRelocation = new LifeEvent("Relocation to West Virginia", "2019-10-24", "",
		"I relocated to West Virginia to pursue a software development career at a talent-incubator company"),
	vanceRelocation = new LifeEvent("Relocation to North Carolina", "2020-8-9", "", "I uprooted and took my life to Vance County, NC"),
	publicCareer = new LifeEvent("Began Public Service", "2020-8-10", "", "I began my career of service."),
	chathamRelocation = new LifeEvent("Relocation to Chatham County, NC", "2024-12-16", "", "I relocated to Chatham County, NC due to interpersonal events."),
	chryslerTotalled = new LifeEvent("Car Totalled", "2025-3-3", "", "My trusty car was deemed a total loss."),
	whiteCar = new LifeEvent("White Car", "2025-3-4", "", "Got my new ride. Its white coat is familiar as it's the same as those at my workplace"),
	japanTravel1 = new LifeEvent("First Experience in Japan", "2025-6-22", "", "To Tokyo, Nara, Kyoto, and Osaka"),
	workanniversary5 = new LifeEvent("Pension Vested", "2025-8-10", "", "Raise & Vesting"),
	workanniversary6 = new LifeEvent("6th Year Work Anniversary", "2026-8-10", ""),

];

/**
 * @param {string} month - Format: Month-YYYY
 * @param {string} summary
 * @param {string} tune
 * @param {string} tuneLink
 */
class MonthlySummary {
	constructor(month, summary, tune, tuneLink) {
		this.month = month;
		this.summary = summary;
		this.tune = tune;
		this.tuneLink = tuneLink;
	}
}

/**
 * @param {string} obligation
 * @param {string} startMonth - Format: Month-YYYY
 * @param {string} endMonth - Format: Month-YYYY
 * @param {string} summary
 */
class MonthlyObligation {
	constructor(obligation, startMonth, endMonth, summary) {
		this.obligation = obligation;
		this.startMonth = startMonth;
		this.endMonth = endMonth;
		this.summary = summary;

	}
}

const monthlySummaries = [
	july2022 = new MonthlySummary("July-2022", "pending", "Orbital - Somewhere out There Part 2", "https://www.youtube.com/watch?v=HRFel2UtyiE"),
	march2023 = new MonthlySummary("March-2023", "pending", "Depeche Mode - My Little Universe", "https://www.youtube.com/watch?v=_oxm6rfzQaI"),
	april2023 = new MonthlySummary("April-2023", "pending", "Depeche Mode - Broken", "https://www.youtube.com/watch?v=urbmwI8APdo"),
	may2023 = new MonthlySummary("May-2023", "pending", "Depeche Mode - Ghosts Again", "https://youtu.be/iIyrLRixMs8?si=owHvGxz8W8BxlJhJ"),
	september2023 = new MonthlySummary("September-2023", "pending", "Orbital - Nowhere", "https://www.youtube.com/watch?v=ktgznOFpXeY"),
	december2024 = new MonthlySummary ("December-2024", "pending", "Pet Shop Boys - Suburbia", "https://www.youtube.com/watch?v=hUYfz_cEFzs"),
	january2025 = new MonthlySummary("January-2025", "pending", "Nobonoko - Cat Comet", "https://youtu.be/6uNkTqNSulY?si=QwNoXLVSVgJFtRRw&t=2342"),
	feburary2025 = new MonthlySummary("February-2025", "pending", "Napcast - People Places", "https://youtu.be/3MFfqQj3NUE?si=rqsLFwhTzhKhfQ98&t=198"),
	march2025 = new MonthlySummary("March-2025", "pending", "Yu Takahashi - Ashita wa Kitto Ii Hi ni Naru", "https://www.youtube.com/watch?v=cpIa89_rZoA"),
	april2025 = new MonthlySummary("April-2025", "pending", "Huwie Ishizaki - Peanuts Butter", "https://www.youtube.com/watch?v=ggCphjT_rPE"),
	may2025 = new MonthlySummary("May-2025", "pending", "Yu Takahashi - WINDING MIND", "https://www.youtube.com/watch?v=DBGXqqItKko"),
	june2025 = new MonthlySummary("June-2025", "pending", "Yu Takahashi - Open World", "https://www.youtube.com/watch?v=JwBWxcWP3BU"),
	july2025 = new MonthlySummary("July-2025", "pending", "Huwie Ishizaki - Bokugairuzo", "https://www.youtube.com/watch?v=BfoXJiHigl0"),
	// august2025 = new MonthlySummary("August-2025", "pending", "pending", "https://www.youtube.com/watch?v=BfoXJiHigl0"),
	// september2025 = new MonthlySummary("September-2025", "pending", "pending", "pending"),
	// october2025 = new MonthlySummary("October-2025", "pending", "pending", "pending"),
	// november2025 = new MonthlySummary("November-2025", "pending", "pending", "pending"),
	// december2025 = new MonthlySummary("December-2025", "pending", "pending", "pending"),
	// january2026 = new MonthlySummary("January-2026", "pending", "pending", "pending"),
	// february2026 = new MonthlySummary("February-2026", "pending", "pending", "pending"),
	// march2026 = new MonthlySummary("March-2026", "pending", "pending", "pending"),
	// april2026 = new MonthlySummary("April-2026", "pending", "pending", "pending"),
	// may2026 = new MonthlySummary("May-2026", "pending", "pending", "pending"),
	// june2026 = new MonthlySummary("June-2026", "pending", "pending", "pending"),
	// july2026 = new MonthlySummary("July-2026", "pending", "pending", "pending"),
	// august2026 = new MonthlySummary("August-2026", "pending", "pending", "pending"),
	// september2026 = new MonthlySummary("September-2026", "pending", "pending", "pending"),
	// october2026 = new MonthlySummary("October-2026", "pending", "pending", "pending"),
	// november2026 = new MonthlySummary("November-2026", "pending", "pending", "pending"),
	// december2026 = new MonthlySummary("December-2026", "pending", "pending", "pending"),
	// january2027 = new MonthlySummary("January-2027", "pending", "pending", "pending"),
];

const monthlyObligations = [
	sp2026 = new MonthlyObligation("ACC220", "January-2025", "April-2025", "Intermediate Accounting I"),
	su2025 = new MonthlyObligation("BUS110", "May-2025", "July-2025", "Study abroad Japan course."),
	fa2025 = new MonthlyObligation("ACC221", "August-2025", "December-2025", "Intermediate Accounting II"),
	sp2026 = new MonthlyObligation("ACC269", "January-2026", "April-2026", "Auditing & Assurance Services"),
	su2026 = new MonthlyObligation("ACC149&BUS115", "May-2026", "July-2026", "Intro to ACC Spreadsheets & Business Law I"),
	fa2026 = new MonthlyObligation("ACC129&ACC140", "August-2026", "December-2026", "Individual Income Taxes & Payroll Accounting"),
];

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
				document.getElementById("event-date").textContent = event.eventDate;
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
	let theseMonths = document.querySelectorAll(".these-months");
	
	theseMonths.forEach(thisMonth => {
		for (let task of monthlyObligations) {
			if (task.startMonth === thisMonth.id) {
				document.getElementById(thisMonth.id).innerHTML += `<span class="obligation">${task.obligation}</span>`;
		}
	}
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
		const hr = document.createElement("hr");
		monthSpan.appendChild(text);
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
	let indexProper = indexSum % 14;
	if (indexProper === 0) {
		indexProper = 14;
	}
	console.log("Year: " + year);
	console.log("Index Base: " + indexBase);
	console.log("Index Skip: " + indexSkip);
	console.log("Index Sum: " + indexSum);
	console.log("Index Proper: " + indexProper);
	console.log("Result: " + biweeklyRelations[indexProper]);
	console.log("Includes Off? " + biweeklyRelations[indexProper].includes("Off"));
	console.log("Includes On? " + biweeklyRelations[indexProper].includes("On"));

	calendarDays.forEach(calendarDay => {
		if (indexProper > 14) {
			indexProper = 1;
		}
		if (biweeklyRelations[indexProper].includes("Off")) {
			calendarDay.textContent += "E";
		}
		indexProper++;
	});
}

function enableLifecraftButtons() {
	let toggleSavings = false;
	document.querySelectorAll(".lifecraft-button").forEach(button => {
		
		button.onclick = function () {
			ButtonInterface.buttonOnClick(button);
			switch (button.value) {
				case "next":
					generateCalendar(++changeYear);
					generateSavingsProjector(currentDeposit, true);
					if (toggleSavings) {
						switchDisplay("savings-projection", true);
					}
					console.log(currentBalance);
				break;
				case "previous":
					generateCalendar(--changeYear);
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
						displayBiweeklyRotation(changeYear);
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


function switchDisplay(elements, displayed) {
	if (displayed) {
		document.querySelectorAll(`.${elements}`).forEach(element => {
			element.style.display = "block";
		});
	} else if (!displayed) {
		document.querySelectorAll(`.${elements}`).forEach(element => {
			element.style.display = "none";
		});
	}
}
switchDisplay("savings-projection", false);


// ----- MODAL FUNCTIONS ----- //

const maintenancePoints = [
	"Car: Tires",
	"Car: Wipers",
	"Car: Engine",
	"Car: Routine Maintenance",
	"Car: Registration [October 20XX]",
	"Place: Paper Towels",
	"Place: Toilet Tissue",
	"Place: Shampoo & Conditioner",
	"Place: Toothpaste & Toothbrushes",
	"Place: Hand Soap",
	"Place: Dishwasher Soap",
	"Place: Sponges",
	"Place: Razors and Blades",
	"Place: Deodorant and Cologne",
	"Place: Printer Ink & Paper",
	"Place: Incense",
	"Education: SP Term [December 20XX]",
	"Education: FA Term [July 20XX]",
	"Education: SU Term [April 20XX]",
	"Transponder: Fee [August 29th 20XX]",
	"SFD: [January 2026]",
	"SFC: [May 2026]",
	"SWC: [___ ___]",
	"AZC: [___ ___]",
	"Benefits: Enroll [October 20XX]",
];

function generateMaintenanceList() {
	const ul = document.createElement("ul");
	for (const point of maintenancePoints) {
		const li = document.createElement("li");
		const text = document.createTextNode(point);
		li.appendChild(text);
		ul.appendChild(li);
	}
	document.getElementById("modal-text").appendChild(ul);
}

const routines = [
	"SU2024",
	"SP2025",
	"SU2025",
];

function generateRoutineTester() {
	const ul = document.createElement("ul");
	for (let routine of routines) {
		const li = document.createElement("li");
		const text = document.createTextNode(routine);
		li.appendChild(text);
		ul.appendChild(li);
	}
	document.getElementById("modal-text").appendChild(ul);

}

const wishList = [
	"Journal Binders",
	"Magic Mouse",
	"FMAA Exam Course",
	"Specialty Display",
	"Specialized Bicycle",
	"Honda ADV160/NAVI/NC750X DCT",
	"Computer Monitor",
	"Moog 3-Tier Synth with Case",
	"Ten-Keyed Mechanical Keyboard",
	"Windows Laptop",
	"Tablet",
	"CPA Exam Course",
	"Raspberry Pi Server",
	"New Suit",
	"Smartphone Printer",
	"New Gym Clothes",
	"Casual Boots (Garmont, Timberland)",
	"DeleteMe Service",
	"Laracasts Lifetime Membership",
	"Expose PHP Package",
	"Table Plus",
	"MAMP Pro 7 Mac",
];

function generateWishList() {
	const ul = document.createElement("ul");
	for (const wish of wishList) {
		const li = document.createElement("li");
		const inp = document.createElement("input");
		inp.setAttribute("type", "checkbox");
		const text = document.createTextNode(wish);
		li.appendChild(inp);
		li.appendChild(text);
		ul.appendChild(li);
	}
	document.getElementById("modal-text").appendChild(ul);
}

function generatePSLFinfo() {
	const pslfBoxes = document.createElement("div");
	pslfBoxes.setAttribute("id", "pslf-boxes");
	const text = document.createTextNode(`PSLF Credit as of ${currentDate}: ${creditedPSLFMonths} of ${pslfRequirement}`);
	pslfBoxes.appendChild(text);

	for (i = 0; i < pslfRequirement; i++) {
		if (i % 12 === 0) {
			const pslfBoxLine = document.createElement("hr");
			pslfBoxLine.classList.add("modal-line");
			pslfBoxes.appendChild(pslfBoxLine);
		}
		const pslfBox = document.createElement("span");
		pslfBox.classList.add("pslf-box");

		if (i >= pslfRequirement - creditedPSLFMonths) {
			pslfBox.classList.add("pslf-box-filled");
		}
		pslfBoxes.appendChild(pslfBox);
	}
	document.getElementById("modal-text").appendChild(pslfBoxes);
}

const refdocs = [
	"../assets/refdoc-acc220-schedule.pdf",
	"../assets/refdoc-acc220-syllabus.pdf",
	"../assets/refdoc-acc220-acronyms.pdf",
	"../assets/refdoc-acc121-schedule.pdf",
	"../assets/refdoc-chzc-chant2020.pdf",
	"../assets/refdoc-cti110-key.pdf",
	"../assets/refdoc-duolingo-japanese-vocab.pdf",
	"../assets/refdoc-mat121-manual.pdf",
	"../assets/refdoc-mat171-manual.pdf",
	"../assets/refdoc-mat171-transformations.pdf",
	"../assets/refdoc-mysql-phpadmin-setup.pdf",
	"../assets/refdoc-mysql-phpadmin-setup.pdf",
	"../assets/refdoc-nc-college-equivalence.pdf",
	"../assets/refdoc-oryoki-guide.pdf",
	"../assets/refdoc-chzc-condensed.pdf",
];

function generateReferenceDocuments() {
	const ul = document.createElement("ul");
	for (const doc of refdocs) {
		const li = document.createElement("li");
		const a = document.createElement("a");
		const text = document.createTextNode(doc.substring(17, doc.length - 4));
		a.classList.add("marker");
		a.appendChild(text);
		a.setAttribute("href", doc);
		a.setAttribute("target", "_blank");
		li.appendChild(a);
		ul.appendChild(li);
	};
	document.getElementById("modal-text").appendChild(ul);

}


