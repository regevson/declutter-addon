var results = document.getElementsByClassName("g");
for(var i = 0; i < results.length; i++) {
	var result = results[i];
	result.style.background = "rgba(234, 234, 234, 0.66)";
	result.style.border = "2px dotted #00000094";
	result.style.width = "auto";
	result.style.padding = "5px 10px 5px 10px";
	result.style.borderRadius = "10px";
	result.style.overflow = "hidden";
}


var margin = document.getElementsByClassName("hlcw0c")[0];
margin.style.marginBottom = "0px";

margin = document.getElementsByClassName("ULSxyf")[0];
margin.style.marginBottom = "0px";

/* reduce margin (unnecessary)
margins = document.getElementsByClassName("jNVrwc");
for(var i = 0; i < margins.length; i++) {
	var margin = margins[i];
	margin.style.marginBottom = "0px";
}
*/

// colors special bgs that would otherwise get ignored (usually just one)
var extrabgs = document.getElementsByClassName("xpdopen");
for(var i = 0; i < extrabgs.length; i++) {
	var bg = extrabgs[i];
	bg.style.background = "rgb(234, 234, 234)";
}

/* remove stylization of inside div
var insidedivs = document.getElementsByClassName("Y4pkMc");
for(var i = 0; i < insidedivs.length; i++) {
	var insidediv = insidedivs[i];
	insidediv.style.background = "none";
	insidediv.style.border = "none";
}
*/


/*
var colors = document.getElementsByClassName("yDYNvb");
for(var i = 0; i < colors.length; i++) {
	var color = colors[i];
	color.style.color = "black";
}
*/

var stories = document.getElementsByClassName("TBC9ub")[0];
stories.remove();

