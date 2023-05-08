const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.burger-icon');
const navItems = document.querySelectorAll('.nav__mob');

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');
};



navItems.forEach(item => {
    item.addEventListener('click', () => {
        navBtn.classList.remove('is-active');
        navMobile.classList.remove('nav-mobile--active');
    });
});

navBtn.addEventListener('click', handleNav);
