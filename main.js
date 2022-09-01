let icon = document.querySelector('.toggle-menu');
let ul = document.querySelector('nav ul');

icon.onclick = () => {
  ul.classList.toggle('show');
}