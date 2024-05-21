export interface IUser {
    username: string;
    isAuth: boolean;
}

export interface UserContextType {
    user: IUser;
    saveUser: (user:IUser) => void
}