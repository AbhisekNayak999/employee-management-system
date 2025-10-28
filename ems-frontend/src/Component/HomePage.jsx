import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid p-0">
      {/* Hero Section */}
      <section className="hero-section d-flex flex-column align-items-center justify-content-center text-center">
        <h1 className="fw-bold display-4">Employee Management System</h1>
        <p className="lead mt-3 mb-4">
          Manage employees effortlessly – add, update, and keep track of your workforce in one place.
        </p>
        <div>
          <button
            className="btn-viewEmployee"
            onClick={() => navigate("/employee")}
          >
            📋 View Employees
          </button>
          <button
            className="btn-addEmployee"
            onClick={() => navigate("/add-employee")}
          >
            ➕ Add Employee
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container my-5">
        <h2 className="text-center fw-bold mb-4" style={{ color: "#5578ec" }}>
          Key Features
        </h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card shadow h-100 p-3">
              <h4 className="fw-bold" style={{ color: "#6a88f7" }}>👤 Manage Employees</h4>
              <p>Easily add, update, and delete employee records with just a few clicks.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow h-100 p-3">
              <h4 className="fw-bold" style={{ color: "#922be7" }}>📊 Organized Data</h4>
              <p>Keep employee details structured and accessible in a modern table view.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow h-100 p-3">
              <h4 className="fw-bold" style={{ color: "#5f7ddd" }}>⚡ Fast & Reliable</h4>
              <p>Built with React & Spring Boot for smooth and secure performance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
