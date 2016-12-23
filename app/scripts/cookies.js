(function() {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
          $uibModal.open({
              templateUrl: '/app/templates/usernamemodal.html',
              controller: 'usernameModal'
          })  
        }
    }
        
    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();