window.onload = function () {
	console.log("Running!");
	allGridBlocks.forEach(gridBlock => {
		console.log("hi");
		gridBlock.classList.add("load-padding-transition");
	});
}

const allGridBlocks = document.querySelectorAll(".accounting-item");
