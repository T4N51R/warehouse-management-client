import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import ShowProduct from './ShowProduct';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState();
    const [user, loading] = useAuthState(auth);
    useEffect(() => {
        const url = `http://localhost:5000/products/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [productId]);
    if (loading) {
        return <Loading></Loading>
    }
    console.log(product);
    return (
        <div>
            <h1>This is Inventory for {productId}</h1>

        </div>
    );
};

export default ProductDetails;