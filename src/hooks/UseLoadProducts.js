import { useEffect, useState } from "react";

const UseLoadProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return [products, setProducts];
}

export default UseLoadProducts;