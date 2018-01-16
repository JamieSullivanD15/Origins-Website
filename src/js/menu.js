var menuIsOpen = false;

function openSideMenu() {
  if (menuIsOpen) {
    document.getElementById('mobile-menu').style.width = '0px';
    menuIsOpen = !menuIsOpen;
  } else {
    document.getElementById('mobile-menu').style.width = '250px';
    menuIsOpen = !menuIsOpen;
  }
}

function closeSideMenu() {
  document.getElementById('mobile-menu').style.width = '0px';
  menuIsOpen = !menuIsOpen;
}
