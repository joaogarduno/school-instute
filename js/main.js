const navSlide = () =>{
    const btnDesktopBurger = document.querySelector('.desktop__burger');
    const navMobileMenu = document.querySelector('.nav__menu--mobile');
    
    // mobile menu button
    const btnMobileBurger = document.querySelector('.mobile__burger');

    // OPEN MOBILE MENU
    btnDesktopBurger.addEventListener('click', () => {
        navMobileMenu.classList.toggle('nav-active');
    });

    // CLOSE MOBILE MENU
    btnMobileBurger.addEventListener('click', () => {
        navMobileMenu.classList.toggle('nav-active')
    });

}
navSlide();