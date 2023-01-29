

function navLinks() {

    var allLinks = document.querySelectorAll("a.navbar__item");

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
}