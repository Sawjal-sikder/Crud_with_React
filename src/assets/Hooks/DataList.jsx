import axios from 'axios';
import React, { useEffect, useState } from 'react'

function DataList(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState(null);


    useEffect(()=>{
        const fetchData = async () =>{
            try {
                const res = await axios.get(url)
                setData(res.data);
            } catch (error) {
                setErrors(error);
            }finally{
                setLoading(false);
            }
        }
        fetchData()
    },[url])

  return { data, loading, errors }
}

export default DataList
