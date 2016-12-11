(function() {
    function SidebarCtrl(Room) {
        this.rooms = Room.all;
        
  
        this.deleteRoom = function() {
            Room.remove();
        }
    }
    angular
        .module('blocChat')
        .controller('SidebarCtrl', ["Room", SidebarCtrl])
})();