import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
    const [student, setStudent] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const resp = await axios.post('http://localhost:8085/api/student', student);
            if (resp.status === 201) {
                toast.success("Registered Successfully",{
                    onClose: () => navigate('/login')
                });
                // navigate('/login');
            }
        } catch (error) {
            toast.error("Invalid Credentials");
        }
    }

    return (
        <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
            <div className="w-50 p-20">
                <h2 className="text-center mb-4">Register</h2>
                <hr />
                <form onSubmit={handleRegister}>
                    <div className="mb-3">
                        <label className="form-label">Name:</label>
                        <input type="text" className="form-control" value={student.name} onChange={(e) => setStudent({ ...student, name: e.target.value })} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email:</label>
                        <input type="email" className="form-control" value={student.email} onChange={(e) => setStudent({ ...student, email: e.target.value })} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password:</label>
                        <input type="password" className="form-control" value={student.password} onChange={(e) => setStudent({ ...student, password: e.target.value })} required />
                    </div>
                    <br />
                    <button className="btn btn-primary w-100" type="submit">Register</button> <br /><br />
                    <Link className="nav-link justify-content-center" to="/login">Already have an account? Login</Link>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Register;
