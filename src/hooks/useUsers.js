import React, { useEffect, useState } from 'react';

const useUsers = () => {
    const [users, setUsers] =useState([]);

    useEffect(() => {
        const url ="https://auto-server-o5cy.onrender.com/user"
        fetch(url)
        .then(res=>res.json())
        .then(async data=>setUsers(await data))
      
    }, [users])
    

    return [users, setUsers];

};

export default useUsers;