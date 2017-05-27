var app = angular.module("eloowApp", []);
app.controller("eloowCtrl", ["$scope", "$http", function (scope, http) {
    var vm = this;
    vm.pages = {
        index: '/partials/pages/main.html',
        table: '/partials/pages/table.html',
        blank: '/partials/pages/blank.html',
    }

    vm.authorSongs = [];
    vm.coverSongs = []
    vm.acousticSongs = []
    http.get('api/songs/author').then(function (res) { vm.authorSongs = res.data; });
    http.get('api/songs/cover').then(function (res) { vm.coverSongs = res.data; });
    http.get('api/songs/acoustic').then(function (res) { vm.acousticSongs = res.data; });

    vm.pageName = "table";
    vm.pageUrl = vm.pages[vm.pageName];
    vm.changePage = function (pageName) {
        vm.pageName = pageName;
        vm.pageUrl = vm.pages[vm.pageName];
    }
}]);