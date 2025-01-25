import React from "react";
import DataList from "../../Hooks/DataList";
import Delete from "../../Hooks/Delete";


function ProductList() {
  // Data Fetching Function
  const url = "https://api.nmmbd.com/product/";
  const { data, setData, loading, errors } = DataList(url);

  // Data Delete Function
  const deleterUrl = "https://api.nmmbd.com/product";
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
        <div className="py-5 px-5 bg-slate-200 flex justify-between items-center">
          <p className="text-3xl font-medium ">Product Lsit</p>
          <p className="font-medium ">Create Product</p>
        </div>
        {data && data.length > 0 ? (
<<<<<<< HEAD
          <div className="px-8 py-10 bg-slate-50">
            <table className="w-full table-auto border-collapse border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">Image</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Title & Description</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Price</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-12 h-12 object-cover"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">{item.title} <p>{item.description}</p></td>
                    
                    <td className="border border-gray-300 px-4 py-2 text-blue-600">
                      {item.category}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 font-bold">
                      ${item.price}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <div className="flex gap-x-4">
                        <button className="text-blue-500">Edit</button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="text-red-500"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
=======
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
>>>>>>> 32a2ee2adc03732076d6b789c319c71f725a36f6
        ) : (
          <p className="px-8 pt-10 bg-slate-50 text-center">No items found</p>
        )}

      </div>
    </>
  );
}

export default ProductList;
