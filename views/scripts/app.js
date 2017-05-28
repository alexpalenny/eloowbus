var app = angular.module("eloowApp", []);
app.controller("eloowCtrl", ["$scope", "$http", function (scope, http) {
    var vm = this;
    vm.pages = {
        index: '/partials/pages/main.html',
        table: '/partials/pages/table.html',
        blank: '/partials/pages/blank.html',
    }
    vm.pass = "";
    vm.songs = [];
    vm.songTypes = ["author", "cover", "acoustic"];
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
    vm.saveSong = function (song) {
        if (vm.pass) {
            if (song.details && song.details.youTube && song.details.youTube.indexOf("youtube") !== -1)
                song.details.youTube = youtube_parser(song.details.youTube);
            vm.editSong = false;
            saveSongs();
        }
        else alert("Please enter password");
    };
    vm.getVideo = function (source) {
        return 'https://www.youtube.com/embed/' + source;
    }
    vm.createSong = function (type) {
        vm.currentSong = { name: "", type: type };
    }
    vm.addSong = function (song) {
        if (vm.pass) {
            var songToAdd = angular.copy(song);
            if (songToAdd.name && vm.songs.map(function (val) { return val.name; }).indexOf(songToAdd.name) === -1 && songToAdd.type && vm.songTypes.indexOf(songToAdd.type) !== -1) {
                vm.songs.push(songToAdd);
                saveSongs();
            }
            else alert("Song is invalid!");
        }
        else alert("Please enter password");
    }
    vm.removeSong = function (song) {
        if (vm.pass) {
            vm.songs = vm.songs.filter(function (val) { return val.name != song.name || val.type != song.type });
            saveSongs();
        }
        else alert("Please enter password");
    }
    function saveSongs() {
        http.post('api/savesongs/' + vm.pass, vm.songs);
    }
    function youtube_parser(url) {
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