import { useEffect, useState } from 'react';
import './index.css';

const List = ({searchValue}) => {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((productsJson) => {
            setProducts(productsJson)
        })
        .catch(() => {
            console.log("Can't load the products")
        })
    }, [])

    useEffect(() => {
        setFilteredProducts(products?.filter((el) => el.title.toLowerCase().includes(searchValue.toLowerCase())))
    }, [searchValue, products])
    
    return (
        <div className="container"> 
        {
            filteredProducts?.map((product) =>
                <div className="product-box" key={product.id}>
                    <img src={product.image} alt="" />
                    <p>{product.title}</p>
                    <span>{product.price}</span>
                    <p>{product.description}</p>
                </div>
            )
        }
        </div>
    )
}
export default List;