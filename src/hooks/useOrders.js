import React, { useEffect, useState } from 'react';

const useOrders = () => {
    const [orders, setOrders] =useState([]);

    useEffect(() => {
        const url ="https://auto-server-o5cy.onrender.com/order"
        fetch(url,{
            headers: {
                authorization: `Bearer`
            }
        })
        .then(res=>res.json())
        .then(async data=>setOrders( await data))
      
    }, [orders])
    

    return [orders, setOrders];

};

export default useOrders;