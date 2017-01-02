(function() {
    function SidebarCtrl(Room, roomService, $uibModal) {
        this.rooms = Room.all;
        
  
        this.deleteRoom = function(room) {
            $uibModal.open({
                templateUrl: 'templates/deleteRoomModal.html',
                controller: 'deleteRoomCtrl as delete',
                resolve: {
                    room: function() {
                        return room;
                    }
                }
            });
        }
        
        this.selectRoom = function(room) {
            roomService.setActiveRoomId(room.$id);
        }
    }
    angular
        .module('blocChat')
        .controller('SidebarCtrl', ["Room", 'roomService', '$uibModal', SidebarCtrl])
})();