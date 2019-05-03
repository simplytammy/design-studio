var side = document.getElementById("sideNav");
document.getElementById("sidebar-toggle").addEventListener("click", function(){
	side.classList.toggle("nav-active");
});
var close = document.getElementById("sideNav");
document.addEventListener("click", function(e) {
	if (e.target.closest("#sideNav") || e.target.closest("#sidebar-toggle")) return;
	close.classList.remove("nav-active");
});

function openPage(tabName,elmnt) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(tabName).style.display = "block";
  elmnt.style.backgroundColor = "#F28C32";
}
document.getElementById("defaultOpen").click();
