import React, { useEffect, useState } from 'react';

const useParts = () => {
    const [autoparts, setAutoparts] =useState([]);

    useEffect(() => {
        const url ="http://localhost:5000/autoparts"
        fetch(url)
        .then(res=>res.json())
        .then(data=>setAutoparts(data))
      
    }, [autoparts])
    

    return [autoparts, setAutoparts];

};

export default useParts;