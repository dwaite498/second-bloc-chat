(function() {
    function Message($firebaseArray) {
        var ref = firebase.dataase().ref.child("messages");
        var messages = $firebaseArray(ref);
        
        return {
            getByRoomID: function (roomID) {
                messages.orderByChild(roomID).equalTo("-KYjbsv_yQRfzMMO6qY5").on('value', function(snapshot) {
  console.log(snapshot.val());
});
            }
        };
    }
    
    angular
        .module("blocChat")
        .factory("Message", ["$firebaseArray", Message])
})();