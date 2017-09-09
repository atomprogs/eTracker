module etracker.route {
    angular.module("etracker.route", ["ui.router"])
        .config(routeConfig);
    routeConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
    function routeConfig($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider): void {
        $urlRouterProvider.otherwise("login");
        // const loginState: ng.ui.IState = {
        //     name: "login",
        //     url: "/login",
        //     templateUrl: "/app/login/login.app.html",
        // };
        $stateProvider.state("login",
            {   url: "/login",
                templateUrl: "/app/login/login.app.html",
                controller: "LoginController",
                controllerAs: "vm",
            }).state("form", {
                url: "/form",
                template: "<h1>hellow</h1>",
            });

}

}
