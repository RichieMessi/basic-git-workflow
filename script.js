// Wait for window to load
document.addEventListener("DOMContentLoaded", function() {

	// Get reference to header object
	let myHeader = document.getElementById("header-id");

	// Wait for 3 seconds, then display the header
	setTimeout(() => {
		myHeader.classList.remove("hidden");
	}, 3000);
});
