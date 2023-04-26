import { useEffect, useState } from "react";
import { getProductsById } from "../../asynMock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        getProductsById('1')
        .then((response)=>{
            setProducts(response)
        })
        .catch((error)=>{
            console.error(error)
        })
    }, [])

    return(
        <div>
            <ItemDetail {...products} />
        </div>
    )
}

export default ItemDetailContainer;