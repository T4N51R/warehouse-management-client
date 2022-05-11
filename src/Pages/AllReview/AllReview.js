import axios from 'axios';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import useReviews from '../../hooks/useReview';
import ShowReview from '../Home/ShowReview/ShowReview';

const AllReview = () => {
    const { register, handleSubmit } = useForm();
    const [reviews, setReviews] = useReviews();
    const onSubmit = data => {
        const url = `https://pure-lake-46186.herokuapp.com/review`;
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
                if (result.acknowledged === true) {
                    toast('Product Deleted');
                    window.location.reload();
                }
            })
    }


    return (
        <div>
            <div className='w-50 mx-auto fs-3'>
                <h1 className='text-center text-primary mb-5 mt-5'>Tell Us Your Experience</h1>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

                    <label for="name">Your name:</label>
                    <input className='mb-2' placeholder='Your Name' {...register("name", { required: true, maxLength: 20 })} />

                    <label for="about">Your Review</label>
                    <textarea className='mb-2' placeholder='Review' {...register("about")} />

                    <label for="about">Ratings</label>
                    <input className='mb-2' placeholder='Ratings' type="number" {...register("ratings")} />

                    <label for="about">Image</label>
                    <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />

                    <input className='btn btn-primary' type="submit" value="Add Review" />
                </form>
            </div>

            <h1 className='text-center text-primary mb-5 mt-5'> Other Users Experiences with us</h1>
            <Container>
                <Row sm={1} lg={3} className='mx-auto gy-5'>
                    {
                        reviews.map(review => <ShowReview
                            key={review._id}
                            review={review}
                        >
                        </ShowReview>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default AllReview;