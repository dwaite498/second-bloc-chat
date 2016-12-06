(function() {
    function AddRoom($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        rooms.$add({rooms: 'room'}).then(function(ref) {
        var id = ref.key;
        console.log('added record with id ' + id);
        rooms.$indexFor(id)
    })
        return {
            all: rooms
        };
        
    }
    angular
        .module('blocChat')
        .service('AddRoom', ['$firebaseArray', AddRoom]);
})();