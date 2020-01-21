import React from 'react';
import ReviewsForm from '../../components/ReviewsForm/ReviewsForm';

const MyReviewsPage = (props) => {
    return (
        <div>
            <ReviewsForm /> <br/>
            <a href="https://developer.nytimes.com"><img src="https://developer.nytimes.com/files/poweredby_nytimes_200a.png?v=1568441068443" alt="NYT logo"/></a>
            
        </div>
    );
}
export default MyReviewsPage;