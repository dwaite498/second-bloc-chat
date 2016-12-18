(function() {
    function roomService() {
        var subscribers = [];
        function subscribeToActiveRoomId(subscriber) {
            subscribers.push(subscriber);
        };
        var activeRoomId = null;
        function setActiveRoomId(roomId) {
            activeRoomId = roomId;
            for (var i = 0; i < subscribers.length; i++) {
                var subscriber = subscribers[i];
                subscriber(); 
            }
        };
        
        function getActiveRoomId() {
            return activeRoomId;
        };

        
        return {setActiveRoomId: setActiveRoomId, getActiveRoomId: getActiveRoomId, subscribeToActiveRoomId: subscribeToActiveRoomId};
    };
    
    angular
        .module('blocChat')
        .factory('roomService', [roomService])
})();