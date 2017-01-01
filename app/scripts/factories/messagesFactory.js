(function() {
    function Message($firebaseArray) {
        function currentTime() {
            var date = new Date();
            var h = date.getHours();
            var m = date.getMinutes();
            var dayNight = "AM";
            
            if (h > 12) {
                h -= 12;
                dayNight = "PM";
            };
            if (m < 10) {
                n = "0" + m;
            }
            return h + ":" + m + " " + dayNight;
        }

        return {
            getByRoomID: function (roomID) {
                var ref = firebase.database().ref().child("messages").orderByChild("roomID").equalTo(roomID);
                console.log(ref);
                return $firebaseArray(ref);
            },
            send: function(newMessage, roomID, username) {
                var ref = firebase.database().ref().child("messages");
                var message = {
                    username: username,
                    content: newMessage,
                    sentAt: currentTime(),
                    roomID: roomID
                }
                $firebaseArray(ref).$add(message);
            }
        };
    }

    angular
        .module("blocChat")
        .factory("Message", ["$firebaseArray", Message])
})();