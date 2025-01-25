import React from 'react';
import Create from '../../Hooks/Create';

function ProductCreate() {
  const url = 'https://api.nmmbd.com/product/';
  const initialData = { title: '',description:'', price: ''};
  const { data, setData, CreateData } = Create(url, initialData);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await CreateData();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div>
        <label htmlFor="title">Product Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter Product Title Here..."
          onChange={handleChange}
          value={data.title}
        />
      </div>
      <div>
        <label htmlFor="description">Product description</label>
        <textarea
          id="description"
          name="description"
          placeholder="Enter Product Price Here..."
          onChange={handleChange}
          value={data.description}
        >
        </textarea>      
      </div>
      <div>
        <label htmlFor="price">Product Price</label>
        <input
          type="text"
          id="price"
          name="price"
          placeholder="Enter Product Price Here..."
          onChange={handleChange}
          value={data.price}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ProductCreate;
