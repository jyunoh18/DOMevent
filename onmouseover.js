<img src="http://www.zalaw.com/images/happy-dog.jpg" id="dog" onmouseover="mouseOver()" onmouseout="mouseOut()">
<p id="instructions">
Move your mouse over the dog to see how a mouseover event triggers code
</p>

------------------------------------------------------

function mouseOver() {
	document.getElementById('instructions').innerHTML = "You touched the dog!";
}

function mouseOut() {
	document.getElementById('instructions').innerHTML = "I knew Web Design class loves dogs!";
}

--------------------------------------------------------
CSS PART 

#dog {
  width: 200px;
}
