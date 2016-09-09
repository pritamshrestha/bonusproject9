function myfunction(){

var newhed=document.createElement('h1');
var newtext=document.createTextNode("This is the text");
newhed.appendChild(newtext)
// this is for the new class
newhed.className="you"
document.getElementById('pritam').appendChild(newhed)
}
// this is for deleting the content of the page
$(document).ready(function(){
	$("#btn").click(function(){
      $('#pritam').remove();
	});

});