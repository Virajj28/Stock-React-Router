import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const DataContext = React.createContext(null);

export function DataContextProvider({ children }) {
    const [data, setData] = useState([]);

    const getData = async () => {
        const response = await axios.get(
        "http://www.coding-assignment.bombayrunning.com/data.json"
        );
        setData(response.data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <DataContext.Provider value={{ data }}>
            {children}
        </DataContext.Provider>
    );
}

export default DataContextProvider;
