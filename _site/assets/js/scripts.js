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
  // Ensure all panels are collapsed initially
  var panel = acc[i].nextElementSibling;
  panel.style.maxHeight = null;

  acc[i].addEventListener("click", function() {
    var activePanel = document.querySelector(".accordion.active");
    
    // Collapse the previously active panel, if any
    if (activePanel && activePanel !== this) {
      activePanel.classList.remove("active");
      activePanel.nextElementSibling.style.maxHeight = null;
    }

    // Toggle the current panel
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });

  // Add bottom border to the last panel
  if (i === acc.length - 1) {
    var lastPanel = acc[i].nextElementSibling;
    lastPanel.classList.add("last-panel");
  }
}


