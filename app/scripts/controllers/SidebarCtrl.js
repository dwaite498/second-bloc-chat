(function() {
    function SidebarCtrl(Room) {
        this.rooms = Room.all;
        this.createRoom = function() {
            Room.add("new room");
        }    
    }
    angular
        .module('blocChat')
        .controller('SidebarCtrl', ["Room", SidebarCtrl])
})();