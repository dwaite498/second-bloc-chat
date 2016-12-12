(function() {
    function ChatRoom(Message) {
        this.messages = Message.getByRoomID("-KYjbsv_yQRfzMMO6qY5");
    }
    
    angular
        .module("blocChat")
        .controller("ChatRoom", ["Message", ChatRoom])
})();