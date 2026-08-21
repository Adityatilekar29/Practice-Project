import { ImagePlus, UploadCloud, X } from "lucide-react";
import React, { useState } from "react";
import AuthUser from "../../src/Auth/AuthUser";

const AddproductMoadal = ({
  isRefresh,
  setIsrefresh,
  setShowModal,
  showModel,
}) => {
  const [productData, setProductData] = useState({
    product_name: "",
    product_description: "",
    product_prize: "",
    product_image: null,
  });
  const { https } = AuthUser();

  const handleAddProduct = () => {
    https.post("product/store", productData).then((res) => {
      console.log(res.data);
      setIsrefresh(isRefresh + 1);
      setShowModal(false);
    });
  };

  return (
    <>
      {showModel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between bg-indigo-600 px-8 ">
              <div>
                <h2 className="text-2xl font-bold text-white">Add Product</h2>
                <p className="mt-1 text-sm text-indigo-100">
                  Create a new product
                </p>
              </div>

              <button
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white hover:text-red-500"
                onClick={() => setShowModal(false)}
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="grid grid-cols-2 gap-6 p-8">
              {/* Product Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Product Name
                </label>

                <input
                  type="text"
                  placeholder="Enter product name"
                  name="product_name"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                  onChange={(e) =>
                    setProductData({
                      ...productData,
                      product_name: e.target.value,
                    })
                  }
                />
              </div>

              {/* Product Price */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Product Price
                </label>

                <input
                  type="number"
                  name="product_prize"
                  placeholder="Enter product price"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                  onChange={(e) =>
                    setProductData({
                      ...productData,
                      product_prize: e.target.value,
                    })
                  }
                />
              </div>

              {/* Product Image */}
              <div className="col-span-2">
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Product Image
                </label>

                <input
                  type="file"
                  className="block w-full rounded-xl border border-gray-300 p-3
          file:mr-4 file:rounded-lg file:border-0
          file:bg-indigo-600 file:px-4 file:py-2
          file:text-white hover:file:bg-indigo-700"
                  onChange={(e) =>
                    setProductData({
                      ...productData,
                      product_image: e.target.files[0],
                    })
                  }
                />
              </div>

              {/* Description */}
              <div className="col-span-2">
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Product Description
                </label>

                <textarea
                  rows="4"
                  placeholder="Enter product description..."
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                  name="product_description"
                  onChange={(e) =>
                    setProductData({
                      ...productData,
                      product_description: e.target.value,
                    })
                  }
                ></textarea>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-3 border-t bg-gray-50 px-8 py-4">
              <button
                className="rounded-xl border border-gray-300 px-6 py-2.5 font-medium hover:bg-gray-100"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>

              <button
                className="rounded-xl bg-indigo-600 px-6 py-2.5 font-semibold text-white hover:bg-indigo-700"
                onClick={handleAddProduct}
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddproductMoadal;
