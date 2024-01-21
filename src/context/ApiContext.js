import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ApiContext = createContext();

export const useApi = () => useContext(ApiContext);

export const ApiProvider = ({ children }) => {
    
  const [Data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("https://erp.seopage1.net/api/leads");
      const data = response.data;
      setData(data.data);
    };
    getData();
  }, []);

  return (
    <ApiContext.Provider
      value={{
        Data
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};