using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using eServiceEndpoints.Models;
using Newtonsoft.Json;
using eServiceEndpoints.Utility;
using eServiceEndpoints.Utility.EtrackerEnums;
using System.Web.Http.Cors;

namespace eServiceEndpoints.Controllers
{
    // [Route("api/eTracker")]
    //[EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
    public class ExpenseTrackerController : ApiController
    {

        [HttpGet]
        public IEnumerable<Users> GetAllUser()
        {
            DataSerializer.JsonPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "App_Data//Users.Json");
            return DataSerializer.JsonDserializerFromFile<List<Users>>();
        }

        // GET api/<controller>/GetDashboardData
        /// <summary>
        /// Gets the dashboard data.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public DashboardData GetDashboardData()
        {
            var dd = new DashboardData() { NoOfItems = 10, NoOfItemsText = "Items bought", TotalSpending = 1360, TotalSpendingText = "Total Spending", User = "Rajeev", UserText = "Welcome!", WishList = 2, WishListText = "may be this month" };
            return dd;
        }

        /// <summary>
        /// Gets the sign up code.
        /// </summary>
        /// <param name="user">The user.</param>
        /// <returns></returns>
        [AcceptVerbs("POST","GET")]
        public string GetSignUpCode(Users user)
        {
            try
            {
                var signUpCode = GetRandomString(6).ToUpper();
                user.SignUpCode = signUpCode;
                EmailManager.SendMail(user, MailType.SignUpCode);
                return "Email sent, Please check your email.";
            }
            catch (Exception)
            {
                return "Email sending failed, Please try again.";
            }
        }

        /// <summary>
        /// Saves as json string.
        /// </summary>
        [AcceptVerbs("GET","POST")]
        public void SaveAsJsonString()
        {
            var user = new Users() { Id = 1, FirstName = "Rajeev", LastName = "Ranjan", Email = "rajeevr@gmail.com", MonthlyLimit = new MonthlyExpenseLimit() { Highest = 300, Lowest = 100, Month = Month.April }, Password = "123", Setting = new UserSetting() { IsActive = true, IsAdmin = true, IsEnable = true } };
            var userList = new List<Users> {user};
            DataSerializer.JsonSerializerSaveAsFile<List<Users>>(userList);
        }

        /// <summary>
        /// Signs the in.
        /// </summary>
        /// <param name="user">The user.</param>
        /// <returns></returns>
        /// <exception cref="System.ArgumentException">
        /// User not found;UserDefined
        /// or
        /// User not found;UserDefined
        /// </exception>
        [HttpGet]
        public ExpenseTrackerResponse SignIn([FromUri] testuser user)
        {
            //var userPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "App_Data//Users.Json");
            //DataSerializer.JsonPath = userPath;
            //try
            //{
            //    var userList = DataSerializer.JsonDserializerFromFile<List<Users>>();
            //    if (userList.Count(x => x.Email.ToLower() == user.Email.ToLower()) > 0)
            //    {
            //        return userList.Count(x => string.Equals(x.Email, user.Email, StringComparison.CurrentCultureIgnoreCase) && x.Password == user.Password) > 0 ?
            //            new ExpenseTrackerResponse(userList.FirstOrDefault(x => string.Equals(x.Email, user.Email, StringComparison.CurrentCultureIgnoreCase) && x.Password == user.Password))
            //            : new ExpenseTrackerResponse(ResponseCode.WrongUserIdOrPassword);
            //    }
            //    return new ExpenseTrackerResponse(ResponseCode.UserNotFound);
            //}
            //catch (Exception ex)
            //{
            //    return new ExpenseTrackerResponse { StatusCode = ResponseCode.ContactAdmin, StatusMessage = ExpenseTrackerResponse.GetStatustextBasedOnStatusCode(ResponseCode.ContactAdmin), StatusDescription = ex.Message.ToString() };
            //}
          return  new ExpenseTrackerResponse { StatusCode = ResponseCode.ContactAdmin, StatusMessage = ExpenseTrackerResponse.GetStatustextBasedOnStatusCode(ResponseCode.ContactAdmin), StatusDescription = "GHANTA" };
        }

        /// <summary>
        /// Gets the random string.
        /// </summary>
        /// <param name="length">The length.</param>
        /// <returns></returns>
        private static string GetRandomString(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            var random = new Random();
            return new string(Enumerable.Repeat(chars, length)
                .Select(s => s[random.Next(s.Length)]).ToArray());
        }
    }

    public class testuser
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}