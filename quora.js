var rightBar = document.getElementsByClassName("hCJEkV")[0];
rightBar.parentElement.remove();

var mainbar = document.getElementById("mainContent");
mainbar.style.width = '100%';

var body = document.getElementById("root");
body.style.background = '#313131';

var header = document.getElementsByClassName("qu-fullX")[0];
header.remove();

header = document.getElementsByClassName("puppeteer_test_question_main")[0];
header.style.marginTop = "-20px";
header.firstChild.style.border = "2px solid white";
header.firstChild.style.borderRadius = "17px";
header.firstChild.style.background = "white";
