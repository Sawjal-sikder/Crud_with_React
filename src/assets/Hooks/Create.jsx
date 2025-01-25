import axios from "axios";
import { useState } from "react";

function Create(url, initialData) {
  const [data, setData] = useState(initialData);

  const CreateData = async () => {
    try {
      const res = await axios.post(url, data);
      setData(res.data);
      setData(initialData);
    } catch (err) {
      console.log(err.message); 
    }
  };

  return { data, setData, CreateData };
}

export default Create;

