(function() {
    function Message($firebaseArray) {


        return {
            getByRoomID: function (roomID) {
                var ref = firebase.database().ref().child("messages")
                return $firebaseArray(ref);
            }
        };
    }

    angular
        .module("blocChat")
        .factory("Message", ["$firebaseArray", Message])
})();