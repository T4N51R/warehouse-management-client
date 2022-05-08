import React from 'react';
import { Row } from 'react-bootstrap';
import LoadProducts from '../../hooks/UseLoadProducts';
import Inventory from '../Inventory/Inventory';

const ManageInventory = () => {
    const [products] = LoadProducts();
    return (
        <div>
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