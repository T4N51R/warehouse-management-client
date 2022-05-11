import React from 'react';
import ShowMyItem from '../ShowMyItem/ShowMyItem';
import { Row } from 'react-bootstrap';
import useCart from '../../hooks/useCart';

const MyItem = () => {
    const [cart, setCart] = useCart();
    return (
        <div>
            <h1 className='text-center'>You Added</h1>
            <Row sm={1} lg={2} className='mx-auto gy-5'>
                {
                    cart.map(product => <ShowMyItem
                        key={product._id}
                        product={product}
                    >
                    </ShowMyItem>)
                }
            </Row>
        </div>
    );
};

export default MyItem;