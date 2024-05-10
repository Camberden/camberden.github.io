window.onload = () => console.log("Running!");
const lastestUpdatePushed = "Fri May 10 2024";

// --- INFO AND ENTRYWAYS --- //

const musiclink = `<a href="music/music.html">`;
const musingslink = `<a href="musings/musings.html">`;
const personalrecordlink = `<a href="personalrecord/personalrecord.html">`;
const lifeinweekslink = `<a href="lifeinweeks/lifeinweeks.html">`;
const dashboardlink = `<a href="dashboard/dashboard.html">`;
const linkending =`Enter</a>`;

const music = document.getElementById("music");
const musings = document.getElementById("musings");
const dashboard = document.getElementById("dashboard");

const latestUpdate = document.getElementById("latest-update");
latestUpdate.innerHTML = lastestUpdatePushed;

const menuItems = document.querySelectorAll(".section-title");
const iconPlay = document.querySelector("#camberden");

iconPlay.onclick = function(){
	console.log("Hi! :D");
}