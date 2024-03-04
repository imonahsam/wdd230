const modified = document.getElementById('last-modified');
modified.style.color = 'white';

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
