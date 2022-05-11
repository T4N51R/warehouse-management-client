import React from 'react';
import { Button, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../../hooks/useReview';
import ShowReview from '../ShowReview/ShowReview';

const Review = () => {
    const [reviews, setReviews] = useReviews();
    const selelctedReview = reviews.slice(0, 3);
    const navigate = useNavigate();
    return (
        <div>
            <h1 className='text-center text-primary mb-5 mt-5'>Our Users Experience with us</h1>
            <Row sm={1} lg={3} className='mx-auto gy-5'>
                {
                    selelctedReview.map(review => <ShowReview
                        key={review._id}
                        review={review}
                    >
                    </ShowReview>)
                }

            </Row>
            <Button className='w-50 mx-auto d-block mt-5' onClick={() => navigate('/review')}>Add your Experience</Button>
        </div>
    );
};

export default Review;