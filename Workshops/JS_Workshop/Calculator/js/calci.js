
function display(value){
    document.getElementById("output").value += value;
}

function clearDisplay(){
    document.getElementById("output").value="";
}

function solve(){
    var equation=document.getElementById("output").value
    var result = eval(equation);
    document.getElementById("output").value=result;
}