(function() {
    function userNameModal($cookies, $scope, $uibModal) {
        var newUser = $cookies;
        this.addName = function($scope) {
            newUser.put('blocChatCurrentUser', $scope.username)
            console.log($scope.username);
            $uibModal.close();
        }
        newUser.put('someCookie', 'something')
    }

    angular
        .module('blocChat')
        .controller('userNameModal', ['$cookies', '$scope', '$uibModal', userNameModal])
})();