function toggleNightMode() {
  var color = document.getElementById('main-container').style.color;
    
  var backgroundColor = document.body.style.backgroundColor;
  
    
  if (color == "black" && backgroundColor == "white") {
        document.getElementById('main-container').style.color="white";
        document.body.style.backgroundColor="black";
        document.getElementById('main-container').style.fontFamily="Arial";
        
    } else {
        document.getElementById('main-container').style.color="black";
        document.body.style.backgroundColor="white";
        document.getElementById('main-container').style.fontFamily="Times New Roman";
    }
}
