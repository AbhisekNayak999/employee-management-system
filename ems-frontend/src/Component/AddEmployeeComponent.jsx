import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../Services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddEmployeeComponent = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const { id } = useParams();

    const [error, setError] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    const [showSuccess, setShowSuccess] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            getEmployee(id).then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            }).catch(err => {
                console.error(err);
            })
        }
    }, [id]);

    function saveOrUpdateEmployee(e) {
        e.preventDefault();

        if (validateForm()) {
            const emp = { firstName, lastName, email };

            const request = id ? updateEmployee(id, emp) : createEmployee(emp);
            
            request
            .then(() => {
                toast.success(
                id ? '✅ Employee updated successfully!' : '🎉 Employee added successfully!',
                { position: "top-center", autoClose: 2000, theme: "colored" }
                );
                setTimeout(() => navigate('/employee'), 2200);
            })
            .catch((err) => {
                toast.error('❌ Something went wrong!', { position: "top-center", autoClose: 2000, theme: "colored" });
                console.error(err);
            });
        }
    }


    function validateForm() {
        let valid = true;
        const errorCopy = { ...error } //{...something} -> syntax for copying an existing object(here something/error)

        if (firstName.trim()) errorCopy.firstName = '';
        else { errorCopy.firstName = 'First Name is required'; valid = false; }

        if (lastName.trim()) errorCopy.lastName = '';
        else { errorCopy.lastName = 'Last Name is required'; valid = false; }

        if (email.trim()) errorCopy.email = '';
        else { errorCopy.email = 'Email is required'; valid = false; }

        setError(errorCopy);
        return valid;
    }

    function pageTitle() {
        return (
            <h2 className='text-center'>
                {id ? "Update Employee" : "Add Employee"}
            </h2>
        );
    }

    function action() {
        return (
            <button className='btn btn-success' onClick={saveOrUpdateEmployee}>
                {id ? "Update Employee" : "Add Employee"}
            </button>
        );
    }

    return (
        <>
            <ToastContainer />
            <div className="d-flex justify-content-center mt-5 mb-5">
                <div className='container'>
                    <br />
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3'>
                            {pageTitle()}
                            <div className='card-body'>
                                <form>
                                    <div className='form-group mb-2'>
                                        <label className='form-label'>First Name: </label>
                                        <input
                                            type="text"
                                            placeholder="Enter Employee's First Name"
                                            value={firstName}
                                            className={`form-control ${error.firstName ? 'is-invalid' : ''}`}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                        {error.firstName && <div className='invalid-feedback'>{error.firstName}</div>}
                                    </div>

                                    <div className='form-group mb-2'>
                                        <label className='form-label'>Last Name: </label>
                                        <input
                                            type="text"
                                            placeholder="Enter Employee's Last Name"
                                            value={lastName}
                                            className={`form-control ${error.lastName ? 'is-invalid' : ''}`}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                        {error.lastName && <div className='invalid-feedback'>{error.lastName}</div>}
                                    </div>

                                    <div className='form-group mb-2'>
                                        <label className='form-label'>Email: </label>
                                        <input
                                            type="email"
                                            placeholder="Enter Employee's Email"
                                            value={email}
                                            className={`form-control ${error.email ? 'is-invalid' : ''}`}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        {error.email && <div className='invalid-feedback'>{error.email}</div>}
                                    </div>

                                    <br />
                                    {action()}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddEmployeeComponent;
