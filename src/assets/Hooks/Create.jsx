import axios from 'axios';
import React, { useState } from 'react'

function Create(url, initialData) {
    const [data, setData] =useState(initialData);

    const CreateData = async () =>{
        try {
            const res = await axios.post(url, data);
            setData(res.data);
            setData(initialData);
        } catch (error) {
            console.log(error);
        }
    }
  return {data, setData, CreateData}
}
export default Create
