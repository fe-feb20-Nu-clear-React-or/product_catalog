import React from "react";
import { ReactNode, createContext, useState } from "react";
import staticData from './api/phones.json'
import { Product } from "./types/Product";

const ApiDataContext = createContext<Product[]>([]);

interface Props {
  children:ReactNode,
}

export const ApiDataProvider: React.FC<Props> = ({children}) =>{

  /* in case of fetching from server
  here we can add just state and init it with empty array: */
  const [data, setData] = useState<Product[]>(staticData);
  /*and remove import from json
  //here sould be placed some fetch stuff and setState with result of fulfilled Promise
  */
 //setData(staticData);

  return (
    <ApiDataContext.Provider value={data}>{children}</ApiDataContext.Provider>
  );
};

export default ApiDataContext;