import { useEffect, useState } from 'react';

const usePartsDetail = (id) => {
    const [detail, setDetail] = useState({});

    useEffect(() => {
        const url = `https://auto-server-o5cy.onrender.com/autoparts/${id}`;
         fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data))

    }, [id, detail])


    return [detail, setDetail];
};

export default usePartsDetail;