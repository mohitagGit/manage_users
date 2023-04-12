export interface UserSession {
    username: string;
    password: string;
    user_account_type: number;
}

export interface ApiObject {
    session: UserSession,
    user_login_activity: {
        latitude: string;
        longitude:string;
        device_id:string;
        device_type: number;
        device_token:string;
        application_id: number;
        app_version: string;
        timezone: string;
    }
}

export interface loginResponse {
    id: number;
    username: string;
    user_account_type: number;
    status_flag: string;
    otpvalidation_flag: boolean;
    // "username_type": "E",
    // // "unread_notification_count": 2712,
    // // "user_id": 10000946,
    // // "userprofile_id": 1850,
    // // "profilename": "Harsh Bhateley t2",
    // // "firstname": "Harsh",
    // // "lastname": "Bhateley",
    // // "dob": null,
    // // "gender": "Male",
    // // "countrycode": 91,
    // // "phoneno": "999",
    // // "emailaddress": "t2@ebs.com",
    profilepic: string
}