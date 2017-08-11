
//Firebase

var config = {
    apiKey: "AIzaSyCwZuf2atSOFNbXYkOs0OpiL3Y2Qh3gFxw",
    authDomain: "jtestar-c4614.firebaseapp.com",
    databaseURL: "https://jtestar-c4614.firebaseio.com",
    projectId: "jtestar-c4614",
    storageBucket: "",
    messagingSenderId: "224503990197"
  };
  firebase.initializeApp(config);

//Kommentarer

var app = angular.module("app", ["firebase"]);

app.factory("kommentarer", function($firebaseArray) {
    var ref = firebase.database().ref().child("kommentarer");
    return $firebaseArray(ref);
  });

app.controller("KommentarCtrl", function($scope, kommentarer) {
    $scope.kommentarer = kommentarer;

    $scope.kommentar = {
      text: "",
      skribent: ""
    } 

    //För att lägga till kommentar
    $scope.addComment = function() {
        $scope.kommentarer.$add($scope.kommentar);
        
        $scope.kommentar = {
            text: "",
            skribent: ""
        };
    };

  });




//auto scrollen
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });
});