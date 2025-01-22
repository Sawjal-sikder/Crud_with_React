import React from 'react'
import Create from '../../Hooks/Create'

function ProductCreate() {
    const url = 'http://127.0.0.1:8000/product/'
    const initialData = {title:'', price:''};
    const {data, setData, CreateData} = Create(url, initialData);

    const handleSubmit = (event) =>{
        event.preventDefault();
        CreateData();

    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name='title' placeholder='Enter Product Titele Here...' onChange={handleChange}  value={data.title}/>
      <input type="text" name='price' placeholder='Enter Product Price Here...' onChange={handleChange}  value={data.price} />
      <button type="submit">Submite</button>
    </form>
  )
}

export default ProductCreate
