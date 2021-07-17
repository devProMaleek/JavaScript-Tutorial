let menuToggle, activeElement, toggledMenu;
menuToggle = document.querySelector('#menu-toggle');
activeElement = document.querySelectorAll('.active-element');
toggledMenu = menuToggle.addEventListener('click',function (){
    for(let activated = 0; activated < activeElement.length; activated++){
        activeElement[activated].classList.toggle("active");
    }
});
