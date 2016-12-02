//initialize the angular database inside the app
var config = {
            apiKey: "AIzaSyBcVGgPDu9cEJ5wRJFcxDFjYKh0Ktz3gYI",
            authDomain: "bloc-chat-6b055.firebaseapp.com",
            databaseURL: "https://bloc-chat-6b055.firebaseio.com",
            storageBucket: "bloc-chat-6b055.appspot.com"
        };
firebase.initializeApp(config);

//stateprovider for the app, directing routing the states to the templates and controllers
(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        $stateProvider
            .state('landing', {
                url: '/',
                controller: 'RoomCtrl as landing',
                templateUrl: 'templates/landing.html'
            });
        
        }
    angular
        .module('blocChat', ["ui.router", "firebase"])
        .config(config);
})();


//pulls the firebase list of rooms and leaves them available for injection
(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    var addRoom = function(roomName) {
        rooms.$add({rooms: roomName}).then(function(ref) {
            var id = ref.keyCode
            console.log('added record with id ' + id);
            rooms.$indexFor(id);
        })
        var id - ref.key;
        
    };

    return {
      all: rooms,
      add: addRoom
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();




//this is for the next assignment



