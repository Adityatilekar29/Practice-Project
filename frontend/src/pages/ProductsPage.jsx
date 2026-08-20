import React, { useState } from "react";
import { Plus, Pencil, Trash2, X, Search } from "lucide-react";

/**
 * PRODUCTS CRUD — self-contained page.
 * ----------------------------------------------------
 * Only this file needs editing for the Products module.
 * No auth. No API calls yet — wire up your Express routes
 * where marked with TODO.
 */

const INITIAL_PRODUCTS = [
  { id: "P-2001", name: "Wireless Mouse", category: "Electronics", price: "₹799", stock: "In stock" },
  { id: "P-2002", name: "Office Chair", category: "Furniture", price: "₹4,499", stock: "Low stock" },
  { id: "P-2003", name: "Notebook Pack", category: "Stationery", price: "₹149", stock: "In stock" },
];

function Badge({ status }) {
  const styles = {
    "In stock": "bg-emerald-50 text-emerald-700",
    "Low stock": "bg-amber-50 text-amber-700",
    "Out of stock": "bg-red-50 text-red-600",
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

export default function ProductsPage() {
  const [products] = useState(INITIAL_PRODUCTS); // TODO: replace with GET /api/products via useEffect
  const [modalOpen, setModalOpen] = useState(false);
  const [editingRow, setEditingRow] = useState(null);

  const openAdd = () => { setEditingRow(null); setModalOpen(true); };
  const openEdit = (row) => { setEditingRow(row); setModalOpen(true); };
  const closeModal = () => setModalOpen(false);

  const handleSave = () => {
    // TODO: POST /api/products (add) or PUT /api/products/:id (edit)
    closeModal();
  };
  const handleDelete = (row) => {
    // TODO: DELETE /api/products/:id
    console.log("delete product", row);
  };

  return (
    <div>
      <div className="mb-5">
        <h1 className="text-base font-bold text-slate-800 m-0">Products</h1>
        <div className="text-xs text-slate-500">Manage product catalog</div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-slate-200 flex-wrap">
          <div className="relative">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              placeholder="Search products..."
              className="pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50 min-w-[220px] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
            />
          </div>
          <button
            onClick={openAdd}
            className="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg"
          >
            <Plus size={15} /> Add Product
          </button>
        </div>

        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50">
              <th className="text-left px-5 py-3 text-[11px] font-semibold uppercase tracking-wide text-slate-500">Product</th>
              <th className="text-left px-5 py-3 text-[11px] font-semibold uppercase tracking-wide text-slate-500">Category</th>
              <th className="text-left px-5 py-3 text-[11px] font-semibold uppercase tracking-wide text-slate-500">Price</th>
              <th className="text-left px-5 py-3 text-[11px] font-semibold uppercase tracking-wide text-slate-500">Stock</th>
              <th className="text-right px-5 py-3 text-[11px] font-semibold uppercase tracking-wide text-slate-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-t border-slate-100 hover:bg-slate-50">
                <td className="px-5 py-3.5">
                  <div className="font-semibold text-slate-800">{p.name}</div>
                  <div className="text-xs text-slate-400">SKU: {p.id}</div>
                </td>
                <td className="px-5 py-3.5">{p.category}</td>
                <td className="px-5 py-3.5">{p.price}</td>
                <td className="px-5 py-3.5"><Badge status={p.stock} /></td>
                <td className="px-5 py-3.5">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => openEdit(p)}
                      className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded-md hover:border-indigo-400 hover:text-indigo-600"
                    >
                      <Pencil size={14} />
                    </button>
                    <button
                      onClick={() => handleDelete(p)}
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
          <span>Showing {products.length} of {products.length} products</span>
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
              <h3 className="text-sm font-semibold text-slate-800">{editingRow ? "Edit Product" : "Add Product"}</h3>
              <button onClick={closeModal} className="text-slate-400 hover:text-slate-600"><X size={18} /></button>
            </div>
            <div className="p-6 flex flex-col gap-3.5">
              <Field label="Product Name"><input className={inputCls} defaultValue={editingRow?.name} placeholder="e.g. Wireless Mouse" /></Field>
              <div className="flex gap-3">
                <Field label="Category"><input className={inputCls} defaultValue={editingRow?.category} placeholder="e.g. Electronics" /></Field>
                <Field label="Price (₹)"><input className={inputCls} type="number" placeholder="0" /></Field>
              </div>
              <Field label="Stock Quantity"><input className={inputCls} type="number" placeholder="0" /></Field>
            </div>
            <div className="px-6 py-4 border-t border-slate-200 flex justify-end gap-2">
              <button onClick={closeModal} className="px-4 py-2 rounded-lg text-sm font-semibold border border-slate-200">Cancel</button>
              <button onClick={handleSave} className="px-4 py-2 rounded-lg text-sm font-semibold bg-indigo-600 text-white">Save Product</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
