window.onload = () => console.log("Running!");
const lastestUpdatePushed = "Thursday September 5th, 2024";

// --- INFO AND ENTRYWAYS --- //

const latestUpdate = document.getElementById("latest-update");
latestUpdate.innerHTML = lastestUpdatePushed;

const iconPlay = document.querySelector("#camberden");

iconPlay.onclick = function(){
	alert("Hi! :D");
	console.log("Hi! :D");
}