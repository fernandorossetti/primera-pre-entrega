import { useEffect, useState } from "react";
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../asynMock';


const ItemListContainer = ({ gretting }) => {
    const [products, setProducts] = useState([])

    useEffect (() => {
        getProducts()
            .then(response =>{
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            }) 
    }, [])

    return (
        <div>
        <h1> {gretting} </h1>
        <ItemList products={products}></ItemList>
        </div>
    )
}

export default ItemListContainer;