(function() {
    function SidebarCtrl(Room) {
        this.rooms = Room.all;
        
  
        this.deleteRoom = function() {
            Room.remove();
        }
        
        this.selectRoom = function(room) {
            console.log(room);
        }
    }
    angular
        .module('blocChat')
        .controller('SidebarCtrl', ["Room", SidebarCtrl])
})();