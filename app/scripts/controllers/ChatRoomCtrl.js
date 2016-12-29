(function() {
    function ChatRoom(Message, roomService) {
        var _this = this;
        this.messages = [];
        function newActiveRoom() {
            _this.messages = Message.getByRoomID(roomService.getActiveRoomId());
        };
        roomService.subscribeToActiveRoomId(newActiveRoom);
    }
    
    angular
        .module("blocChat")
        .controller("ChatRoom", ["Message", 'roomService', '$cookies', ChatRoom])
})();