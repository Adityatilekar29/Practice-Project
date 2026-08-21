import React from "react";
import { X, Upload, UploadCloud } from "lucide-react";
import AuthUser from "../src/Auth/AuthUser";

const UserModal = ({ showModal, setShowModal, addUser, setAddUser, setIsRefresh }) => {

    if (!showModal) return null;

    const { https } = AuthUser();

    const addData = async (e) => {
        
        e.preventDefault();

        if (addUser._id) {
            try {

                await https.put("/user/update", addUser).then((res) => {
                    setIsRefresh((prev) => prev + 1)
                })
                setAddUser({})
                setShowModal(false)

            } catch (error) {
                console.log(error);

            }
        } else {
            try {

                await https.post("/user/store", addUser).then((res) => {
                    setAddUser(res.data)
                    setIsRefresh((prev) => prev + 1)
                })
                setAddUser({})
                setShowModal(false)

            } catch (error) {
                console.log(error);

            }
        }
    }


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">


            {/* Modal */}
            <div className="w-full max-w-lg rounded-xl bg-white shadow-2xl">
                <form onSubmit={addData}>

                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">

                        <div>
                            <h2 className="text-xl font-bold text-gray-800">
                                Add User
                            </h2>

                            <p className="mt-1 text-xs text-gray-500">
                                Add a new user to the system
                            </p>
                        </div>

                        <button
                            onClick={() => { setShowModal(false); setAddUser({}) }}
                            className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
                        >
                            <X size={20} />
                        </button>

                    </div>


                    {/* Scrollable Form Area */}
                    <div className="max-h-[60vh] overflow-y-auto px-5 py-4">

                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">

                            {/* Name */}
                            <div>
                                <label className="mb-1.5 block text-xs font-semibold text-gray-700">
                                    Name
                                </label>

                                <input value={addUser.fullname} onChange={(e) => setAddUser({ ...addUser, fullname: e.target.value })}
                                    type="text"
                                    placeholder="Enter user name"
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                                />
                            </div>


                            {/* Email */}
                            <div>
                                <label className="mb-1.5 block text-xs font-semibold text-gray-700">
                                    Email
                                </label>

                                <input
                                    type="email" value={addUser.email} onChange={(e) => setAddUser({ ...addUser, email: e.target.value })}
                                    placeholder="Enter email address"
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                                />
                            </div>


                            {/* Phone */}
                            <div>
                                <label className="mb-1.5 block text-xs font-semibold text-gray-700">
                                    Phone
                                </label>

                                <input value={addUser.number} onChange={(e) => setAddUser({ ...addUser, number: e.target.value })}
                                    type="number"
                                    placeholder="Enter phone number"
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                                />
                            </div>


                            {/* Status */}
                            <div>
                                <label className="mb-1.5 block text-xs font-semibold text-gray-700">
                                    Status
                                </label>

                                <select
                                    value={addUser.status}
                                    onChange={(e) =>
                                        setAddUser({
                                            ...addUser,
                                            status: e.target.value === "true"
                                        })
                                    }
                                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700"
                                >
                                    <option value="">Select Status</option>
                                    <option value="true">Active</option>
                                    <option value="false">Inactive</option>
                                </select>
                            </div>


                            {/* Image */}
                            <div className="md:col-span-2">

                                <div className="rounded-lg px-4 py-4">

                                    <label
                                        htmlFor="template-image-field"
                                        className="mb-2 block text-sm font-medium text-gray-700"
                                    >
                                        Image
                                    </label>

                                    <input onChange={(e) => setAddUser({ ...addUser, image: e.target.files[0] })}
                                        id="template-image-field"
                                        type="file"
                                        className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-600"
                                        accept="image/png, image/jpeg, image/gif"
                                    />

                                    <small className="mt-1 block text-xs text-gray-400">
                                        PNG, JPG or GIF only
                                    </small>

                                </div>

                            </div>

                            {/* Address */}
                            <div className="md:col-span-2">

                                <label className="mb-1.5 block text-xs font-semibold text-gray-700">
                                    Address
                                </label>

                                <textarea value={addUser.address} onChange={(e) => setAddUser({ ...addUser, address: e.target.value })}
                                    rows="3"
                                    placeholder="Enter user address"
                                    className="w-full resize-none rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                                />

                            </div>


                        </div>

                    </div>


                    {/* Footer */}
                    <div className="flex items-center justify-end gap-2 border-t border-gray-200 px-5 py-3">

                        <button
                            onClick={() => { setShowModal(false); setAddUser({}) }}
                            className="rounded border border-gray-300 px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100"
                        >
                            Cancel
                        </button>

                        <button type="submit"
                            className="rounded bg-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-purple-700 hover:shadow-md"
                        >
                            {addUser._id ? "Update User" : "Add User"}
                        </button>

                    </div>
                </form>

            </div>

        </div >
    );
};

export default UserModal;