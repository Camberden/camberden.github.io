window.onload = () => console.log("Running!");
const lastestUpdatePushed = "Monday September 16th, 2024";

// --- INFO AND ENTRYWAYS --- //

const latestUpdate = document.getElementById("latest-update");
latestUpdate.innerHTML = lastestUpdatePushed;

const camberden = document.querySelector("#camberden");
const monickers = ["camberden", "観葉伝", "カンバデン"];

function randomizeMonicker(){
	let m = Math.random();
	console.log(m);
	if (m < 0.1) {
		camberden.innerHTML = monickers[1];
	} else if (m > 0.9) {
		camberden.innerHTML = monickers[2];
	} else {
		camberden.innerHTML = monickers[0];
	}
}
randomizeMonicker();

camberden.onclick = function(){
	alert("Hi! :D");
}