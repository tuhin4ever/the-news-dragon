import React from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {
    const {id} = useParams();
    return (
        <div>
            <h4>This is category: {id}</h4>
        </div>
    );
};

export default Category;