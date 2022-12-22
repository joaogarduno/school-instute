const btnSubMenu = document.querySelector('.submenu__mobile--a');

for(i=0; i<btnSubMenu.length; i++){
    btnSubMenu[i].addEventListener('click', () => {
        if(window.innerWidth < 1024){
            const subMenu = this.nextElementSibling;
            const height = subMenu.scrollHeight;

            if(subMenu.classList.contains('deploy')){
                subMenu.classList.remove('deploy');
                subMenu.removeAttribute('style');
            } else{
                subMenu.classList.add('deploy');
                subMenu.style.height = height + "px";
            }
            // subMenu.style.height = height + 'px';
        }
    });
}

































































// MENU - SUBMENU
const navSlide = () => {
    const btnBurger = document.querySelector('.nav__burger');
    const menuNav = document.querySelector('.nav__menu');

    // close mobile menu
    const btnMobileMenu = document.querySelector('.nav__menu--btnBurger')

    // SUB MENU
    const btnSubMenu = document.querySelectorAll('.nav__menu--btnSubmenu');

    // cerrando mobile menu
    // 

    // EVENTOS
    // btnBurger.addEventListener('cick', showMenuMobile);

    // function showMenuMobile(){
    //     menuNav.classList.toggle('nav-active');

    //     // 
    //     btnBurger.classList.toggle('toggle')
    // }

    // SHOW MENU MOBILE
    btnBurger.addEventListener('click', () => {
        menuNav.classList.toggle('nav-active');

        // BURGER ANIMATION
        btnBurger.classList.toggle('toggle');
        // btnBurger.classList.toggle('toggle-close')
        // btnMobileMenu.classList.toggle('toggle-close');
        // btnMobileMenu.classList.toggle('toggle-close');
    });

    // CLOSE SUBMENU
    btnMobileMenu.addEventListener('click', () => {
        menuNav.classList.toggle('nav-active')

        btnMobileMenu.classList.toggle('toggle-close');
    });



    
     // for
    // un "for" por si hay varios submenus
    for(i = 0; i < btnSubMenu.lenght; i++){
        btnSubMenu[i].addEventListener('click', () => {
            if(window.innerWidth < 1024){
                const subMenu = this.nextElementSibling;
                const height = subMenu.scrollHeight;

                // 
                if(subMenu.classList('display')){
                    subMenu.classList.remove('display');
                    subMenu.removeAttribute('style');
                } else{
                    subMenu.classList.addEventListener('display')
                    subMenu.style.height = height + 'px';
                }
            }
        });
    }

}
navSlide();