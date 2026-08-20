import { SquarePen, Trash2, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import AuthUser from "../Auth/AuthUser";
import { IMG_URL } from "../helper/url_helper";

const UsersPage = () => {
  const { http } = AuthUser();
  const [getuser, setGetuser] = useState([]);

  const getUsers = async () => {
    await http.get("/user/list").then((res) => {
      setGetuser(res.data);
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="page-content w-full min-h-screen bg-gray-50 p-6">
      {/* Heading */}
      <div className="heading flex items-center justify-between rounded-xl bg-white px-6 py-4  shadow border border-gray-200">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Users</h2>

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
          <h3 className="font-semibold text-gray-800">Users List</h3>
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
              {getuser.map((item, index) => (
                <tr key={item._id}>
                  <td className="px-6 py-4 text-center">{index + 1}</td>

                  <td className="px-6 py-4 text-center">
                    <div className="font-medium text-gray-800">
                      {item.fullname}
                    </div>
                  </td>

                  <td className="px-6 py-4 text-center text-gray-600">
                    {item.email}
                  </td>
                  <td className="px-6 py-4 text-center rounded text-gray-600">
                    <img src={IMG_URL + "" + item.image} alt={item.fullname} />
                  </td>

                  <td className="px-6 py-4 text-center text-gray-600">
                    {item.number}
                  </td>

                  <td className="px-6 py-4 text-center">
                    <span className="rounded-md bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
                      {item.address}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-center">
                    <span className="rounded-md bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                      {item.status ? "Active" : "InActive"}
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
