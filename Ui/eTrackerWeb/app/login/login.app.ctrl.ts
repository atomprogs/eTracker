module etracker.login {
    export class LoginController {
        static $inject = ["signInDataService"];
        user: etracker.interfaces.ITestuser;
        /**
         *
         */
        constructor(private signInDataService: etracker.services.SignInDataService) {
            const userResource = signInDataService.signIn();
            // this.user.FirstName = "";
            // this.user.LastName = "";
            // userResource.query((data: etracker.interfaces.IUser[]) => {
            //     this.allUser = data;
            // });
            // userResource.get()
        }
        valdidateUser(): void {
            // tslint:disable-next-line:object-literal-key-quotes
            this.signInDataService.signIn().get({obj: JSON.stringify(this.user)}, function(signIn: any) {
                console.log(signIn);
            });
        }
    }
    angular.module("etracker.login").controller("LoginController", LoginController);
}
