module etracker.interfaces {

    export interface IMonthlyLimit {
        Month: number;
        Lowest: number;
        Highest: number;
    }

    export interface IUserSetting {
        IsActive: boolean;
        IsAdmin: boolean;
        IsEnable: boolean;
        ModifiedDate: Date;
        CreatedDate: Date;
    }
    export interface IUser {
        Id: number;
        FirstName: string;
        LastName: string;
        Email: string;
        Password: string;
        PhoneNumber: number;
        MonthlyLimit: IMonthlyLimit;
        SignUpCode: string;
        Setting: IUserSetting;
    }

    export interface ITestuser {
        Email: string;
        Password: string;
    }

}

// module etracker.enums {
//     export enum Month {
//         NotSet = 0,
//         January = 1,
//         February = 2,
//         March = 3,
//         April = 4,
//         May = 5,
//         June = 6,
//         July = 7,
//         August = 8,
//         September = 9,
//         October = 10,
//         November = 11,
//         December = 12,
//     }

// }
