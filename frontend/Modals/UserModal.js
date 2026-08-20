import React from "react";
import { X, Upload } from "lucide-react";

const UserModal = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">

            <div className="w-full max-w-2xl rounded-xl bg-white shadow-2xl">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                    <div>
                        <h2 className="text-xl font-bold text-gray-800">
                            Add User
                        </h2>
                        <p className="mt-1 text-sm text-gray-500">
                            Add a new user to the system
                        </p>
                    </div>

                    <button className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700">
                        <X size={20} />
                    </button>
                </div>


                {/* Form */}
                <div className="px-6 py-5">

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                        {/* Name */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                Name
                            </label>

                            <input
                                type="text"
                                placeholder="Enter user name"
                                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                            />
                        </div>


                        {/* Email */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder="Enter email address"
                                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                            />
                        </div>


                        {/* Phone */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                Phone
                            </label>

                            <input
                                type="text"
                                placeholder="Enter phone number"
                                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                            />
                        </div>


                        {/* Status */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                Status
                            </label>

                            <select
                                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-700 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                            >
                                <option>Select Status</option>
                                <option>Active</option>
                                <option>Inactive</option>
                            </select>
                        </div>


                        {/* Image */}
                        <div className="md:col-span-2">
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                Image
                            </label>

                            <div className="flex w-full items-center justify-center rounded-lg border-2 border-dashed border-gray-300 px-6 py-6 transition hover:border-purple-400 hover:bg-purple-50">

                                <div className="text-center">

                                    <Upload
                                        size={28}
                                        className="mx-auto mb-2 text-gray-400"
                                    />

                                    <p className="text-sm font-medium text-gray-600">
                                        Upload user image
                                    </p>

                                    <p className="mt-1 text-xs text-gray-400">
                                        PNG, JPG or JPEG
                                    </p>

                                    <input
                                        type="file"
                                        className="mt-3 block w-full text-sm text-gray-500"
                                    />

                                </div>

                            </div>
                        </div>


                        {/* Address */}
                        <div className="md:col-span-2">
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                Address
                            </label>

                            <textarea
                                rows="3"
                                placeholder="Enter user address"
                                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                            ></textarea>
                        </div>

                    </div>

                </div>


                {/* Footer */}
                <div className="flex items-center justify-end gap-3 border-t border-gray-200 px-6 py-4">

                    <button className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-100">
                        Cancel
                    </button>

                    <button className="rounded-lg bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-purple-700 hover:shadow-md">
                        Add User
                    </button>

                </div>

            </div>

        </div>
    );
};

export default UserModal;