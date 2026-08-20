import React, { useState } from "react";
import { Users, Package, Receipt, LayoutGrid } from "lucide-react";
import UsersPage from "./pages/UsersPage";
import ProductsPage from "./pages/ProductsPage";
import OrdersPage from "./pages/OrdersPage";

/**
 * App shell — sidebar navigation only.
 * Each team member works in their own page file:
 *   - src/pages/UsersPage.jsx     (Person 1)
 *   - src/pages/ProductsPage.jsx  (Person 2)
 *   - src/pages/OrdersPage.jsx    (Person 3)
 * Editing your own page file will not conflict with the others.
 */

const NAV_ITEMS = [
  { key: "users", label: "Users", icon: Users },
  { key: "products", label: "Products", icon: Package },
  { key: "orders", label: "Orders", icon: Receipt },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("users");

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      <aside className="w-56 shrink-0 bg-slate-900 text-slate-300 flex flex-col p-4">
        <div className="flex items-center gap-2 text-white font-bold text-base px-2 pb-5 mb-4 border-b border-white/10">
          <LayoutGrid size={18} className="text-amber-400" />
          AdminPanel
        </div>
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = item.key === activeTab;
          return (
            <button
              key={item.key}
              onClick={() => setActiveTab(item.key)}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm mb-1 text-left ${
                isActive ? "bg-indigo-600 text-white" : "hover:bg-white/5 text-slate-300"
              }`}
            >
              <Icon size={16} /> {item.label}
            </button>
          );
        })}
        <div className="mt-auto px-3 py-2 text-xs text-slate-500">v1.0 · frontend only</div>
      </aside>

      <div className="flex-1 min-w-0 p-6">
        {activeTab === "users" && <UsersPage />}
        {activeTab === "products" && <ProductsPage />}
        {activeTab === "orders" && <OrdersPage />}
      </div>
    </div>
  );
}
