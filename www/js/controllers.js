angular.module('starter.controllers', [])
    
.controller('loginCtrl', function($scope,$http,$state,$localstorage) {
  
    $scope.login = function (username) {
      	$http.get("1.php").success(function(data,status,headers,config){
      		if(data == username){
            $localstorage.setStorage('name',username);
      			console.log("登陆成功"+username);
            $state.go('tab.dash');
      		}else{
      			console.log("登陆失败");
      		}
      	}).error(function(data) {
      		console.log("数据请求不成功");
      	});
    };

    var name = $localstorage.getStorage('name');    
    if(name !== undefined){
      $scope.username = name;
    }

    $scope.register = function () {
        $state.go('register');
    };
})

.controller('searchCtrl', function($scope,$http,$ionicScrollDelegate,Works,$ionicHistory){
    $scope.works = Works.allWorks();
    $scope.doFresh = function () {
      $http.get('2.json')
        .success(function(newWorks){
          $scope.works = newWorks;
        })
        .finally(function(){
          $scope.$broadcast('scroll.refreshComplete')
        });
    };
    $scope.scrollTop = function(){
      $ionicScrollDelegate.scrollTop();
    };
    $scope.goBack = function () {
      $ionicHistory.goBack();
    };
    $scope.areas = 
      [
        {
          "name":"武汉",
          "cityList":["汉口","武昌","汉阳"]
        },
        {
          "name":"桥口",
          "cityList":["汉口","武昌","汉阳"]
        },
        {
          "name":"石家庄",
          "cityList":["汉口","武昌","汉阳"]
        }
      ];
    $scope.mouseoveroption = function (){
      alert("aaa");
    }
})

.controller('pubjobCtrl', function($scope,$ionicHistory) {
    $scope.goBack = function () {
      $ionicHistory.goBack();
    };
})

.controller('DashCtrl', function($scope,$state) {
    $scope.search = function (typework) {
      $state.go('search');
    };
    $scope.pubjob = function (){
      $state.go('pubjob');
    };
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
