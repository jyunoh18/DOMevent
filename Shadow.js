   <img src="http://www.legalreader.com/wp-content/uploads/2015/10/Coffee-Cup-Bowl-With-Grains-Images.jpg" id="coffee" 
    onmouseover="shadow()" width="30%" onmouseout="shadowOut()">
    
-----------------------------------------------------
    
    function shadow () {

document.getElementById('coffee').style.boxShadow = "0px 8px 5px #d3d3d3";
}

function shadowOut () {
document.getElementById('coffee').style.boxShadow = "0px 0px 0px #d3d3d3";
}
