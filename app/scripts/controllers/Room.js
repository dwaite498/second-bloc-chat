//retrieves the firebase database and returns them as a variable called rooms.
(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
      
    var addRoom = function(roomName) {
      rooms.$add({name: roomName}).then(function(ref) {
        var id = ref.key;
        console.log('added record with id ' + id);
        rooms.$indexFor(id)
      })
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
