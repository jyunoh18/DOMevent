<div id="countup" onmousemove="runcounter()">
  <h1 id="thecounter"></h1>
</div>

---------------------------
CSS FILE

#countup {
  width: 200px;
  height: 200px;
  background-color: yellow;
 
}

-----------------------------

var i = 0;

function runcounter() {
	i ++;
  document.getElementById('thecounter').innerHTML = i
}
