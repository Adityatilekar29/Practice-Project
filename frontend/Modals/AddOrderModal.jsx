import React, { useState } from 'react'
import AuthUser from '../src/Auth/AuthUser'

const AddOrderModal = ({ShowModal,setShowModal,order,setorder,isRefresh,setisRefresh}) => {

if(!ShowModal){
  return null
}

   


   const {https}=AuthUser()

   const id = order?.id

   const savedata = () =>{


     if(id){

      https.put(`/order/update/${id}`,{...order})
      .then((res)=>{

                   console.log(res.data);
                    setIsRefresh(isRefersh + 1);
                    setShowModal(false);

      })

       setShowModal(false);

     }


     else{

    https.post("/order/store",order)

    .then((res)=>{
      console.log(data)

      setorder(res.data)
      setShowModal(false)

    setisRefresh(isRefresh+1)
      


    })

    setShowModal(false)
     


     }    

   }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

      {/* Modal */}
      <div className="w-full max-w-2xl rounded-xl bg-white shadow-xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">

          <div>
            <h2 className="text-lg font-bold text-gray-800">
              Add Order
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Create a new order
            </p>
          </div>

          <button
            onClick={() => setShowModal(false)}
            className="rounded-lg px-3 py-1 text-xl text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            ×
          </button>

        </div>


        {/* Form */}
        <div className="p-6">

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

            {/* Customer Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Customer Name
              </label>

              <input
                value={order.customer_name}
                onChange={(e)=>setorder({...order,customer_name:e.target.value})}
                type="text"
                placeholder="Enter customer name"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
              />
            </div>


            {/* Product Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Product Name
              </label>

              <input
               value={order.product_name}
                onChange={(e)=>setorder({...order,product_name:e.target.value})}
                type="text"
                placeholder="Enter product name"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
              />
            </div>


            {/* Amount */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Amount
              </label>

              <input
               value={order.amount}
                onChange={(e)=>setorder({...order,amount:e.target.value})}
                type="number"
                placeholder="Enter amount"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
              />
            </div>


            {/* Status */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Status
              </label>

              <select
               
                onChange={(e)=>setorder({...order,status:e.target.value})}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
              >
                <option value="">Select Status</option>
                <option value="Pending">Pending</option>
                <option value="Processing">Processing</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>


            {/* Product Image */}
            <div className="sm:col-span-2">

              <label className="mb-2 block text-sm font-medium text-gray-700">
                Order Image
              </label>

              <input
                type="file"
                accept="image/*"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm"
                onChange={(e) => setorder({ ...order, order_image: e.target.files[0] })}
              />

            </div>

          </div>


          
          <div className="mt-6 flex justify-end gap-3 border-t border-gray-200 pt-5">

            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
            >
              Cancel
            </button>

            <button

             onClick={savedata}
              type="button"
              className="rounded-lg bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-700"
            >
              {id ? "Update Order" : "Add Order"}
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default AddOrderModal
