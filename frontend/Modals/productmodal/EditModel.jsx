import React, { useState } from "react";
import AuthUser from "../../src/Auth/AuthUser";
import { X } from "lucide-react";

const EditModel = (props) => {
  const [product, setProduct] = useState(props?.product || {});

  const { https } = AuthUser();

  console.log(product);

  const handleEditProduct = () => {
    https
      .put(`/product/update/${product._id}`, product)
      .then((res) => {
        console.log(res.data);

        props.setIsrefresh(props.isRefresh + 1);
        props.setEditProduct(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="flex w-full max-w-3xl max-h-[90vh] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between bg-indigo-600 px-6 py-4">
          <div>
            <h2 className="text-xl font-bold text-white">Edit Product</h2>

            <p className="mt-1 text-xs text-indigo-100">
              Update product information
            </p>
          </div>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white hover:text-red-500"
            onClick={() => props.setEditProduct(null)}
          >
            <X size={18} />
          </button>
        </div>

        {/* Body - Scrollable */}
        <div className="overflow-y-auto p-5">
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <h5 className="mb-5 text-base font-bold text-gray-800">
              Product Information
            </h5>

            <div className="grid grid-cols-2 gap-4">
              {/* Product Name */}
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                  Product Name
                </label>

                <input
                  type="text"
                  name="product_name"
                  value={product.product_name || ""}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      product_name: e.target.value,
                    })
                  }
                />
              </div>

              {/* Product Price */}
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                  Product Price
                </label>

                <input
                  type="number"
                  name="product_prize"
                  value={product.product_prize || ""}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      product_prize: e.target.value,
                    })
                  }
                />
              </div>

              {/* Product Image */}
              <div className="col-span-2">
                <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                  Product Image
                </label>

                <input
                  type="file"
                  accept="image/*"
                  className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm
              file:mr-3 file:rounded-md file:border-0
              file:bg-indigo-600 file:px-3 file:py-1.5
              file:text-sm file:text-white
              hover:file:bg-indigo-700"
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      product_image: e.target.files[0],
                    })
                  }
                />
              </div>

              {/* Description */}
              <div className="col-span-2">
                <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                  Product Description
                </label>

                <textarea
                  rows="4"
                  name="product_description"
                  value={product.product_description || ""}
                  className="w-full resize-none rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      product_description: e.target.value,
                    })
                  }
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex shrink-0 justify-end gap-2 border-t bg-gray-50 px-6 py-3">
          <button
            className="rounded-lg border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
            onClick={() => props.setEditProduct(null)}
          >
            Cancel
          </button>

          <button
            className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
            onClick={handleEditProduct}
          >
            Update Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModel;
