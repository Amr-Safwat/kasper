// Change background for landing
let landing = document.querySelector('.landing');

currItem = 2;

let leftBtn = document.querySelector('.landing .left');
let rightBtn = document.querySelector('.landing .right');

leftBtn.onclick = function () {
	if (currItem != 1) {
		currItem--;
		check();
	}
};
rightBtn.onclick = function () {
	if (currItem != 3) {
		currItem++;
		check();
	}
};

let bullets = document.querySelectorAll('.bullets li');

check();

function check() {
	if (currItem == 1) {
		landing.style.backgroundImage = "url('../images/landing1.jpg')";
	} else if (currItem == 2) {
		landing.style.backgroundImage = "url('../images/landing2.jpg')";
	} else if (currItem == 3) {
		landing.style.backgroundImage = "url('../images/landing3.jpg')";
	}

	bullets.forEach((bullet) => {
		bullet.classList.remove('active');
	});
	bullets[currItem - 1].classList.add('active');
}
// Change background for landing

let icon = document.querySelector('.toggle-menu');
let ul = document.querySelector('nav ul');

icon.onclick = () => {
	ul.classList.toggle('show');
};

let portLi = document.querySelectorAll('.portfolio ul li');

portLi.forEach((el) => {
	el.onclick = () => {
		portLi.forEach((el) => {
			el.classList.remove('active');
		});
		el.classList.add('active');
	};
});
