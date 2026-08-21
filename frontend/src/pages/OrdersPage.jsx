<<<<<<< HEAD
import { Eye, SquarePen, Trash2 } from "lucide-react";
import React, { useState } from "react";
import AddOrderModal from "../../Modals/AddOrderModal";
=======
import { SquarePen, Trash2 } from "lucide-react";
import React from "react";
>>>>>>> 0c809d10af7213bc0ab31ee86af85bab61bff62a

const OrdersPage = () => {

  const [order, setorder] = useState({
            customer_name:"",
            product_name:"",
            product_image:"",
            amount:"",
            status:"",
  })


  const [ShowModal, setShowModal] = useState(false)


  const handleAdd = () => {

    setShowModal(true)

  }






  return (
<<<<<<< HEAD
    <div className="page-content min-h-screen w-full bg-gray-50 p-4 sm:p-6">

      {/* Heading */}
      <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:px-6">

        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Orders
          </h2>
=======
    <div className="page-content w-full min-h-screen bg-gray-50 p-6">
      <div className="heading flex items-center justify-between rounded-xl bg-white px-6 py-4  shadow border border-gray-200">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Order</h2>
>>>>>>> 0c809d10af7213bc0ab31ee86af85bab61bff62a

          <p className="mt-1 text-sm text-gray-500">
            Manage all orders from here
          </p>
        </div>

        <button onClick={handleAdd} className="w-full rounded-lg bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-purple-700 sm:w-auto">
          + Add Order
        </button>
      </div>

<<<<<<< HEAD

      {/* Order List */}
      <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

        {/* Table Header */}
        <div className="border-b border-gray-200 px-5 py-4 sm:px-6">
          <h3 className="font-semibold text-gray-800">
            Order List
          </h3>
        </div>


        {/* Table */}
        <div className="w-full">

          <table className="w-full text-left">

            <thead className="border-b border-gray-200 bg-gray-50">

=======
      <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow">
        <div className="border-b border-gray-200 px-6 py-4">
          <h3 className="font-semibold text-gray-800">Order List</h3>
        </div>

        <div className="overflow-x-auto">
          <table hover responsive className="mb-0">
            <thead className="bg-gray-50">
>>>>>>> 0c809d10af7213bc0ab31ee86af85bab61bff62a
              <tr>

                <th className="px-4 py-4 text-sm font-semibold text-gray-600">
                  ID
                </th>

                <th className="px-4 py-4 text-sm font-semibold text-gray-600">
                  Customer Name
                </th>

                <th className="px-4 py-4 text-sm font-semibold text-gray-600">
                  Product Name
                </th>

                <th className="px-4 py-4 text-center text-sm font-semibold text-gray-600">
                  Image
                </th>

<<<<<<< HEAD
                <th className="px-4 py-4 text-center text-sm font-semibold text-gray-600">
                  Amount
                </th>

                <th className="px-4 py-4 text-center text-sm font-semibold text-gray-600">
=======
                <th className="px-6 py-4 text-sm text-center font-semibold text-gray-600">
>>>>>>> 0c809d10af7213bc0ab31ee86af85bab61bff62a
                  Status
                </th>

                <th className="px-4 py-4 text-center text-sm font-semibold text-gray-600">
                  Action
                </th>
<<<<<<< HEAD

=======
>>>>>>> 0c809d10af7213bc0ab31ee86af85bab61bff62a
              </tr>

            </thead>

<<<<<<< HEAD

            <tbody className="divide-y divide-gray-100">

              {/* First Row */}
              <tr className="transition hover:bg-gray-50">

                {/* ID */}
                <td className="px-4 py-4 text-sm font-medium text-gray-700">
                  1
                </td>


                {/* Customer */}
                <td className="px-4 py-4">
=======
            <tbody>
              <tr>
                <td className="px-6 py-4 text-center">1</td>
>>>>>>> 0c809d10af7213bc0ab31ee86af85bab61bff62a

                  <div className="font-medium text-gray-800">
                    Aditya Bhore
                  </div>

                </td>

<<<<<<< HEAD

                {/* Product */}
                <td className="px-4 py-4 text-sm text-gray-600">
                  Premium T-Shirt
                </td>


                {/* Image */}
                <td className="px-4 py-4 text-center">

                  <img
                    src="https://via.placeholder.com/45"
                    alt="Product"
                    className="mx-auto h-10 w-10 rounded-lg border border-gray-200 object-cover"
                  />

                </td>


                {/* Amount */}
                <td className="px-4 py-4 text-center text-sm font-semibold text-gray-700">
                  ₹999
                </td>


                {/* Status */}
                <td className="px-4 py-4 text-center">

                  <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    Completed
=======
                <td className="px-6 py-4 text-center text-gray-600">Condom</td>
                <td className="px-6 py-4 text-center text-gray-600">🤤</td>

                <td className="px-6 py-4 text-center text-gray-600">30</td>

                <td className="px-6 py-4 text-center">
                  <span className="rounded-md bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    Active
>>>>>>> 0c809d10af7213bc0ab31ee86af85bab61bff62a
                  </span>

                </td>

<<<<<<< HEAD

                {/* Actions */}
                <td className="px-3 py-4">

                  <div className="flex items-center justify-center gap-1">

                    <button
                      title="View"
                      className="flex items-center gap-1 rounded-md bg-green-50 px-2 py-1.5 text-xs font-medium text-green-600 transition hover:bg-green-100"
                    >
                      <Eye size={14} />
                      View
                    </button>


                    <button
                      title="Edit"
                      className="flex items-center gap-1 rounded-md bg-blue-50 px-2 py-1.5 text-xs font-medium text-blue-600 transition hover:bg-blue-100"
                    >
                      <SquarePen size={14} />
=======
                <td className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button className="flex items-center gap-1.5 rounded bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-600 hover:bg-blue-100">
                      <SquarePen size={15} />
>>>>>>> 0c809d10af7213bc0ab31ee86af85bab61bff62a
                      Edit
                    </button>


                    <button
                      title="Delete"
                      className="flex items-center gap-1 rounded-md bg-red-50 px-2 py-1.5 text-xs font-medium text-red-600 transition hover:bg-red-100"
                    >
                      <Trash2 size={14} />
                      Delete
                    </button>
                  </div>

                </td>

              </tr>
<<<<<<< HEAD





=======
>>>>>>> 0c809d10af7213bc0ab31ee86af85bab61bff62a
            </tbody>
          </table>
        </div>

      </div>
<<<<<<< HEAD




      <AddOrderModal

        ShowModal={ShowModal}
        setShowModal={setShowModal}
        order={order}
        setorder={setorder}


      />

    </div>
  );







};

export default OrdersPage;
=======
    </div>
  );
};

export default OrdersPage;
>>>>>>> 0c809d10af7213bc0ab31ee86af85bab61bff62a
