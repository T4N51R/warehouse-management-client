import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    console.log(user)
    const onSubmit = data => {
        console.log(data);
        const url = `https://pure-lake-46186.herokuapp.com/products`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })

        navigate('/myitem')
    };
    return (
        <div className='w-50 mx-auto fs-3'>
            <h1 className='text-center'>{user?.displayName}Add New Product</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <h1>User Information</h1>
                <label for="email">Email:</label>
                <input className='mb-2' placeholder='Name' {...register("email", { value: user?.email })} required />
                <br />
                <h1>Product Information</h1>
                <br />
                <label for="name">Product name:</label>
                <input className='mb-2' placeholder='Product Name' {...register("name", { required: true, maxLength: 20 })} />

                <label for="about">Description</label>
                <textarea className='mb-2' placeholder='Description' {...register("about")} />

                <label for="about">Price</label>
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />

                <label for="about">Quantity</label>
                <input className='mb-2' placeholder='Quantity' type="number" {...register("qty")} />

                <label for="about">Image</label>
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />

                <label>Supplier Name</label>
                <input className='mb-2' placeholder='Supplier name' type="text" {...register("supplier_name")} />
                <input className='btn btn-primary' type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddItem;