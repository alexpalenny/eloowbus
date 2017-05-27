var app = angular.module("eloowApp", []);
app.controller("eloowCtrl", ["$scope", function (scope) {
    var vm = this;
    vm.pages = {
        index: '/partials/pages/main.html',
        table: '/partials/pages/table.html',
        blank: '/partials/pages/blank.html',
    }

    vm.authorSongs = [
        {
            name: "Confest",
            alex: "",
            dima: "",
            grisha: "",
            valya: "",
        },
        {
            name: "Evil",
            alex: "",
            dima: "",
            grisha: "",
            valya: "",
        },
        {
            name: "Groove",
            alex: "",
            dima: "",
            grisha: "",
            valya: "",
        },
        {
            name: "Ready to be free",
            alex: "",
            dima: "",
            grisha: "",
            valya: "",
        },
        {
            name: "Coffee",
            alex: "",
            dima: "",
            grisha: "",
            valya: "",
        },
        {
            name: "Elephant",
            alex: "",
            dima: "",
            grisha: "",
            valya: "",
        },
        {
            name: "Crazy",
            alex: "",
            dima: "",
            grisha: "",
            valya: "",
        },
        {
            name: "Be alive",
            alex: "",
            dima: "",
            grisha: "",
            valya: "",
        },
    ]

    vm.coverSongs = [
        {
            name: "7 nation army",
            alex: "",
            dima: "",
            grisha: "",
            valya: "",
        },
        {
            name: "High way to hell",
            alex: "",
            dima: "",
            grisha: "",
            valya: "",
        },
        {
            name: "Rock&Roll queen",
            alex: "",
            dima: "",
            grisha: "",
            valya: "",
        },
        {
            name: "Real Sugar",
            alex: "",
            dima: "",
            grisha: "",
            valya: "",
        }
    ]

    vm.acousticSongs = [
        {
            name: "Jungle",
            alex: "",
            dima: "",
            grisha: "",
            valya: "",
        },
        {
            name: "Lonely Day",
            alex: "",
            dima: "",
            grisha: "",
            valya: "",
        },
        {
            name: "Personal Jesus",
            alex: "",
            dima: "",
            grisha: "",
            valya: "",
        },
        {
            name: "Zombie",
            alex: "",
            dima: "",
            grisha: "",
            valya: "",
        },
        {
            name: "Pumped uo kicks",
            alex: "",
            dima: "",
            grisha: "",
            valya: "",
        },
        {
            name: "Enjoy the silence",
            alex: "",
            dima: "",
            grisha: "",
            valya: "",
        },
        {
            name: "Rolling in the Dip",
            alex: "",
            dima: "",
            grisha: "",
            valya: "",
        },
        {
            name: "Down on my knees",
            alex: "",
            dima: "",
            grisha: "",
            valya: "",
        },
        {
            name: "Sex is on Fire",
            alex: "",
            dima: "",
            grisha: "",
            valya: "",
        },
        {
            name: "Zaz",
            alex: "",
            dima: "",
            grisha: "",
            valya: "",
        },
        {
            name: "Toxic",
            alex: "",
            dima: "",
            grisha: "",
            valya: "",
        },
        {
            name: "Brighter that the sun",
            alex: "",
            dima: "",
            grisha: "",
            valya: "",
        }
    ]

    vm.pageName = "table";
    vm.pageUrl = vm.pages[vm.pageName];
    vm.changePage = function (pageName) {
        vm.pageName = pageName;
        vm.pageUrl = vm.pages[vm.pageName];
    }
}]);