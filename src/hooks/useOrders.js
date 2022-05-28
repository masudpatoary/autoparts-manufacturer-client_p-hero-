import React, { useEffect, useState } from 'react';

const useOrders = () => {
    const [orders, setOrders] =useState([]);

    useEffect(() => {
        const url ="http://localhost:5000/order"
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