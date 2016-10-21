$(document).ready(function() {

  heatMapListener();

 $(function() {

    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

});
});

	var heatMapListener = function (){
         $('#feed-config').on('click','#heat', function(event){
            event.preventDefault();
            toggleHeatmap();
         });
         $('#feed-config').off('click','#heat', function(event){
            event.preventDefault();
            toggleHeatmap();
         });
	}


      var map, heatmap;
// var heatArray = new google.maps.MVCArray();
// heatArray.push(new google.maps.LatLng(37.782551, -122.445368),
//           new google.maps.LatLng(37.782745, -122.444586),
//           new google.maps.LatLng(37.782842, -122.443688),
//           new google.maps.LatLng(37.782919, -122.442815),
//           new google.maps.LatLng(37.782992, -122.442112));
//      console.log(heatArray);
      // generate map
           function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 37.773972, lng: -122.431297},
          zoom: 6
         });
         var heatArray = new google.maps.MVCArray();
         heatmap = new google.maps.visualization.HeatmapLayer({
          data: getPoints(),//heatArray,
        });

      }

    function generateMarker(longitude, latitude){
        return new google.maps.Marker({
          position: {lat: latitude, lng: longitude},
          map: map,
          animation: google.maps.Animation.DROP

        });
      }


      function toggleHeatmap() {
      	console.log("TOGGLED HEAT!");
      	heatmap.setMap(map);
      }

      function changeGradient() {
        var gradient = [
          'rgba(0, 255, 255, 0)',
          'rgba(0, 255, 255, 1)',
          'rgba(0, 191, 255, 1)',
          'rgba(0, 127, 255, 1)',
          'rgba(0, 63, 255, 1)',
          'rgba(0, 0, 255, 1)',
          'rgba(0, 0, 223, 1)',
          'rgba(0, 0, 191, 1)',
          'rgba(0, 0, 159, 1)',
          'rgba(0, 0, 127, 1)',
          'rgba(63, 0, 91, 1)',
          'rgba(127, 0, 63, 1)',
          'rgba(191, 0, 31, 1)',
          'rgba(255, 0, 0, 1)'
        ]
        heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
      }

      function changeRadius() {
        heatmap.set('radius', heatmap.get('radius') ? null : 20);
      }

      function changeOpacity() {
        heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
      }


       function addPoints(lat, long){
          new google.maps.LatLng(lat, long);

       }

      function getPoints() {
        var heatArray = [
          new google.maps.LatLng(37.782551, -122.445368),
          new google.maps.LatLng(37.782745, -122.444586),
          new google.maps.LatLng(37.782842, -122.443688),
          new google.maps.LatLng(37.782919, -122.442815),
          new google.maps.LatLng(37.782992, -122.442112),

        ];
        // heatArray.push(addPoints());

        return heatArray;
      }


    // var collectionOfPoints = [];
    //   var getTweetCoords = function(){

    //     $.ajax({
    //          url: "/app",
    //          method: "GET",
    //          async: false
    //        }).done(function(response){
    //          var obj = JSON.parse(response);


    //           obj.map(function(currentObject){

    //               collectionOfPoints.push(currentObject);

    //              });

    //          return collectionOfPoints;
    //          });
    //        console.log("INSIDE AJAX FUNCTION",collectionOfPoints.map(function(currObj){
    //           addPoints(currObj);
    //         }));
    //    }





