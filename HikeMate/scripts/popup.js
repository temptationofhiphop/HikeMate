document.querySelector("#open-popup").addEventListener("click", function(){
	document.body.classList.add("active-popup");
});


document.querySelector(".pop-up .close-btn").addEventListener("click", function(){
	document.body.classList.remove("active-popup");
});