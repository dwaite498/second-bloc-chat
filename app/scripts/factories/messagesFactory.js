(function() {
    function Message($firebaseArray) {


        return {
            getByRoomID: function (roomID) {
                var ref = firebase.database().ref().child("messages").orderByChild("roomID").equalTo(roomID);
                console.log(ref);
                return $firebaseArray(ref);
            },
            send: function(newMessage) {
                
                //send message logic
            }
        };
    }

    angular
        .module("blocChat")
        .factory("Message", ["$firebaseArray", Message])
})();