(function() {
    function ModalCtrl(Room, $scope) {
        $scope.roomname = "";
        
       this.createRoom = function() {
            Room.add($scope.roomname);
        } 
    }
    
    
    angular
        .module("blocChat")
        .controller("ModalCtrl", ["Room", "$scope", ModalCtrl])
})();