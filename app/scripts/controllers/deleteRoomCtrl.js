//injects the database inoformation into the called scope 'this'
(function() {
    function deleteRoomCtrl(room, $uibModalInstance, Room) {
        var modal = $uibModalInstance;
        // cancel: closes the modal without doing anything
        // delete: removes the room and all associated messages
        this.cancel = function() {
            modal.close();
        };
        this.delete = function() {
            Room.deleteRoom(room);
            modal.close();
        };
    }
    
    angular
        .module('blocChat')
        .controller('deleteRoomCtrl', ['room', '$uibModalInstance', 'Room',  deleteRoomCtrl]);
})();