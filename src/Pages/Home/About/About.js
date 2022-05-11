import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import badge from '../../../image/icon/badge.png'
import lock from '../../../image/icon/lock.png'
import review from '../../../image/icon/review.png'
const About = () => {
    return (
        <div >
            <h1 className='text-primary text-center fs-1 font-weight-bold mt-5'>The X Factor</h1>
            <h3 className='text-primary text-center fs-3 font-weight-bold mb-5'>Why Choose Us</h3>
            <Row sm={1} lg={3}>
                <Card>
                    <div className='d-flex card-style align-items-center ms-3' style={{ height: '300px' }}>
                        <div>
                            <img src={badge} alt="" />
                        </div>
                        <div>
                            <h3>Trusted since 2022</h3>
                            <p>100% authentic fragrances. You won't find knockoffs or imitations here.</p>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className='d-flex card-style align-items-center ms-3' style={{ height: '300px' }}>
                        <div>
                            <img src={lock} alt="" />
                        </div>
                        <div>
                            <h3>Safe and Secure Checkout</h3>
                            <p>You data are safe with us. We have many layer of sequrity. So no chance of unwanted acess</p>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className='d-flex card-style align-items-center ms-3' style={{ height: '300px' }}>
                        <div>
                            <img src={review} alt="" />
                        </div>
                        <div>
                            <h3>Check Our AllReview</h3>
                            <p>We have hudred of thousend cousomer using our website. They also share their experience.</p>
                        </div>
                    </div>
                </Card>
            </Row>
        </div >
    );
};

export default About;