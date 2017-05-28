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
        if (vm.currentSong.details.youTube && vm.currentSong.details.youTube.indexOf("youtube") !== -1)
           vm.currentSong.details.youTube = vm.youtube_parser(vm.currentSong.details.youTube);
        vm.currentSong.details = song;
        vm.editSong = false;
        http.post('api/savesongs/', vm.songs)
    };
    vm.getVideo = function (source) {
        return 'https://www.youtube.com/embed/' + source;
    }

    vm.youtube_parser = function (url) {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        var match = url.match(regExp);
        return (match && match[7].length == 11) ? match[7] : false;
    }
}]);
app.config(function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'https://www.youtube.com/**'
    ]);
});