var side = document.getElementById("sideNav");
document.getElementById("sidebar-toggle").addEventListener("click", function(){
	side.classList.toggle("nav-active");
});
var close = document.getElementById("sideNav");
document.addEventListener("click", function(e) {
	if (e.target.closest("#sideNav") || e.target.closest("#sidebar-toggle")) return;
	close.classList.remove("nav-active");
});
