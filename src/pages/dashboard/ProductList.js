import React from "react";
import { FiEdit } from "react-icons/fi";

const ProductList = () => {
  const products = [
    {
      _id: "1",
      model: "i3 10100",
      brand: "INTEL",
      price: 30000,
      status: true,
    },
    {
      _id: "2",
      model: "i5 10400",
      brand: "INTEL",
      price: 40000,
      status: true,
    },
    {
      _id: "3",
      model: "i3 11200k",
      brand: "INTEL",
      price: 50000,
      status: false,
    },
    {
      _id: "4",
      model: "Ryzen 5600g",
      brand: "AMD",
      price: 30000,
      status: true,
    },
    {
      _id: "5",
      model: "Ryzen 3200g",
      brand: "AMD",
      price: 25000,
      status: true,
    },
    {
      _id: "6",
      model: "Ryzen 4500g",
      brand: "AMD",
      price: 50000,
      status: false,
    },
  ];

  return (
    <div class="flex flex-col justify-center items-center h-full w-full select-none">
      <div class="w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200">
        <header class="px-5 py-4 border-b border-gray-100">
          <div class="font-semibold text-gray-800">Products</div>
        </header>

        <div class="overflow-x-auto p-3">
          <table class="table-auto w-full">
            <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
              <tr>
                <th></th>
                <th class="p-2">
                  <div class="font-semibold text-left">Product Name</div>
                </th>
                <th class="p-2">
                  <div class="font-semibold text-left">Brand</div>
                </th>
                <th class="p-2">
                  <div class="font-semibold text-left">In Stock</div>
                </th>
                <th class="p-2">
                  <div class="font-semibold text-left">Price</div>
                </th>
                <th class="p-2">
                  <div class="font-semibold text-center">Action</div>
                </th>
              </tr>
            </thead>

            <tbody class="text-sm divide-y divide-gray-100">
              {products.map(({ model, brand, price, status, _id }) => (
                <tr>
                  <td
                    class="p-2 flex justify-start"
                    title="Edit"
                    onClick={(_) => alert("Edit! button Clicked!")}
                  >
                    <div className="flex justify-center">
                      <FiEdit className="w-9 h-9 cursor-pointer hover:text-blue-600 rounded-full hover:bg-gray-100 p-2" />
                    </div>
                  </td>
                  <td class="p-2">
                    <div class="font-medium text-gray-800">{model}</div>
                  </td>
                  <td class="p-2">
                    <div class="text-left capitalize">{brand}</div>
                  </td>
                  <td class="p-2">
                    <div class="text-left">
                      {status ? (
                        <p className="text-green-500 font-medium">Available</p>
                      ) : (
                        <p className="text-red-500 font-medium">Stock out</p>
                      )}
                    </div>
                  </td>
                  <td class="p-2">
                    <div class="text-left font-medium text-indigo-500">
                      {price}
                    </div>
                  </td>
                  <td
                    class="p-2"
                    onClick={(_) => alert("Delete! button Clicked!")}
                  >
                    <div class="flex justify-center">
                      <button>
                        <svg
                          class="w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    // </section>
  );
};

export default ProductList;