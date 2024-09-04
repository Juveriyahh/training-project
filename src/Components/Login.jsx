import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import Register from "./Register";
import RoleSelection from "./RoleSelection";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
    <RoleSelection/>
    const [student, setStudent] = useState({ email: '', password: '' });
    const [role, setRole] = useState('user');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            let resp;
            if (role === 'admin') {
                resp = await axios.post('http://localhost:8085/api/admin/login', student);
                if (resp.status === 200) {
                    toast.success("Admin Logged In",{
                        onClose: () => navigate('/admin/dashboard')
                    });
                    localStorage.setItem("role", "admin");
                    // navigate('/admin/dashboard');
                }
            } else {
                resp = await axios.post('http://localhost:8085/api/student/login', student);
                if (resp.status === 200) {
                    toast.success("User Logged In",{
                        onClose: () => navigate('/courses')
                    });
                    localStorage.setItem("sid", resp.data.id);
                    localStorage.setItem("role", "user");
                    // navigate('/courses');
                }
            }
        } catch (error) {
            toast.error("Invalid Credentials");
        }
    }

    return (
        <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
            <div className="w-50 p-20">
                <h2 className="text-center mb-4">Login</h2>
                <hr />
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label className="form-label">Login as:</label>
                        <div>
                            <input type="radio" value="user" checked={role === 'user'} onChange={() => setRole('user')} />User
                            <input type="radio" value="admin" checked={role === 'admin'} onChange={() => setRole('admin')} style={{ marginLeft: '10px' }} />Admin
                        </div>
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
                    <button className="btn btn-primary w-100" type="submit">Login</button><br /><br />
                    <Link className="nav-link align-content-center" to="/register">Don't have an account? Register</Link>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Login;
