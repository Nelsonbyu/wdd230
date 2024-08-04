document.addEventListener("DOMContentLoaded", function() {
    var today = new Date().getDay();
    if (today >= 1 && today <= 3) { // Monday, Tuesday, or Wednesday
      document.getElementById("chamberBanner").style.display = "block";
    }
  
    document.getElementById("closeBanner").addEventListener("click", function() {
      document.getElementById("chamberBanner").style.display = "none";
    });
  });
  