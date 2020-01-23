import React from 'react'
import FindBooksForm from '../../components/FindBooksForm/FindBooksForm';


const FindBooksPage = (props) => {
    return (
        <div>
            <FindBooksForm {...props }/> <br/>
        </div>
    );
}


export default FindBooksPage;