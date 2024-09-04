window.onload = () => console.log("Running!");
const lastestUpdatePushed = "Wednesday September 4th, 2024";

// --- INFO AND ENTRYWAYS --- //

const latestUpdate = document.getElementById("latest-update");
latestUpdate.innerHTML = lastestUpdatePushed;

const iconPlay = document.querySelector("#camberden");

iconPlay.onclick = function(){
	alert("Hi! :D");
	console.log("Hi! :D");
}