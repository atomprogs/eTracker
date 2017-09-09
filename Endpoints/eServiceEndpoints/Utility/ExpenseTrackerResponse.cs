using System;
using eServiceEndpoints.Utility.EtrackerEnums;


namespace eServiceEndpoints.Utility
{
    public class ExpenseTrackerResponse
    {
        public ExpenseTrackerResponse(ResponseCode statusCode)
        {
            this.StatusCode = statusCode;
            this.StatusMessage = ExpenseTrackerResponse.GetStatustextBasedOnStatusCode(statusCode);
        }

        public ExpenseTrackerResponse(ResponseCode statusCode, string statusMessage)
        {
            this.StatusCode = statusCode;
            this.StatusMessage = statusMessage;
        }

        public ExpenseTrackerResponse(object responseObject)
        {
            this.ResponseObject = responseObject;
        }
        public ExpenseTrackerResponse(object responseObject,ResponseCode statusCode)
        {
            this.ResponseObject = responseObject;
        }
        public ExpenseTrackerResponse()
        {
        }

        public bool IsRedirect { get; set; }
        public string RedirectUrl { get; set; }
        public object ResponseObject { get; set; }
        public ResponseCode StatusCode { get; set; }
        public string StatusDescription { get; set; }

        //  public string StatusMessage { get; set; }
        public string StatusMessage
        {
            get
            {
                return this._statusMessage;
            }
            set
            {
                this._statusMessage = ExpenseTrackerResponse.GetStatustextBasedOnStatusCode(this.StatusCode);
            }
        }

        public static string GetStatustextBasedOnStatusCode(ResponseCode statusCode)
        {
            string statusText;
            switch (statusCode)
            {
                case ResponseCode.UserNotFound: statusText = "UserId is not registered."; break;
                case ResponseCode.WrongUserIdOrPassword: statusText = "Wrong UserId or Password."; break;
                case ResponseCode.ContactAdmin: statusText = "Please contact admin."; break;
                case ResponseCode.LoggedIn: statusText = "Logged In."; break;
                default: statusText = ""; break;
            }
            return statusText;
        }

        private string _statusMessage;
    }
}