function toggle(id, param) {
	document.getElementById(id).classList.toggle(param);
}

document.addEventListener("DOMContentLoaded", () => {
	console.log("loading events");
	document
		.getElementById("navToggle")
		.addEventListener("click", () => toggle("nav", "open"));
});
