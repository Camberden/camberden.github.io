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
	})
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
const daysSinceBirth = findDaysSinceBirthday(new Date(currentYear, currentMonth, currentDay), currentUser.birthday);
console.log("Since Birth: " + daysSinceBirth);
console.log("Years Since Birth: " + (daysSinceBirth / 365));
console.log("Weeks since Birth: " + (daysSinceBirth / 7));

currentDateField.innerHTML = currentDate;
function getMonthText(val){
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	return months[val - 1];
}
console.log(getMonthText(birthMonth) + " " + birthDate + " " + birthYear);

function generateCalendar(year) {
	clearLifecraftField();
	for (let i = 0; i < 12; i++) {
		const div = document.createElement("div");
		div.setAttribute("class", "calendar-month");
		const text = document.createTextNode(getMonthText(i + 1) + " " + year);
		const hr = document.createElement("hr");
		div.appendChild(text);
		div.appendChild(hr);
		for (let j = 0; j < getDaysInMonthOfYear(year, i + 1); j++) {
			const span = document.createElement("span");
			span.setAttribute("id", `${year}-${i + 1}-${j + 1}`);
			span.setAttribute("class", "calendar-date");
			const text = document.createTextNode(j + 1);
			span.appendChild(text);
			div.appendChild(span);
		}
		
		lifecraftField.appendChild(div);
	}
	
}
generateCalendar(currentYear);

function enableLifecraftButtons() {
	document.querySelectorAll(".lifecraft-button").forEach(button => {
		
		button.onclick = function () {
			ButtonInterface.buttonOnClick(button);
			switch (button.value) {
				case "next":
					generateCalendar(++changeYear);
				break;
				case "previous":
					generateCalendar(--changeYear);
				break;
				default:
					console.log("Default Switch Triggered");
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

// TODO: Function to Populate Events by Year; link to blogData

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


]

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
