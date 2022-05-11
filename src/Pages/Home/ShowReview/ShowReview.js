import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import ReactStars from 'react-stars';

const ShowReview = ({ review }) => {
    const { _id, img, name, ratings, about } = review;
    return (
        <div>
            <Col >
                <Card className='card-style mx-auto'
                    style={{ width: '15rem', height: '400px' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Title>Ratings : {<ReactStars
                            value={ratings}
                            size={30}
                            half={true}
                        ></ReactStars>}</Card.Title>
                        <Card.Text>
                            {about.slice(0, 50)}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ShowReview;