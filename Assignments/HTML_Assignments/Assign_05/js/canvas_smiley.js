var example = document.getElementById('example');

var context = example.getContext('2d');
context.beginPath();
context.fillStyle = "yellow";
context.arc(75,75,50,0,Math.PI * 2, true);
context.closePath();
context.fill();

var eye = example.getContext('2d');
eye.moveTo(55, 50);      
eye.beginPath();            
eye.fillStyle = "black";        
//left round eye    
eye.arc(50, 60, 4, 0, Math.PI * 2, true);    
eye.closePath();    
eye.fill();
eye.moveTo(103,49);
eye.beginPath();
eye.fillStyle = "black";    
//right round eye    
eye.arc(100, 60, 4, 0, Math.PI * 2, true);    
eye.closePath();    
eye.fill(); 

var smile = example.getContext('2d');     
smile.moveTo(105, 75);    
smile.beginPath();    
smile.strokeStyle = "black"; 
//smile   
smile.arc(75, 83, 25, 0, Math.PI, false);    
smile.stroke();  