
export class User {
    username: string;
    password: string;
    likes: number[];
    constructor(apiResponse: any) {
        this.username = apiResponse.username;
        this.password = apiResponse.password;
        this.likes = apiResponse.likes;

    }
}