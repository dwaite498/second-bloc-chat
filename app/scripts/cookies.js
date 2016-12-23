(function() {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            console.log('show modal')
          $uibModal.open({
              templateUrl: 'templates/usernamemodal.html',
              controller: 'userNameModal as user'
         })  
        }
    }
        
    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();