import React, { useEffect } from 'react';
import API_ENDPOINTS from '../../config/api';

const HealthCheck = () => {
  useEffect(() => {
    const healthCheck = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.HEALTH_CHECK, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        });
        const text = await response.text(); // since the backend returns a plain "OK"
        console.log('Health Check:', text);
      } catch (error) {
        console.error('Error during health check:', error);
      }
    };
    healthCheck();
  }, []);

  return <div>Health check: Check console for status</div>;
};

export default HealthCheck;