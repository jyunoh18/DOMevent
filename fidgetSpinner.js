<div id="spinner" onmousemove="runCounter()"></div>

--------------------------------------
CSS FILE

#spinner {
  width: 500px;
  height: 500px;
  background-size: cover;
  background-image: url('http://www.asseenontvandbeyond.com/assets/images/fidget-spinner-black.jpg');
}

----------------------------------------

var i = 0;

function runCounter() {
i+=20;

document.getElementById('spinner').style.transform = "rotate("+i+"deg)";
}
