window.onload = () => console.log('Running!');

// --- INFO AND ENTRYWAYS --- //

const musiclink = '<a href="music/music.html">';
const musingslink = '<a href="musings/musings.html">';
const personalrecordlink = '<a href="personalrecord/personalrecord.html">';
const lifeinweekslink = '<a href="lifeinweeks/lifeinweeks.html">';
const dashboardlink = '<a href="dashboard/dashboard.html">';
const deadlink = 'PENDING UPDATE';
const linkending = 'Enter</a>';

const music = document.getElementById('music');
const musings = document.getElementById('musings');
const dashboard = document.getElementById('dashboard');

const now = new Date();
console.log(now.toDateString());
