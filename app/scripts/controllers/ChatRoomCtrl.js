(function() {
    function ChatRoom(Message, roomService) {
        this.messages = Message.getByRoomID(roomService.activeRoomid);
    }
    
    angular
        .module("blocChat")
        .controller("ChatRoom", ["Message", 'roomService', ChatRoom])
})();