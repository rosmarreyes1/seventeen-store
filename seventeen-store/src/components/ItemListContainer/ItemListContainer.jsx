import MyPromise from "../../utils/MyPromise";
import { useEffect, useState,  } from "react";
import data from "../../data/Data";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [product, setProduct] = useState ([])
  useEffect(() => {
      MyPromise(2000, data)
      .then(res => setProduct(res))
  }, [product])

  return (
    <div>
    {
      product.length <= 0 ? <div><h2>Cargando...</h2></div> : <ItemList Data={product}/>
    }
    </div>
  )
}

export default ItemListContainer