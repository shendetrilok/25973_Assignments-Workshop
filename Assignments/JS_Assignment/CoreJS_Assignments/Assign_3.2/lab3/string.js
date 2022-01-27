var companyName  = "Cybage Software Pvt Ltd";
var char = prompt("Enter the character you want to search : ");
var flag = false;
if(char.length > 1 || char.length == 0){
    alert("Enter again as you have typed more than 1 character or field is empty.")
    var char = prompt("Enter the character you want to search : ");
}
for(var index=0; index < companyName.length; index++){
    if(char == companyName.charAt(index).toLowerCase() || char == companyName.charAt(index).toUpperCase()){
        flag = true;
        document.querySelector('div').innerHTML = "Character "+char+" is found at position "+index+"<br>";
        break;
    }
}
if(flag == false){
    document.querySelector('div').innerHTML = "Character "+char+" not found<br>";
}

document.querySelector('div').innerHTML += companyName+" is popularly known as "+companyName.substring(0,15)+"<br>";
document.querySelector('div').innerHTML += companyName.toLowerCase()+"<br>";
document.querySelector('div').innerHTML += companyName.toUpperCase()+"<br>";

