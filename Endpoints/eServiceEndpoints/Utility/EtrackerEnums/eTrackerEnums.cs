using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace eServiceEndpoints.Utility.EtrackerEnums
{
    public enum MailType
    {
        SignUpCode = 1,
        SignUp = 2,
        Notification = 3,
    }

    public enum ResponseCode
    {
        UserNotFound = 601,
        WrongUserIdOrPassword = 602,
        ContactAdmin = 603,
        LoggedIn = 604
    }
}