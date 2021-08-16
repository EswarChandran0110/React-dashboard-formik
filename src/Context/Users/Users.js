import React , {useState, useEffect} from 'react';
import axios from 'axios';
//step-1 create context for Users

export const UsersContext = React.createContext();

//step-2 creating a provider function
//Every component wrapped inside userprovider will be able to access users data

export const UsersProvider = ({children}) => {
    const [UsersData, setUsersData] = useState([]);
    const BaseUrl = `https://609e2a6d33eed80017957e08.mockapi.io`;
    const fetchUserData = async () => {
        await axios.get(`${BaseUrl}/Users`).then(response => setUsersData(response.data))
    }

    useEffect(() => {
        fetchUserData();
        return () => {
            <> </>
        }
    },[])

    return (
        <UsersContext.Provider value={[UsersData, setUsersData,BaseUrl,fetchUserData]}>
            {children}
        </UsersContext.Provider>
    )
}
