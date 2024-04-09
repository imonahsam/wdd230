const modified = document.getElementById('last-modified');
modified.style.color = '#ffffff';

let lastMod = new Date(document.lastModified);

modified.innerHTML += lastMod;

const visitsDisplay = document.getElementById("visit");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	visitsDisplay.innerHTML += numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. Welcome!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});


