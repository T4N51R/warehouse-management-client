import { useEffect, useState } from "react";

const LoadProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('reviewData.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return [products, setProducts];
}

export default LoadProducts;