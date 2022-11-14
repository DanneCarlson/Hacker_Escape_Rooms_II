
const btn_open_menu = document.querySelector(".open-menu");
const menu_list = document.querySelector(".menu-list");



btn_open_menu.addEventListener("click", function () {
    console.log('funkar');

    //const navStyle = btn_open_menu.style.display;

    //const navStyle = menu_list.style.display;

    const menu_mobile = querySelector(".menu-mobile");

    if (menu_mobile.getAttribute("class") == "menu-mobile-show"){
        
      } else {
        //btn_open_menu.style.display == 'block';
      }







    /*if (menu_list.display == 'none' || menu_list == 'unset') {
        menu_list.style.display == 'block';
      } else {
        menu_list.style.display == 'none';
      }
    
    btn_open_menu.style.display = 'block';*/

    /*if (sakAttGoraLabel.getAttribute("class") == "completed") {
        // Om uppgiften redan har klassen utförd
        sakAttGoraLabel.setAttribute("class", "");
        avklaradeUppgifter--; // Subtrahera från avklarade uppgifter
      } else {
        sakAttGoraLabel.setAttribute("class", "completed"); // Annars ge den klassen completed via css
        avklaradeUppgifter++;*/ 


});

/*
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
  const navStyle = navbar.style.display;

  if (navStyle == 'none' || navStyle == 'unset') {
    navbar.style.display = 'block';
  } else {
    navbar.style.display = 'none';
  }
});


*/