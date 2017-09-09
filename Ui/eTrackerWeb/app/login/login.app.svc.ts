 module etracker.services {
    export interface ISignInDataService {
        signIn(): ng.resource.IResourceClass<IUserResource>;
    }
    // tslint:disable-next-line:no-empty-interface
    interface IUserResource extends ng.resource.IResource<etracker.interfaces.ITestuser> {}
    export class SignInDataService implements ISignInDataService {
        // Dependy injection
        static $inject = ["$resource"];
        // constructor

        /**
         *
         */
        constructor(private $resource: ng.resource.IResourceService) {

        }

        signIn(): ng.resource.IResourceClass<IUserResource> {
            return this.$resource("http://localhost:9694/api/ExpenseTracker/SignIn?user=:obj HTTP/1.1", {}, {
                query: {method: "GET", headers: {"Content-Type": "application/json"}}});
        }

    }
    angular.module("etracker.login").service("signInDataService", SignInDataService);
}
