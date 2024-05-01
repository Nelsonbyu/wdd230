//getting current year and date 

//current year
var currentYear = new Date().getFullYear();
//last modification
var lastModifiedDate = document.lastModified;
//getting information from footer(in HTML)
var content = document.getElementById('content');
var more = document.getElementById('more');
var lastModified = document.getElementById('lastModified');

//getting the copyright and the name
content.innerHTML = "&copy; " + currentYear + " " + "&#9829" + " "+ "Tumwesige Nelson, Uganda" + " " + "&#9829";
more.innerHTML = "WDD 230, " + "Web Frontend Development 1 ";

//modification output
lastModified.textContent = "Last Modification: " + lastModifiedDate;
