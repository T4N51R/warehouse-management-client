import React from 'react';
import { Container, Row } from 'react-bootstrap';
import UseLoadProducts from '../../../hooks/UseLoadProducts';
import Item from '../Item/Item';

const Items = ({ item }) => {
    const [products, setProducts] = UseLoadProducts();

    const selelctedProducts = products.slice(0, 6);
    return (
        <div className='mt-5' id='product'>
            <h1 className='text-center text-primary mb-5'>Our Products</h1>
            <Container>
                {/* Sending data into item component  */}
                <Row sm={1} lg={3} className='mx-auto gy-5'>
                    {
                        selelctedProducts.map(item => <Item
                            key={item._id}
                            item={item}
                        ></Item>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Items;