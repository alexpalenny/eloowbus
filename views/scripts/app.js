var app = angular.module("eloowApp", []);
app.controller("eloowCtrl", ["$scope", "$http", function (scope, http) {
    var vm = this;
    vm.pages = {
        index: '/partials/pages/main.html',
        table: '/partials/pages/table.html',
        blank: '/partials/pages/blank.html',
    }

    vm.songs = {
        author: [],
        cover: [],
        acoustic: [],
    };
    http.get('api/songs/').then(function (res) { vm.songs = res.data; });

    vm.pageName = "table";
    vm.pageUrl = vm.pages[vm.pageName];
    vm.changePage = function (pageName) {
        vm.pageName = pageName;
        vm.pageUrl = vm.pages[vm.pageName];
    };
    vm.currentSong = {};
    vm.showSong = function (song) {
        vm.currentSong = song;
    };
    vm.saveSong = function () {
        //vm.currentSong.details = song;
        vm.editSong = false;
        http.post('api/savesongs/', vm.songs)
    };
    vm.getVideo = function(source) {
        return 'https://www.youtube.com/embed/' + source;
    }
}]);
app.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://www.youtube.com/**'
  ]);
});