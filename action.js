window.onload = () => console.log("Running!");
const lastestUpdatePushed = "Tuesday September 3rd, 2024";

// --- INFO AND ENTRYWAYS --- //

const latestUpdate = document.getElementById("latest-update");
latestUpdate.innerHTML = lastestUpdatePushed;

const iconPlay = document.querySelector("#camberden");

iconPlay.onclick = function(){
	alert("Hi! :D");
	console.log("Hi! :D");
}