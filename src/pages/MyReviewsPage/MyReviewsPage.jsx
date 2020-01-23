import React from 'react';
import ReviewsForm from '../../components/ReviewsForm/ReviewsForm';

const MyReviewsPage = (props) => {
    return (
        <div>
            <ReviewsForm {...props}/>         
        </div>
    );
}
export default MyReviewsPage;