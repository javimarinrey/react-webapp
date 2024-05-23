export interface IUser {
    username: string;
    isAuth: boolean | null;
}

export interface UserContextType {
    user: IUser;
    saveUser: (user:IUser) => void
}