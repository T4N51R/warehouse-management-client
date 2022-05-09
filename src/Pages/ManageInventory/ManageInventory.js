import React from 'react';
import { Button, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import LoadProducts from '../../hooks/UseLoadProducts';
import Inventory from '../Inventory/Inventory';

const ManageInventory = () => {
    const [products] = LoadProducts();
    const navigate = useNavigate();
    const handleAddNewItem = () => {
        navigate('/additem')
    }
    console.log(products)
    return (
        <div className='mt-5'>
            <div>
                <Button
                    className='w-75 mb-5 mx-auto d-block'
                    onClick={handleAddNewItem}
                >Add New Item</Button>
            </div>
            <Row sm={1} lg={2} className='mx-auto gy-5'>
                {
                    products.map(product => <Inventory
                        key={product._id}
                        product={product}
                    ></Inventory>)
                }
            </Row>
        </div>
    );
};

export default ManageInventory;