import React from "react";
import DataList from "../../Hooks/DataList";
<<<<<<< HEAD
import Delete from "../../Hooks/Delete";

function ProductList() {
  // Data Fetching Function
  const url = "http://127.0.0.1:8000/product/";
  const { data, setData, loading, errors } = DataList(url);

  // Data Delete Function
  const deleterUrl = "http://127.0.0.1:8000/product";
  const { dataDelete } = Delete(deleterUrl);
  const handleDelete = (id) => {
    dataDelete(id); 
    setData(data.filter((item) => item.id !== id));  
  };


  return (
    <>
      <div>{loading && <div>loading...</div>}</div>
      <div>{errors && <div> {errors} </div>}</div>
      <div className="mt-10 w-10/12 mx-auto ">
=======

function ProductList() {
  const url = "https://fakestoreapi.com/products";
  const { data, loading, errors } = DataList(url);

  return (
    <div className="mt-10 w-10/12 mx-auto ">
      <div>{loading && <div>loading...</div>}</div>
      <div>{errors && <div> {errors} </div>}</div>
      <div className="">
>>>>>>> f190203232cc989e827f494c4198274ca8c02b6b
        <div className="py-5 px-5 bg-slate-200 flex justify-between items-center">
          <p className="text-3xl font-medium ">Product Lsit</p>
          <p className="font-medium ">Create Product</p>
        </div>
<<<<<<< HEAD
        {data && data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} className="px-8 pt-10 bg-slate-50">
              <div className="flex gap-x-5 items-center">
                {/* <img
                  src={item.image}
                  alt={item.title}
                  className="w-12 h-20 object-cover"
                /> */}
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    {/* <p className="text-sm text-gray-600">{item.description}</p> */}
                  </div>
                  <div className="flex justify-between items-center">
                    {/* <p className="text-blue-600">{item.category}</p> */}
                    <p className="font-bold">${item.price}</p>
                    <div className="flex gap-x-5">
                      <p>edit</p>
                      <p onClick={()=>{handleDelete(item.id)}} className="text-red-600 cursor-pointer">delete</p>
=======
        {data && data.length > 0 ? (    
          data.map((item) => (
            <div key={item.id} className="px-8 pt-10 bg-slate-50">
              <div className="flex gap-x-5 items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-12 h-20 object-cover"
                />
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-blue-600">{item.category}</p>
                    <p className="font-bold">${item.price}</p>
                    <div className="flex gap-x-5">
                      <p>edit</p>
                      <p>delete</p>
>>>>>>> f190203232cc989e827f494c4198274ca8c02b6b
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No items found</p>
        )}
      </div>
<<<<<<< HEAD
    </>
=======
    </div>
>>>>>>> f190203232cc989e827f494c4198274ca8c02b6b
  );
}

export default ProductList;
