<html>
  <head>
    
    
    <script>
      
      
      
      function sayHello() {
        var x = new Date()
        document.getElementById('aloha').innerHTML = "Hello. The day is " + x.getDate();
        
      }
      
    </script>
  </head>
  <body onload="sayHello()">
    <h1 id="aloha"></h1>
    
  </body>
</html>
