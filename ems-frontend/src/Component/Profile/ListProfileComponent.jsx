import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteEmployeeProfile, listEmployeeProfile } from '../../Services/EmployeeProfileService';
import { getEmployee } from '../../Services/EmployeeService';

const ListProfileComponent = () => {
    const [profiles, setProfile] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    // Fetch employee details
    useEffect(() => {
        if (id) {
            getEmployee(id)
                .then((response) => {
                    setFirstName(response.data.firstName);
                    setLastName(response.data.lastName);
                    setEmail(response.data.email);
                })
                .catch((err) => console.error("Error loading employee:", err));
        }
    }, [id]);

    // Fetch profile
    useEffect(() => {
        if (!id) return;
        setProfile([]); // reset old data
        listEmployeeProfile(id)
            .then((response) => {
                const data = response.data;
                setProfile(Array.isArray(data) ? data : [data]);
            })
            .catch((error) => console.error("Error loading profile:", error));
    }, [id]);

    // Navigation
    const updateProfile = () => {
        if (id) navigate(`/update-profile/${id}`);
        else console.error("No employee ID found for update");
    };

    const removeProfile = (profileId) => {
        if (!profileId) {
            console.error("Missing profile ID for deletion");
            return;
        }

        deleteEmployeeProfile(profileId)
            .then(() => navigate("/employee"))
            .catch((err) => console.error("Error deleting profile:", err));
    };

    return (
        <><div className="container mt-5">
            {/* Back Button */}
            <div className="d-flex justify-content-start mb-3">
                <button
                    className="btn fw-bold back-btn"
                    onClick={() => navigate("/employee")}
                >
                    ⬅ Back to Employee Directory
                </button>
            </div>

            <div className="container mt-5">
                <h2 className="text-center mb-4 fw-bold" style={{ color: "#000000ff" }}>
                    Profile Information: <b>{firstName} {lastName}</b>
                </h2>

                <div className="d-flex justify-content-center">
                    <div className="profile-card-advanced shadow-lg border-0 rounded-4">
                        {profiles.map((profile) => (
                            <div key={profile.joinDate}>
                                <div className="profile-header mb-4">
                                    <div className="profile-info">
                                        <div className="avatar-circle">
                                            <span>{firstName?.charAt(0)}{lastName?.charAt(0)}</span>
                                        </div>
                                        <div>
                                            <h3 className="profile-job">{profile.jobProfile}</h3>
                                            <p className="profile-dept">Department: {profile.department}</p>
                                        </div>
                                    </div>

                                    <button
                                        className="btn btn-outline-primary fw-semibold"
                                        onClick={updateProfile}
                                    >
                                        ✏️ Update Profile
                                    </button>
                                </div>

                                <div className="details">
                                    <div><strong>Join Date:</strong> {profile.joinDate}</div>
                                    <div><strong>CTC:</strong> ₹{profile.ctc}</div>
                                    <div><strong>Shift:</strong> {profile.shifting}</div>
                                    <div><strong>Nationality:</strong> {profile.nationality}</div>
                                </div>

                                <div className="text-end mt-4">
                                    <button
                                        className="btn btn-outline-delete px-4 fw-semibold"
                                        onClick={() => removeProfile(profile.id)}
                                    >
                                        🗑 Delete Profile
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
        </>
    );
};

export default ListProfileComponent;
