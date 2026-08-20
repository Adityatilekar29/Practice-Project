import React from "react";

const ProductsPage = () => {
  return (
    <div
      className="card border-0 shadow rounded-4 mb-4"
      style={{
        background: "linear-gradient(135deg,#4F46E5,#7C3AED)",
      }}
    >
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h3 className="fw-bold text-white mb-1">
              <i className="bi bi-box-seam-fill me-2"></i>
              Products
            </h3>

            <p className="text-white-50 mb-0">
              Manage all products from one place.
            </p>
          </div>

          <button className="btn btn-light px-4 py-2 fw-semibold rounded-3">
            <i className="bi bi-plus-lg me-2"></i>
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
