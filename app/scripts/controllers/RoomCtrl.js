//injects the database inoformation into the called scope 'this'
(function() {
    function RoomCtrl(Room) {
        this.rooms = Room.all;
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ["Room", RoomCtrl]);
})();