import React, { useEffect, useState } from 'react';

const useReviews = () => {
    const [reviews, setReviews] =useState([]);

    useEffect(() => {
        const url ="https://vast-sands-13931.herokuapp.com/reviewlimit"
        fetch(url)
        .then(res=>res.json())
        .then(async data=>setReviews(await data))
      
    }, [reviews])
    

    return [reviews, setReviews];

};

export default useReviews;