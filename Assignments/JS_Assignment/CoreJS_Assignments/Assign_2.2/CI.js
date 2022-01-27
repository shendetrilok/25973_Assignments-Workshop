var p = prompt("Enter Principal value : ");
var r = prompt("Enter Rate Of Interest( % ) : ");
var n = prompt("Enter Period( in years ) : ");

const compound_interest = (p * Math.pow((1+(r/100)),n))-p ;
document.querySelector('div').innerHTML = "The Total Interest to be paid is <b>Rs."+compound_interest.toFixed(2)+"<b>";