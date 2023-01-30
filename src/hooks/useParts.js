import React, { useEffect, useState } from 'react';

const useParts = () => {
    const [autoparts, setAutoparts] =useState([]);

    useEffect(() => {
        const url ="https://auto-server-o5cy.onrender.com/autoparts"
        fetch(url)
        .then(res=>res.json())
        .then(async data=>await setAutoparts(data))
      
    }, [autoparts])
    

    return [autoparts, setAutoparts];

};

export default useParts;