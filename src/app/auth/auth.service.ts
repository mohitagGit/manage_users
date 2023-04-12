
const localUser:any = localStorage.getItem('current_user');
let userData = JSON.parse(localUser);

export const AuthGuard = () => {
    console.log('authGuard#canActivate called');
    if(userData && userData.id){
        return true;
    }else{
        alert("Please login to navigate there!");
        return false;
    }
};

// export const NotAuthGuard = () => {
//     console.log('authGuard#canNotActivate called');
//     if(userData && userData.id){
//         return false;
//     }else{
//         alert("Please logout to navigate there!");
//         return true;
//     }
// }