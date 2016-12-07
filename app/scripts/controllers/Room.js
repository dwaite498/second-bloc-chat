(function() {
  function Room($firebaseArray, roomName) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    var addRoom = function(roomName) {
      rooms.$add({rooms: roomName}).then(function(ref) {
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