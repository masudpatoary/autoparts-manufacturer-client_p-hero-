import React, { useEffect, useState } from 'react';

const useOrders = () => {
    const [orders, setOrders] =useState([]);

    useEffect(() => {
        const url ="http://localhost:5000/order"
        fetch(url)
        .then(res=>res.json())
        .then(data=>setOrders(data))
      
    }, [])
    

    return [orders, setOrders];

};

export default useOrders;