window.onload = () => console.log("Running!");
const lastestUpdatePushed = "Wednesday August 28th, 2024";

// --- INFO AND ENTRYWAYS --- //

const latestUpdate = document.getElementById("latest-update");
latestUpdate.innerHTML = lastestUpdatePushed;

const iconPlay = document.querySelector("#camberden");

iconPlay.onclick = function(){
	console.log("Hi! :D");
}