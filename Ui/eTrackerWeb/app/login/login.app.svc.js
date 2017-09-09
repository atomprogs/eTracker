"use strict";
var etracker;
(function (etracker) {
    var services;
    (function (services) {
        var SignInDataService = /** @class */ (function () {
            // constructor
            /**
             *
             */
            function SignInDataService($resource) {
                this.$resource = $resource;
            }
            SignInDataService.prototype.signIn = function () {
                return this.$resource("http://localhost:9694/api/ExpenseTracker/SignIn?user=:obj HTTP/1.1", {}, {
                    query: { method: "GET", headers: { "Content-Type": "application/json" } }
                });
            };
            // Dependy injection
            SignInDataService.$inject = ["$resource"];
            return SignInDataService;
        }());
        services.SignInDataService = SignInDataService;
        angular.module("etracker.login").service("signInDataService", SignInDataService);
    })(services = etracker.services || (etracker.services = {}));
})(etracker || (etracker = {}));
//# sourceMappingURL=login.app.svc.js.map