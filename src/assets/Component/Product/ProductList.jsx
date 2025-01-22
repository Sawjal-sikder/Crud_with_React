import React from "react";
import DataList from "../../Hooks/DataList";

function ProductList() {
  const url = "https://fakestoreapi.com/products";
  const { data, loading, errors } = DataList(url);

  return (
    <div className="mt-10 w-10/12 mx-auto ">
      <div>{loading && <div>loading...</div>}</div>
      <div>{errors && <div> {errors} </div>}</div>
      <div className="">
        <div className="py-5 px-5 bg-slate-200 flex justify-between items-center">
          <p className="text-3xl font-medium ">Product Lsit</p>
          <p className="font-medium ">Create Product</p>
        </div>
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
    </div>
  );
}

export default ProductList;
