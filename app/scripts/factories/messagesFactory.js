(function() {
    function Message($firebaseArray) {
        //var ref = firebase.database().ref().child("messages");
        //var messages = $firebaseArray(ref);

        return {
            getByRoomID: function (roomID) {
                var ref = firebase.database().ref().child("messages")//.orderByChild("roomID").equalTo(roomID);
                return $firebaseArray(ref);
            }
        };
    }

    angular
        .module("blocChat")
        .factory("Message", ["$firebaseArray", Message])
})();