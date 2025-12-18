// ---------- GENERAL ITEM UTILITY ---------- //

const blockOne = document.getElementById("block-1");
const allButtons = document.querySelectorAll("button");
const itemSelectedDisplay = document.getElementById("item-title");
const itemList = document.getElementById("item-list");
const listOptions = document.getElementById("list-options");

function enableToyButtons() {
	document.querySelectorAll(".w-item").forEach(e => {
		e.onclick = function () {
			console.log(e.firstElementChild);
			switch (e.firstElementChild.id) {
				case ("pankair"):
					e.style.color = "green";
					break;
				case ("pankair-sw"):
					e.style.color = "green";
					break;
				case ("busmat"):
					e.style.color = "green";
					break;
				case ("elaor"):
					e.style.color = "blue";
					break;
				case ("nao"):
					e.style.color = "blue";
			}
		}
		e.onmouseenter = function() {
			e.classList.add("w-item-over");
		}
		e.onmouseleave = function() {
			e.classList.remove("w-item-over");
			e.classList.add("w-item-leave");
		}
	});
}
enableToyButtons();


