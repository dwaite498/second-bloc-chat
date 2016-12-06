//injects the database inoformation into the called scope 'this'
(function() {
    function RoomCtrl(Room) {
        this.rooms = Room.all;
        
        function addRoom () {
           this.addRoom = Room.add; 
        }
        
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ["Room", "AddRoom", RoomCtrl]);
})();