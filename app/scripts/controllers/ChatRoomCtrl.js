(function() {
    function ChatRoom(Message, roomService, $cookies) {
        var _this = this;
        this.messages = [];
        function newActiveRoom() {
            _this.messages = Message.getByRoomID(roomService.getActiveRoomId());
        };
        roomService.subscribeToActiveRoomId(newActiveRoom);
        
        this.newMessage = function (text) {
            console.log(Message);
            var activeRoom = roomService.getActiveRoomId();
            var activeUser = $cookies.get('blocChatCurrentUser');
            Message.send(text, activeRoom, activeUser);
            _this.chatMessage = "";
        }
    }

    
    angular
        .module("blocChat")
        .controller("ChatRoom", ["Message", 'roomService', '$cookies', ChatRoom])
})();