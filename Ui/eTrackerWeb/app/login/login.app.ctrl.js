"use strict";
var etracker;
(function (etracker) {
    var login;
    (function (login) {
        var LoginController = /** @class */ (function () {
            /**
             *
             */
            function LoginController(signInDataService) {
                this.signInDataService = signInDataService;
                var userResource = signInDataService.signIn();
                // this.user.FirstName = "";
                // this.user.LastName = "";
                // userResource.query((data: etracker.interfaces.IUser[]) => {
                //     this.allUser = data;
                // });
                // userResource.get()
            }
            LoginController.prototype.valdidateUser = function () {
                // tslint:disable-next-line:object-literal-key-quotes
                this.signInDataService.signIn().get({ obj: JSON.stringify(this.user) }, function (signIn) {
                    console.log(signIn);
                });
            };
            LoginController.$inject = ["signInDataService"];
            return LoginController;
        }());
        login.LoginController = LoginController;
        angular.module("etracker.login").controller("LoginController", LoginController);
    })(login = etracker.login || (etracker.login = {}));
})(etracker || (etracker = {}));
//# sourceMappingURL=login.app.ctrl.js.map