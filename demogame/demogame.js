'use strict';

printTimer();
setInterval(printTimer, 1000);

function printTimer(){
	const d = new Date();
	document.getElementById('miniclock').innerHTML = d.toLocaleTimeString();
}


class Player {
	constructor(gamename, health, attack, defense){
		this.playerName = gamename;
		this.playerHealth = health;
		this.playerAttack = attack;
		this.playerDefense = defense;
	}

	static damage(player){
		player.health--;
	}
	static perish(player){
		alert('Oh my, you died.');
		player.innerHTML = '';
	}
}

let none = new Player ('', 0, 0, 0);
none.innerHTML = '';
// let prot = new Player('Protagonist', 10, 2, 0);
// let scrib = new Player('Scrib', 5, 1, 0);

