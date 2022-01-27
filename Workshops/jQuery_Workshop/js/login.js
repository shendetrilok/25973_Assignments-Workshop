$(document).ready(
    ()=>{
            $("input[type='button']").click(()=>{
            var username=$("input[name='username']").val();
            var password=$("input[name='password']").val();
            if(username != "" && password != ""){
                $.ajax({
                url:"https://mocki.io/v1/9c1670cf-d7a0-4acb-ba6f-1b55639062c6",
                method:"GET",
                data:{
                    "username":username,
                    "password":password,
                },
                success:(x)=>{
                    alert(x.username+" login successfully...!!!");
                    window.location="registration.html"
                },
                error:(e)=>{
                    alert("Error!! "+e)
                }
            });
            }else{
                alert("Enter Username and Password...!!!")
            }
        });

    }
)