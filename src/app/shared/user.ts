export class User {
    $key: string;
    fName: string;
    lName: string;
    birthday: string;
    email: string;
    password: string;

    constructor(fName: string, lName: string, birthday: string, email: string, password: string){
        this.fName = fName;
        this.lName = lName;
        this.birthday = birthday;
        this.email = email;
        this.password = password;
    }
}
