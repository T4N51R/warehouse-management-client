import React from 'react';
import { Container, Row } from 'react-bootstrap';
import LoadProducts from '../../../hooks/LoadProducts';
import Item from '../Item/Item';

const Items = ({ item }) => {
    const [products, setProducts] = LoadProducts();

    const selelctedProducts = products.slice(0, 6);
    return (
        <div>
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