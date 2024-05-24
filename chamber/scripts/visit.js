// initialize display elements from html
const todayDisplay = document.querySelector("#today");
const visitsDisplay = document.querySelector("#visits");
const daysLeftOutput = document.querySelector("#daysleft");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls")); //

// determine if this is the first visit or display a message
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `Welcome! Let us know if you have any questions`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
// show todays date demonstration
todayDisplay.textContent = Date.now();
//84600000 equals the number of miliseconds in one day.

// Days until Christmas
let today = new Date();
let christmas = new Date(today.getFullYear(), 11, 25);
// check if is the waing days of December, if so ... change to next year.
if (today.getMonth() == 11 && today.getDate() > 25) {
	christmas.setFullYear(christmas.getFullYear() + 1);
}

let daysleft = (christmas.getTime() - Date.now()) / 84600000;

daysLeftOutput.innerHTML = `${daysleft.toFixed(

)} days<br> Christmas is ${christmas}`;
