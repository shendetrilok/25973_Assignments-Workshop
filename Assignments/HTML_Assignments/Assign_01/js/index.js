function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            function(showPosition){
                var positionInfo = "You are currently Located at ( Latitude : "+showPosition.coords.latitude+", Longitude : "+showPosition.coords.longitude+")";
                document.getElementById("myDiv").innerHTML = positionInfo;
            }
        );
    }else{
        positionInfo.innerHTML = "GeoLocation is not supported by this browser.";
    }
}