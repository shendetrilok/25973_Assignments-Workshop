var date = new Date();
var day = date.getDay;
var hour = date.getHours();
if(hour < 12){
    document.querySelector('div').innerHTML = date.toDateString()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+" AM<br>Good Morning!!!";
}
else if(hour >= 12 && hour <= 17){
    document.querySelector('div').innerHTML = date.toDateString()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+" PM<br>Good Afternoon!!!";
}
else{
    document.querySelector('div').innerHTML = date.toDateString()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+" PM<br>Good Evening!!!";
}
