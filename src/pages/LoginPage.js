import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import API_ENDPOINTS from '../config/api';

const LoginPage = () => {
    const { login, loading, error, isAuthenticated } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogin = async (e) => {
        e.preventDefault();
        const success = await login(username, password);
        if (success) {
            navigate('/admin');
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/admin');
        }
    }, [isAuthenticated, navigate]);

    useEffect(() => {
        console.log('API Endpoint',API_ENDPOINTS.AUTH);
    } , []);

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit" disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </div>
                {error && <p>{error}</p>}
            </form>
            <div className="footer">
                <p>Don't have an account? <a href="/signup">Sign up</a></p>
                <p>Forgot your password? <a href="/reset-password">Reset it</a></p>
            </div>
        </div>
    );
};

export default LoginPage;