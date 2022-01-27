$(document).ready(
    ()=>{
            $("input[id='registerBtn']").click(()=>{
                var fname=$("input[name='firstName']").val();
                var lname=$("input[name='lastName']").val();
                var addr=$("input[name='address']").val();
                var pin=$("input[name='cityWithPin']").val();
                var birthDate=$("input[name='birthdate']").val();
            if(fname!="" && lname!="" && addr!="" && pin!="" && birthDate!=""){  
                $.ajax({
                    url:"https://mocki.io/fake-json-api/data",
                    method:"POST",
                    data:{
                        "firstname":fname,
                        "lastname":lname,
                        "address":addr,
                        "pincode":pin,
                        "birthdate":birthDate,
                    },
                    success:(x)=>{
                        alert("User details posted successfully")
                        window.location="login.html"
                    },
                    error:(e)=>{
                        alert("Error!! "+e)
                    }
                });
            }else{
                alert("fill all fields... ")
            }
        });

        $("input[id='backBtn']").click(()=>{
            window.location = "login.html";
        })

        $("input[name='city']").click(()=>{
            document.getElementsByName('cityWithPin').innerHTML="411_Pune";
        })

    }
)