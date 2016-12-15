(function() {
    function roomService() {

        
        return {activeRoomid: null};
    };
    
    angular
        .module('blocChat')
        .factory('roomService', [roomService])
})();