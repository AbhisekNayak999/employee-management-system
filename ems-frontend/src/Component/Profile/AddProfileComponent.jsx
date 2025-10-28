import React, { useEffect, useState } from 'react';
import Select from "react-select";
import { createProfile, listEmployeeProfile, updateEmployeeProfile } from '../../Services/EmployeeProfileService';
import { useNavigate, useParams } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getEmployee } from '../../Services/EmployeeService';

const AddProfileComponent = ({ mode }) => {
  const [joinDate, setJoinDate] = useState(null);
  const [jobProfile, setJobProfile] = useState('');
  const [department, setDepartment] = useState('');
  const [ctc, setCtc] = useState('');
  const [shifting, setShifting] = useState('');
  const [nationality, setNationality] = useState('');
  const [error, setError] = useState({});

  const navigate = useNavigate();
  const { id } = useParams();

  const countryOptions = [
    { value: "India", label: "🇮🇳 India" },
    { value: "United States", label: "🇺🇸 United States" },
    { value: "United Kingdom", label: "🇬🇧 United Kingdom" },
    { value: "Australia", label: "🇦🇺 Australia" },
    { value: "Canada", label: "🇨🇦 Canada" },
    { value: "Germany", label: "🇩🇪 Germany" },
    { value: "France", label: "🇫🇷 France" },
    { value: "Japan", label: "🇯🇵 Japan" },
    { value: "China", label: "🇨🇳 China" },
    { value: "Brazil", label: "🇧🇷 Brazil" },
    { value: "South Africa", label: "🇿🇦 South Africa" },
    { value: "Italy", label: "🇮🇹 Italy" },
    { value: "Mexico", label: "🇲🇽 Mexico" },
    { value: "Singapore", label: "🇸🇬 Singapore" },
  ];

  useEffect(() => {
    if (id && mode === "edit") {
      listEmployeeProfile(id)
        .then((response) => {
          setJoinDate(response.data.joinDate);
          setJobProfile(response.data.jobProfile);
          setDepartment(response.data.department);
          setCtc(response.data.ctc);
          setShifting(response.data.shifting);
          setNationality(response.data.nationality);
        })
        .catch(err => console.error(err));
    }
  }, [id, mode]);

  // Fetch employee details
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  useEffect(() => {
    if (id) {
      getEmployee(id)
        .then((response) => {
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
        })
        .catch((err) => console.error("Error loading employee:", err));
    }
  }, [id]);

  function saveEmployeeProfile(e) {
    e.preventDefault();

    if (validateForm()) {
      const empProfile = { joinDate, jobProfile, department, ctc, shifting, nationality };
      const request = mode === "add" ? createProfile(id, empProfile) : updateEmployeeProfile(id, empProfile);

      request
        .then((response) => {
          toast.success(
            mode === "add"
              ? '🎉 Profile added successfully!'
              : '✅ Profile updated successfully!',
            {
              position: "top-center",
              autoClose: 2000,
              theme: "colored",
            }
          );
          setTimeout(() => navigate(`/get-profile/${id}`), 2200);
        })
        .catch((err) => {
          toast.error(
            mode === "add"
              ? '❌ Failed to add profile!'
              : '⚠️ Failed to update profile!',
            {
              position: "top-center",
              autoClose: 2000,
              theme: "colored",
            }
          );
          console.error("Profile save/update failed:", err);
        });
    }
  }

  function validateForm() {
    let valid = true;
    const errorCopy = {};

    if (!joinDate) { errorCopy.joinDate = 'Join Date is required'; valid = false; }
    if (!jobProfile.trim()) { errorCopy.jobProfile = 'Job Role is required'; valid = false; }
    if (!department.trim()) { errorCopy.department = 'Department is required'; valid = false; }
    if (!ctc.trim()) { errorCopy.ctc = 'CTC is required'; valid = false; }
    if (!shifting.trim()) { errorCopy.shifting = 'Shift is required'; valid = false; }
    if (!nationality.trim()) { errorCopy.nationality = 'Nationality is required'; valid = false; }

    setError(errorCopy);
    return valid;
  }

  return (
    <>
      <ToastContainer />
      <div className="profile-page container py-5 d-flex justify-content-center align-items-center min-vh-200">

        <div className="container py-5 d-flex justify-content-center align-items-center min-vh-200">
          <div className="profile-card shadow-lg border-0">
            {/* Gradient Header */}
            <div className="form-header text-center py-3 rounded-top-4 mb-4">
              <h3 className="fw-bold text-white m-0">
                {mode === "edit" ? `UPDATE Employee Profile: ${firstName} ${lastName}` : `ADD Employee Profile: ${firstName} ${lastName}`}
              </h3>
            </div>

            <div className="p-4">
              <form>
                {/* ======= Section 1: Basic Info ======= */}
                <h5 className="section-title mb-3">🧾 Basic Details</h5>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Joining Date</label><br />
                  <DatePicker
                    selected={joinDate}
                    onChange={(date) => setJoinDate(date)}
                    dateFormat="dd-MM-yyyy"
                    placeholderText="Select joining date"
                    className={`form-control modern-input ${error.joinDate ? 'is-invalid' : ''}`}
                  />
                  {error.joinDate && <div className='invalid-feedback'>{error.joinDate}</div>}
                </div>

                {/* ======= Section 2: Job Details ======= */}
                <h5 className="section-title mt-4 mb-3">💼 Job Information</h5>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Job Role</label>
                  <input
                    type="text"
                    value={jobProfile}
                    onChange={(e) => setJobProfile(e.target.value)}
                    className={`form-control modern-input ${error.jobProfile ? 'is-invalid' : ''}`}
                    placeholder="Enter Employee's Job Role"
                  />
                  {error.jobProfile && <div className='invalid-feedback'>{error.jobProfile}</div>}
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Department</label>
                  <input
                    type="text"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className={`form-control modern-input ${error.department ? 'is-invalid' : ''}`}
                    placeholder="Enter Employee's Department"
                  />
                  {error.department && <div className='invalid-feedback'>{error.department}</div>}
                </div>

                {/* ======= Section 3: Compensation ======= */}
                <h5 className="section-title mt-4 mb-3">💰 Compensation</h5>
                <div className="mb-3">
                  <label className="form-label fw-semibold">CTC</label>
                  <input
                    type="text"
                    value={ctc}
                    onChange={(e) => setCtc(e.target.value)}
                    className={`form-control modern-input ${error.ctc ? 'is-invalid' : ''}`}
                    placeholder="Enter Employee's CTC"
                  />
                  {error.ctc && <div className='invalid-feedback'>{error.ctc}</div>}
                </div>

                {/* ======= Section 4: Additional Info ======= */}
                <h5 className="section-title mt-4 mb-3">🌍 Other Information</h5>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Shift</label>
                  <input
                    type="text"
                    value={shifting}
                    onChange={(e) => setShifting(e.target.value)}
                    className={`form-control modern-input ${error.shifting ? 'is-invalid' : ''}`}
                    placeholder="Enter Employee's Working Shift"
                  />
                  {error.shifting && <div className='invalid-feedback'>{error.shifting}</div>}
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Nationality</label>
                  <Select
                    options={countryOptions}
                    placeholder="Select or search country..."
                    value={countryOptions.find((option) => option.value === nationality) || null}
                    onChange={(option) => setNationality(option.value)}
                    isSearchable
                  />
                  {error.nationality && <div className='invalid-feedback'>{error.nationality}</div>}
                </div>

                {/* ======= Submit Button ======= */}
                <button className="btn-gradient w-100 fw-semibold mt-4" onClick={saveEmployeeProfile}>
                  {mode === "edit" ? "Update Profile" : "Add Profile"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProfileComponent;
