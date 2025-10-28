import React, { useEffect, useState } from 'react'
import { deleteEmployee, listEmployees } from '../Services/EmployeeService';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);
  const navigator = useNavigate();

  const [profileStatus, setProfileStatus] = useState({});

  useEffect(() => {
    getAllEmployees();
  }, []);

  //Get all employees stored in the DB
  function getAllEmployees() {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
        checkProfiles(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  //Navigate to the corresponding page
  function addNewEmployee() {
    navigator("/add-employee");
  }
  
  //Navigate to the corresponding page
  function updateEmployee(id) {
    navigator(`/update-employee/${id}`)
  }

  //Delete an existing employee
  function removeEmployee(id) {
    deleteEmployee(id).then((response) => {
      getAllEmployees();
    }).catch(err => {
      console.error(err);
    })
  }

  //Check profile exists or not
  const checkProfiles = async (employeeList) => {
    const status = {};
    for (const emp of employeeList) {
      try {
        const res = await axios.get(`${API_BASE_URL}/profiles/exists/${emp.id}`);
        status[emp.id] = res.data; // true or false
      } catch (err) {
        console.error(`Error checking profile for employee ${emp.id}`, err);
      }
    }
    setProfileStatus(status);
  };


  

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 fw-bold" style={{ color: "#5578ec" }}>
        Employee Directory
      </h2>

      <div className="d-flex justify-content-end mb-3">
        <button
          className="btn-addEmployee"
          onClick={addNewEmployee}
        >
          ➕ Add New Employee
        </button>
      </div>

      <div className="table-responsive shadow-lg rounded-4">
        <table className="table table-custom align-middle text-center">
          <thead>
            <tr>
              <th>🆔 Employee Id</th>
              <th>👤 First Name</th>
              <th>👥 Last Name</th>
              <th>📧 Email</th>
              <th>⚙️ Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>
                  <button className="btn-update" onClick={() => updateEmployee(employee.id)}>
                    ✏️ Update
                  </button>
                  <button className="btn-delete" onClick={() => removeEmployee(employee.id)}>
                    🗑 Delete
                  </button>
                  {profileStatus[employee.id] ? (
                    <button className="btn-profile" onClick={() => navigator(`/get-profile/${employee.id}`)}>
                      👁 View Profile
                    </button>
                  ) : (
                    <button className="btn-profile" onClick={() => navigator(`/add-profile/${employee.id}`)}>
                      ➕ Add Profile
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListEmployeeComponent;
