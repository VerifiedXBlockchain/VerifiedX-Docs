

function navLinks() {

    var desktopLinks = document.querySelectorAll("a.navbar__item");
    var mobileLinks = document.querySelectorAll(".menu__list-item a");
    var footerLinks = document.querySelectorAll(".footer__link-item");


    var allLinks = [...desktopLinks, ...mobileLinks, ...footerLinks];


    var links = [];
    for(var link of allLinks) {
        if(link.classList.contains('social-link')){
            continue;
        }
        if(link.href === "https://wallet.rbx.network/"){
            continue;
        }
        links.push(link);
    }

    for(var link of links) {
        link.target = "_self";
    }

}


window.onload = function() {
  navLinks();

  setTimeout(() => {
    navLinks();
  }, 1000)

  setTimeout(() => {
    navLinks();
  }, 2000)

  setTimeout(() => {
    navLinks();
  }, 3000)
}