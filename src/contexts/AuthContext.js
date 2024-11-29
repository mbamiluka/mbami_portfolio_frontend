import React, { createContext, useState, useContext, useEffect } from 'react';
import API_ENDPOINTS from '../config/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const tokenIsValid = fetch(API_ENDPOINTS.VALIDATE, {
            headers: {
                Authorization: `Bearer ${storedToken}`,
            },
        }).then((response) => {
            if (response.ok) {
                return true;
            } else {
                return false;
            }
        });

        if (storedToken && tokenIsValid) {
            const tokenExpiration = localStorage.getItem('tokenExpiration');
            if (new Date().getTime() < tokenExpiration) {
                setToken(storedToken);
                setIsAuthenticated(true);
            } else {
                localStorage.removeItem('token');
                localStorage.removeItem('tokenExpiration');
            }
        }
        setLoading(false);
    }, []);

    const login = async (username, password) => {
        if (!username || !password) {
            setError('Please fill in all fields');
            return false;
        }

        setLoading(true);
        try {
            const response = await fetch(API_ENDPOINTS.SIGNIN, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            if (response.ok) {
                const data = await response.json();
                const tokenExpiration = new Date().getTime() + 10 * 60 * 60 * 1000; // 10 hours
                localStorage.setItem('token', data.token);
                localStorage.setItem('tokenExpiration', tokenExpiration);
                setToken(data.token);
                setIsAuthenticated(true);
                setError(null);
                return true;
            } else {
                setError('Invalid username or password');
                return false;
            }
        } catch (error) {
            setError('Something went wrong');
            return false;
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('tokenExpiration');
        setToken(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, loading, error, token }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};