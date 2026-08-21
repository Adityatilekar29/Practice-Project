import { Eye, SquarePen, Trash2, User } from "lucide-react";
import React, { useEffect, useState } from "react";
import AuthUser from "../Auth/AuthUser";
import AddproductMoadal from "../../Modals/productmodal/AddproductMoadal";
import { IMG_URL } from "../helper/url_helper";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const { https } = AuthUser();
  const [isRefresh, setIsrefresh] = useState(0);

  const getproducts = async () => {
    https
      .get("/product/list")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("Error in products");
      });
  };

  const [viewproduct, setViewProduct] = useState(null);
  const [editProduct, setEditProduct] = useState(null);
  const [deleteProduct, setDeleteProduct] = useState(null);
  const [showModel, setShowModal] = useState(false);

  useEffect(() => {
    getproducts();
  }, [isRefresh]);
  return (
    <>
      <div className="page-content w-full min-h-screen bg-gray-50 p-6">
        <div className="heading flex items-center justify-between rounded-xl bg-white px-6 py-4 shadow border border-gray-200">
          <div>
            <h2 className="text-xl font-bold text-gray-800">Products</h2>

            <p className="mt-1 text-sm text-gray-500">
              Manage all products from here
            </p>
          </div>

          <button
            className="rounded bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-purple-700 hover:shadow-md"
            onClick={() => setShowModal(true)}
          >
            + Add Product
          </button>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow">
          <div className="border-b border-gray-200 px-6 py-4">
            <h3 className="font-semibold text-gray-800">Product List</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                    ID
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                    Product Name
                  </th>

                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">
                    Product Image
                  </th>

                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">
                    Description
                  </th>

                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">
                    Price
                  </th>

                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {products.map((Product, index) => (
                  <tr className="border-t">
                    <td className="px-6 py-4 text-center">{index + 1}</td>

                    <td className="px-6 py-4 text-center font-medium text-gray-800">
                      {Product.product_name}
                    </td>

                    <td className="px-6 py-4 text-center">
                      <img
                        src={IMG_URL + "" + Product.product_image}
                        alt={Product.product_name}
                        className="mx-auto h-14 w-14 rounded-lg object-cover"
                      />
                    </td>

                    <td className="px-6 py-4 text-center text-gray-600">
                      {Product.product_description}
                    </td>

                    <td className="px-6 py-4 text-center font-semibold text-green-600">
                      {Product.product_prize}
                    </td>

                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button className="flex items-center gap-1.5 rounded bg-green-50 px-3 py-1.5 text-sm font-medium text-green-600 hover:bg-green-100">
                          <Eye size={15} />
                          View
                        </button>

                        <button className="flex items-center gap-1.5 rounded bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-600 hover:bg-blue-100">
                          <SquarePen size={15} />
                          Edit
                        </button>

                        <button className="flex items-center gap-1.5 rounded bg-red-50 px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-100">
                          <Trash2 size={15} />
                          Delete
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
      <AddproductMoadal
        showModel={showModel}
        setShowModal={setShowModal}
        isRefresh={isRefresh}
        setIsrefresh={setIsrefresh}
      />
    </>
  );
};

export default ProductsPage;
