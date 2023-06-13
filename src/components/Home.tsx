import { useContext } from "react";
import ApiDataContext from "../ApiDataContext";
import { Product } from "../types/Product";

export const Home = () => {

  const data = useContext<Product[]>(ApiDataContext);

return (
  <div className="home">
    Home
    {data.map((el:Product)=><p key={el.id}>{el.name}</p>)}
  </div>
)};
