(function() {
    function userNameModal($cookies, $uibModalInstance) {
        this.addName = function(username) {
            
            // 1. username is undefined
                // do nothing
            // 2. username is empty ('')
                // do nothing
            // 3. username is not empty
                // set the cookie
                // close the modal

            if (!username || username === '') {
                return;
            }

            $cookies.put('blocChatCurrentUser', username);
            $uibModalInstance.close();
        }
    }

    angular
        .module('blocChat')
        .controller('userNameModal', ['$cookies', '$uibModalInstance', userNameModal])
})();