import { Eye, SquarePen, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import AddOrderModal from "../../Modals/AddOrderModal";
import AuthUser from "../Auth/AuthUser";
import { IMG_URL } from "../helper/url_helper";


const OrdersPage = () => {

  const [orderdata, setorderdata] = useState([])
  const [isRefresh, setisRefresh] = useState(0)
  const [ShowModal, setShowModal] = useState(false)



  const [order, setorder] = useState({
    customer_name: "",
    product_name: "",
    product_image: "",
    amount: "",
    status: "",
  })




  const handleAdd = () => {

    setShowModal(true)

  }


  



  const { https } = AuthUser()


 const handledDelete=(id)=>{

       https.delete(`/order/delete/${id}`)
       .then((res)=>{
        setisRefresh(isRefresh+1)
       }) .catch((err) => {
        console.log(err);
      });

  }

  const getorder = async () => {

    await https.get("/order/list")
      .then((res) => {

        console.log(res.data)
        setorderdata(res.data)
        setisRefresh(isRefresh+1)


      }).catch((err) => {
        console.log(err)
        console.log("Error in members")
      })

  }


  useEffect(() => {

    getorder()

  }, [isRefresh])






  return (
    <div className="page-content min-h-screen w-full bg-gray-50 p-4 sm:p-6">

      {/* Heading */}
      <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:px-6">

        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Orders
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Manage all orders from here
          </p>
        </div>

        <button onClick={handleAdd} className="w-full rounded-lg bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-purple-700 sm:w-auto">
          + Add Order
        </button>
      </div>


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

                <th className="px-4 py-4 text-center text-sm font-semibold text-gray-600">
                  Amount
                </th>

                <th className="px-4 py-4 text-center text-sm font-semibold text-gray-600">
                  Status
                </th>

                <th className="px-4 py-4 text-center text-sm font-semibold text-gray-600">
                  Action
                </th>
              </tr>

            </thead>


            <tbody className="divide-y divide-gray-100">
              {orderdata.length > 0 && orderdata.map((data, key) => (



                <tr className="transition hover:bg-gray-50" key={key}>

                  {/* ID */}
                  <td className="px-4 py-4 text-sm font-medium text-gray-700">
                    1
                  </td>


                  {/* Customer */}
                  <td className="px-4 py-4">

                    <div className="font-medium text-gray-800">
                      {data.customer_name}
                    </div>

                  </td>


                  {/* Product */}
                  <td className="px-4 py-4 text-sm text-gray-600">
                    {data.product_name}
                  </td>


                  {/* Image */}
                  <td className="px-4 py-4 text-center">

                    <img
                      src={IMG_URL + "/" + data.order_image}
                      alt="order"
                      className="mx-auto h-10 w-10 rounded-lg border border-gray-200 object-cover"

                    />

                  </td>


                  {/* Amount */}
                  <td className="px-4 py-4 text-center text-sm font-semibold text-gray-700">
                    {data.amount}
                  </td>


                  {/* Status */}
                  <td className="px-4 py-4 text-center">

                    <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                      {data.status}
                    </span>

                  </td>


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
                        Edit
                      </button>


                      <button
                      onClick={()=>handledDelete(data._id)}
                        title="Delete"
                        className="flex items-center gap-1 rounded-md bg-red-50 px-2 py-1.5 text-xs font-medium text-red-600 transition hover:bg-red-100"
                      >
                        <Trash2 size={14} />
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




      <AddOrderModal

        ShowModal={ShowModal}
        setShowModal={setShowModal}
        order={order}
        setorder={setorder}
        isRefresh={isRefresh}
        setisRefresh={setisRefresh}


      />

    </div>
  );







};

export default OrdersPage;
