import React, { useState } from "react";
import { Plus, Pencil, Trash2, X, Search } from "lucide-react";

/**
 * USERS CRUD — self-contained page.
 * ----------------------------------------------------
 * Only this file needs editing for the Users module.
 * No auth. No API calls yet — wire up your Express routes
 * where marked with TODO.
 */

const INITIAL_USERS = [
  { id: "U-1001", name: "Rohan Deshmukh", email: "rohan@example.com", role: "Admin", status: "Active" },
  { id: "U-1002", name: "Sneha Patil", email: "sneha@example.com", role: "Editor", status: "Active" },
  { id: "U-1003", name: "Ajay Kulkarni", email: "ajay@example.com", role: "Viewer", status: "Inactive" },
];

function Badge({ status }) {
  const styles = {
    Active: "bg-emerald-50 text-emerald-700",
    Inactive: "bg-red-50 text-red-600",
  };
  return (
    <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${styles[status] || "bg-slate-100 text-slate-600"}`}>
      {status}
    </span>
  );
}

const inputCls =
  "w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white";

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-slate-500 mb-1.5">{label}</label>
      {children}
    </div>
  );
}

export default function UsersPage() {
  const [users] = useState(INITIAL_USERS); // TODO: replace with GET /api/users via useEffect
  const [modalOpen, setModalOpen] = useState(false);
  const [editingRow, setEditingRow] = useState(null);

  const openAdd = () => { setEditingRow(null); setModalOpen(true); };
  const openEdit = (row) => { setEditingRow(row); setModalOpen(true); };
  const closeModal = () => setModalOpen(false);

  const handleSave = () => {
    // TODO: POST /api/users (add) or PUT /api/users/:id (edit)
    closeModal();
  };
  const handleDelete = (row) => {
    // TODO: DELETE /api/users/:id
    console.log("delete user", row);
  };

  return (
    <div>
      <div className="mb-5">
        <h1 className="text-base font-bold text-slate-800 m-0">Users</h1>
        <div className="text-xs text-slate-500">Manage user accounts</div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-slate-200 flex-wrap">
          <div className="relative">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              placeholder="Search users..."
              className="pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50 min-w-[220px] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
            />
          </div>
          <button
            onClick={openAdd}
            className="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg"
          >
            <Plus size={15} /> Add User
          </button>
        </div>

        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50">
              <th className="text-left px-5 py-3 text-[11px] font-semibold uppercase tracking-wide text-slate-500">Name</th>
              <th className="text-left px-5 py-3 text-[11px] font-semibold uppercase tracking-wide text-slate-500">Email</th>
              <th className="text-left px-5 py-3 text-[11px] font-semibold uppercase tracking-wide text-slate-500">Role</th>
              <th className="text-left px-5 py-3 text-[11px] font-semibold uppercase tracking-wide text-slate-500">Status</th>
              <th className="text-right px-5 py-3 text-[11px] font-semibold uppercase tracking-wide text-slate-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-t border-slate-100 hover:bg-slate-50">
                <td className="px-5 py-3.5">
                  <div className="font-semibold text-slate-800">{u.name}</div>
                  <div className="text-xs text-slate-400">ID: {u.id}</div>
                </td>
                <td className="px-5 py-3.5">{u.email}</td>
                <td className="px-5 py-3.5">{u.role}</td>
                <td className="px-5 py-3.5"><Badge status={u.status} /></td>
                <td className="px-5 py-3.5">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => openEdit(u)}
                      className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded-md hover:border-indigo-400 hover:text-indigo-600"
                    >
                      <Pencil size={14} />
                    </button>
                    <button
                      onClick={() => handleDelete(u)}
                      className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded-md hover:border-red-400 hover:text-red-600 hover:bg-red-50"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center justify-between px-5 py-3.5 border-t border-slate-200 text-xs text-slate-500">
          <span>Showing {users.length} of {users.length} users</span>
          <div className="flex gap-1.5">
            <button className="w-7 h-7 rounded-md bg-indigo-600 text-white text-xs">1</button>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 bg-slate-900/45 flex items-center justify-center z-50 p-4"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className="bg-white rounded-xl w-full max-w-md max-h-[88vh] overflow-auto shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
              <h3 className="text-sm font-semibold text-slate-800">{editingRow ? "Edit User" : "Add User"}</h3>
              <button onClick={closeModal} className="text-slate-400 hover:text-slate-600"><X size={18} /></button>
            </div>
            <div className="p-6 flex flex-col gap-3.5">
              <Field label="Full Name"><input className={inputCls} defaultValue={editingRow?.name} placeholder="e.g. Rohan Deshmukh" /></Field>
              <Field label="Email"><input className={inputCls} defaultValue={editingRow?.email} placeholder="name@example.com" /></Field>
              <div className="flex gap-3">
                <Field label="Role">
                  <select className={inputCls} defaultValue={editingRow?.role}>
                    <option>Admin</option><option>Editor</option><option>Viewer</option>
                  </select>
                </Field>
                <Field label="Status">
                  <select className={inputCls} defaultValue={editingRow?.status}>
                    <option>Active</option><option>Inactive</option>
                  </select>
                </Field>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-slate-200 flex justify-end gap-2">
              <button onClick={closeModal} className="px-4 py-2 rounded-lg text-sm font-semibold border border-slate-200">Cancel</button>
              <button onClick={handleSave} className="px-4 py-2 rounded-lg text-sm font-semibold bg-indigo-600 text-white">Save User</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
