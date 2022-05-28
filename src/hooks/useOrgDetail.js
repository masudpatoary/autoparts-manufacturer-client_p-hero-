import React, { useEffect, useState } from 'react';

const useOrgDetail = () => {
    const [orgDetail, setOrgDetail] =useState([]);

    useEffect(() => {
        const url ="https://vast-sands-13931.herokuapp.com/companyoverview"
        fetch(url)
        
        .then(res=>res.json())
        .then(data=>setOrgDetail(data))
      
    }, [orgDetail])
    

    return [orgDetail, setOrgDetail];

};

export default useOrgDetail;