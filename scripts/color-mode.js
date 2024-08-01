   const modeButton = document.querySelector(".colorMode");
const main = document.querySelector("body");


modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("dark mode")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "light mode";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "dark mode";
	}
});
