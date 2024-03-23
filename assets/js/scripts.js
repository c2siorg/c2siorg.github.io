var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  // Expand the panel by default
  var panel = acc[i].nextElementSibling;
  panel.style.maxHeight = panel.scrollHeight + "px";
  
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      console.log("if");
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      console.log("else");
    } 
  });

   // Add bottom border to the last panel
   if (i === acc.length - 1) {
    var lastPanel = acc[i].nextElementSibling;
    lastPanel.classList.add("last-panel");
  }
}

var backToTopBtn = document.querySelector("#back-to-top");

window.addEventListener("scroll", showArrowBtn);

function showArrowBtn() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

backToTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: 'smooth' }));
