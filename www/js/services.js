angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('$localstorage', ['$window', function($window){
  return {
    setStorage:function(key,value){
      $window.localStorage[key] = value;
    },
    getStorage:function(key,defaultValue){
      return $window.localStorage[key] || defaultValue;
    },
    setObjStorage:function(key,value){
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObjStorage:function(){
      return JSON.parse($window.localStorage[key] || '{}');
    }
  };
}])

.factory('Works', function () {
  var works = 
    [
    {
        "company": "武汉凡骨技术股份有限公司",
        "click": "6",
        "time": "2015-10-5",
        "face": "https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png",
        "valid":"true",
        "type":"装修工种，贴瓷砖"
    },
    {
        "company": "联想（武汉）科技有限公司",
        "click": "8",
        "time": "2015-13-5",
        "face": "https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png",
        "valid":"false",
        "type":"装修工种，贴瓷砖"
    },
    {
        "company": "武汉凡骨技术股份有限公司",
        "click": "6",
        "time": "2015-10-5",
        "face": "https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png",
        "valid":"true",
        "type":"装修工种，贴瓷砖"
    },
    {
        "company": "联想（武汉）科技有限公司",
        "click": "8",
        "time": "2015-13-5",
        "face": "https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png",
        "valid":"false",
        "type":"装修工种贴瓷砖"
    },
    {
        "company": "武汉凡骨技术股份有限公司",
        "click": "6",
        "time": "2015-10-5",
        "face": "https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png",
        "valid":"true",
        "type":"装修工种，贴瓷砖"
    }
  ];

  return {
    allWorks: function () {
      return works;
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  }
})
;
