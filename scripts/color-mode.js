const modeButton = document.querySelector(".colorMode");
const main = document.querySelector("body");


modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("dark")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "light";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "dark";
	}
});
