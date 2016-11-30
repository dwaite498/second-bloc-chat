var config = {
            apiKey: "AIzaSyBcVGgPDu9cEJ5wRJFcxDFjYKh0Ktz3gYI",
            authDomain: "bloc-chat-6b055.firebaseapp.com",
            databaseURL: "https://bloc-chat-6b055.firebaseio.com",
            storageBucket: "bloc-chat-6b055.appspot.com"
        };
firebase.initializeApp(config);

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
                controller: 'LandingCtrl as landing',
                templateUrl: 'templates/landing.html'
            });
        
        }
    angular
        .module('blocChat', ["ui.router", "firebase"])
        .config(config);
})();

(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    return {
      all: rooms
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();

