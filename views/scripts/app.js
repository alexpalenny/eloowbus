var app = angular.module("eloowApp", []);
app.controller("eloowCtrl", ["$scope", "$http", function (scope, http) {
    var vm = this;
    vm.pages = {
        index: '/partials/pages/main.html',
        table: '/partials/pages/table.html',
        blank: '/partials/pages/blank.html',
    }
    vm.passwordConfirmed = false;
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
            if (song.details && song.details.youTube && containsYouTube(song.details.youTube))
                song.details.youTube = youtube_parser(song.details.youTube);
            if (song.details && song.details.youTubeCover && containsYouTube(song.details.youTubeCover))
                song.details.youTubeCover = youtube_parser(song.details.youTubeCover);
            vm.editSong = false;
            saveSongs();
        }
        else vm.accessDeny();
    };
    vm.accessDeny = function () {
        vm.passwordConfirmed = false
        vm.exit();
        alert("Пожалуйста введите корректный логин и пароль!");
    }
    vm.getVideo = function (source) {
        return 'https://www.youtube.com/embed/' + source;
    }
    vm.authorize = function () {
        vm.pass = localStorage.getItem('yellow-pass') || "";
        vm.login = localStorage.getItem('yellow-login') || "";
        if (vm.login && vm.pass) vm.loginUser();
    }
    vm.exit = function () {
        vm.passwordConfirmed = false;
        vm.login = "";
        vm.pass = "";
        localStorage.removeItem('yellow-pass');
        localStorage.removeItem('yellow-login');
    }
    vm.loginUser = function () {
        if (vm.login) {
            http.get('api/confirm-pass/' + vm.pass).then(function (res) {
                if (res.data) {
                    vm.passwordConfirmed = true;
                    localStorage.setItem('yellow-pass', vm.pass);
                    localStorage.setItem('yellow-login', vm.login);
                } else vm.accessDeny();
            });
        } else vm.accessDeny();
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
        else vm.accessDeny();
    }
    vm.removeSong = function (song) {
        if (vm.pass) {
            vm.songs = vm.songs.filter(function (val) { return val.name != song.name || val.type != song.type });
            saveSongs();
        }
        else vm.accessDeny();
    }
    vm.authorize();
    function saveSongs() {
        http.post('api/savesongs/' + vm.pass, vm.songs);
    }
    function youtube_parser(url) {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        var match = url.match(regExp);
        return (match && match[7].length == 11) ? match[7] : false;
    }
    function containsYouTube(link) {
        return link.indexOf("youtube") !== -1 || link.indexOf("youtu.be") !== -1;
    }
}]);
app.config(function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'https://www.youtube.com/**'
    ]);
});