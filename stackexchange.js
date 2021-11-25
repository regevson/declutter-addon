var mainbar = document.getElementById("mainbar");
mainbar.style.width = '100%';

var content = document.getElementById("content");
content.style.borderRadius = '15px';

var topbar = document.getElementsByClassName("top-bar")[0];
topbar.remove();

var leftsidebar = document.getElementById("left-sidebar");
leftsidebar.remove();

var body = document.getElementsByClassName("question-page")[0];
body.style.padding = "0";
body.style.background = "rgb(49, 49, 49)";
body.style.marginTop = "35px";

var header = document.getElementsByClassName("site-header");
header = header[0];
header.remove();


//var sidebar = document.getElementById("sidebar");
//sidebar.parentNode.removeChild(sidebar);



var leftsidebar = document.getElementById("left-sidebar");
leftsidebar.parentNode.removeChild(leftsidebar);

var banner = document.getElementById("js-gdpr-consent-banner");
banner.parentNode.removeChild(banner);

var footer = document.getElementById("footer");
footer.parentNode.removeChild(footer);

