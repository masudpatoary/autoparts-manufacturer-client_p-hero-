import { useEffect, useState } from 'react';

const usePartsDetail = (id) => {
    const [detail, setDetail] = useState({});

    useEffect(() => {
        const url = `https://vast-sands-13931.herokuapp.com/autoparts/${id}`;
         fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data))

    }, [id, detail])


    return [detail, setDetail];
};

export default usePartsDetail;