// Map script
function loadMap(){
			
  var mapOptions = {
     center:new google.maps.LatLng(19.237233,  72.8456398),
     zoom:17
  }
  
  var map = new google.maps.Map(document.getElementById("map"),mapOptions);
  
  var marker = new google.maps.Marker({
     position: new google.maps.LatLng(19.237233,  72.8456398),
     map: map,
  });
  

  // Animation slider text
  $('.slides').textillate({
    in: {effect : 'bounceInDown'}
  });

}
