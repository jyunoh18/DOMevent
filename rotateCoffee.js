   <img src="http://www.legalreader.com/wp-content/uploads/2015/10/Coffee-Cup-Bowl-With-Grains-Images.jpg" id="coffee" 
    onmouseover="rotatePos()" width="30%" onmouseout="rotateNeg()">
    
    --------------------------------------
    
    
function rotatePos() {
	document.getElementById('coffee').style.transform = "rotate(45deg)";
}


function rotateNeg() {
	document.getElementById('coffee').style.transform = "rotate(0deg)";
}
