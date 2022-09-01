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
