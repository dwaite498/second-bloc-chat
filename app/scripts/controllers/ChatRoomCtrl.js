(function() {
    function ChatRoom(Message) {
        this.messages = Message.getByRoomID("room");
    }
    
    angular
        .module("blocChat")
        .controller("ChatRoom", ["Message", ChatRoom])
})();