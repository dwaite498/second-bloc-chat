(function() {
    function SidebarCtrl(Room, roomService) {
        this.rooms = Room.all;
        
  
        this.deleteRoom = function() {
            Room.remove();
        }
        
        this.selectRoom = function(room) {
            roomService.activeRoomid = room.$id;
            
        }
    }
    angular
        .module('blocChat')
        .controller('SidebarCtrl', ["Room", 'roomService', SidebarCtrl])
})();