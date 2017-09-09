"use strict";
var etracker;
(function (etracker) {
    var route;
    (function (route) {
        angular.module("etracker.route", ["ui.router"])
            .config(routeConfig);
        routeConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
        function routeConfig($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("login");
            // const loginState: ng.ui.IState = {
            //     name: "login",
            //     url: "/login",
            //     templateUrl: "/app/login/login.app.html",
            // };
            $stateProvider.state("login", { url: "/login",
                templateUrl: "/app/login/login.app.html",
                controller: "LoginController",
                controllerAs: "vm",
            }).state("form", {
                url: "/form",
                template: "<h1>hellow</h1>",
            });
        }
    })(route = etracker.route || (etracker.route = {}));
})(etracker || (etracker = {}));
//# sourceMappingURL=app.route.js.map