setInterval(function () {
	const now = new Date();
	const clock = document.getElementById("clock");
	clock.innerHTML = now.toLocaleString();
}, 1000);
let backgroundImgSrc = "./img/background/Background.png";
const changeBackground = event=>{
	if (event.target.src){
		backgroundImgSrc = event.target.src;
		document.body.style.backgroundImage = `url(${backgroundImgSrc})`;
		const previoseImage = document.querySelector(".active");
		previoseImage.classList.remove("active");
		event.target.classList.add("active");
	}
}
const images = document.getElementById("images");
images.addEventListener("click",changeBackground);
