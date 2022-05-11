import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState();
    const { register, handleSubmit } = useForm();
    const [newquantity, setNewQuantity] = useState({})
    const [user, loading] = useAuthState(auth);
    useEffect(() => {
        const url = `https://pure-lake-46186.herokuapp.com/products/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [productId]);
    if (loading) {
        return <Loading></Loading>
    }
    let prevQty = product?.qty;
    const handleDeliverButton = (id) => {
        prevQty = prevQty - 1;
        const updatedQty = { qty: prevQty }
        console.log(updatedQty);
        const url = `https://pure-lake-46186.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQty)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.matchedCount === 1) {
                    window.location.reload();
                }
            })
    }
    const onSubmit = (data) => {
        const qtyInput = parseInt(data.qty);
        const newQty = prevQty + qtyInput;
        const dtaa = { qty: newQty };

        console.log(dtaa);
        const url = `https://pure-lake-46186.herokuapp.com/products/${productId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(dtaa)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.matchedCount === 1) {
                    window.location.reload();
                }
            })
    }
    return (
        <div>
            <h1>This is Inventory for {product?.name}</h1>
            <Card className='card-style mx-auto'
                style={{ width: '40rem' }}>
                <Card.Img style={{ height: '12rem' }} variant="top" src={product?.img} />
                <Card.Body>
                    <Card.Title>{product?.name}</Card.Title>
                    <Card.Title>Fee : $ {product?.price}</Card.Title>
                    <Card.Title>Quantty : {product?.qty}</Card.Title>
                    <Card.Text>
                        {product?.about.slice(0, 50)}
                    </Card.Text>
                    <Card.Title>Supplier : {product?.supplier_name}</Card.Title>
                </Card.Body>
                {/* button will take on to the inventory page */}
                <Card.Body>
                    <Button className='w-50 mx-auto d-block' onClick={() => handleDeliverButton(product?._id)}>Deliver</Button>
                </Card.Body>
            </Card>
            <div>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <label for="about">Quantity</label>
                    <input className='mb-2' placeholder='Quantity' type="number" {...register("qty")} />
                    <input className='btn btn-primary' type="submit" value="Add Quantity" />
                </form>
            </div>
        </div >
    );
};

export default ProductDetails;