import React, { useEffect, useState } from 'react';

const useOrders = () => {
    const [orders, setOrders] =useState([]);

    useEffect(() => {
        const url ="https://vast-sands-13931.herokuapp.com/order"
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