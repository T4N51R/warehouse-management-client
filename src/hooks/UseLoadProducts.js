import { useEffect, useState } from "react";

const UseLoadProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://pure-lake-46186.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return [products, setProducts];
}

export default UseLoadProducts;