import { SquarePen, Trash2 } from 'lucide-react'
import React from 'react'

const UsersPage = () => {
  return (

    <div className="page-content w-full min-h-screen bg-gray-50 p-6">

      {/* Heading */}
      <div className="heading flex items-center justify-between rounded-xl bg-white px-6 py-4  shadow border border-gray-200">

        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Users
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Manage all users from here
          </p>
        </div>

        <button className="rounded bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-purple-700 hover:shadow-md">
          + Add User
        </button>

      </div>



      {/* Users Table */}
      <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow">

        <div className="border-b border-gray-200 px-6 py-4">
          <h3 className="font-semibold text-gray-800">
            Users List
          </h3>
        </div>

        <div className="overflow-x-auto">

          <table hover responsive className="mb-0">

            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                  ID
                </th>

                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                  Name
                </th>

                <th className="px-6 py-4 text-sm text-center font-semibold text-gray-600">
                  Email
                </th>
                <th className="px-6 py-4 text-sm text-center font-semibold text-gray-600">
                  Image
                </th>

                <th className="px-6 py-4 text-sm text-center font-semibold text-gray-600">
                  Phone
                </th>

                <th className="px-6 py-4 text-sm text-center font-semibold text-gray-600">
                  Address
                </th>

                <th className="px-6 py-4 text-sm text-center font-semibold text-gray-600">
                  Status
                </th>

                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="px-6 py-4 text-center">1</td>

                <td className="px-6 py-4 text-center">
                  <div className="font-medium text-gray-800">
                    Aditya Tilekar
                  </div>
                </td>

                <td className="px-6 py-4 text-center text-gray-600">
                  aditya@gmail.com
                </td>
                <td className="px-6 py-4 text-center text-gray-600">
                  image
                </td>

                <td className="px-6 py-4 text-center text-gray-600">
                  9876543210
                </td>

                <td className="px-6 py-4 text-center">
                  <span className="rounded-md bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
                    pune
                  </span>
                </td>

                <td className="px-6 py-4 text-center">
                  <span className="rounded-md bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    Active
                  </span>
                </td>

                <td className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-2">

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


            </tbody>

          </table>

        </div>
      </div>

    </div>
  )
}

export default UsersPage
