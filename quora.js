var rightBar = document.getElementsByClassName("hCJEkV");
rightBar = rightBar[0];
rightBar.parentElement.remove();

var mainbar = document.getElementById("mainContent");
mainbar.style.width = '100%';

var header = document.getElementsByClassName("qu-fullX");
header = header[0];
header.remove();

header = document.getElementsByClassName("puppeteer_test_question_main");
header = header[0];
header.style.marginTop = "-60px";
