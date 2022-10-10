var footer = document.getElementById("footer");
footer.style.display = "none";

var form = document.getElementById("post-form");
form.style.display = "none";

var mainbar = document.getElementById("mainbar");
mainbar.style.width = '100%';

var content = document.getElementById("content");
content.style.borderRadius = '15px';

var topbar = document.getElementsByClassName("s-topbar")[0];
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

var questionH = document.getElementsByClassName("question-hyperlink")[0];
questionH.style.fontWeight = "bold";
questionH.style.fontFamily = "Arial";

var banner = document.getElementsByClassName("py24")[0];
banner.style.display = "none";

var leftsidebar = document.getElementById("left-sidebar");
leftsidebar.parentNode.removeChild(leftsidebar);
