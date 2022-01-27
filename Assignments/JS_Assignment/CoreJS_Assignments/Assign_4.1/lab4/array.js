var studentList = [];

function addStudent(){
    if(document.getElementById('student').value == ""){
        alert("Field is Empty...!!!");
    }
    else{
        var student = document.getElementById('student').value;
        studentList.push(student);
        document.getElementById('student').value = "";
    }
}

function displayList(){
    
    if(studentList.length == 0){
        alert("List is Empty...!!!");
    }
    else{
        document.querySelector('div#myDiv').innerHTML = "";
        document.querySelector('div#myDiv').innerHTML += "<b>List of Students</b><br>";
        for(let index=1;index<50;index++){
            document.querySelector('div#myDiv').innerHTML += "-";
        }
        document.querySelector('div#myDiv').innerHTML += "<br><br>";
        for(stud of studentList){
            document.querySelector('div#myDiv').innerHTML += stud+"<br>";
        }
    }

}
