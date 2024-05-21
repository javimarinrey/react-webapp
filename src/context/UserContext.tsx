import * as React from "react";

import {useEffect} from "react";
import {IUser, UserContextType} from "../interfaces/IUser";

export const UserContext = React.createContext<UserContextType | null>(null);

const UserProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const initialUser: IUser = {username: '', isAuth: false};
    const [user, setUser] = React.useState<IUser>(initialUser);

    useEffect(()=> {
        console.log('useEffect UserProvider');
        if (localStorage.getItem('token')) {
            // TODO: Validar token
            setUser({...user, isAuth: true});
        } else {
            setUser(initialUser);
        }
    },[]);

    const saveUser = (_user:IUser) => {
        setUser({..._user });
    }

    return <UserContext.Provider value={{ user, saveUser }}>{children}</UserContext.Provider>;
};

//TODO: https://blog.logrocket.com/how-to-use-react-context-typescript/

export default UserProvider;