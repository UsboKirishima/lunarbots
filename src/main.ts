import '../styles/style.css'
//import 'bootstrap/dist/css/bootstrap.css'

const app = document.querySelector<HTMLDivElement>('#app')!
let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle?.addEventListener("click", function() {
  mainNav?.classList.toggle("active");
});