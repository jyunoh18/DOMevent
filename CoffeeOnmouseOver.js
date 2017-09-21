
    <img src="http://www.legalreader.com/wp-content/uploads/2015/10/Coffee-Cup-Bowl-With-Grains-Images.jpg" id="coffee" 
    onmouseover="goAway()" width="30%" onmouseout="comeBack()">
    
    ----------------------------------------------
    
          
       function goAway() {
        document.getElementById('coffee').style.visibility = "hidden";
      }
      
      function comeBack() {
        document.getElementById('coffee').style.visibility = "visible";
      }
