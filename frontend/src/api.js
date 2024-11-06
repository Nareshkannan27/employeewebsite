// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000';

// Add a new employee
export const addEmployee = async (employeeData) => {
    try {
        const response = await axios.post(`${API_URL}/add`, employeeData);
        return response.data;
    } catch (error) {
        console.error('Error adding employee:', error);
        throw error;
    }
};

// Get employee details by ID
export const getEmployeeDetails = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/empdet/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching employee details:', error);
        throw error;
    }
};

// Update employee designation
export const updateEmployeeDesignation = async (EmpId, newDesignation) => {
    try {
        const response = await axios.put(`${API_URL}/updateDesignation/${EmpId}`, { newDesignation });
        return response.data;
    } catch (error) {
        console.error('Error updating designation:', error);
        throw error;
    }
};

export const deleteEmployee = async (EmpId) => {
    try {
        const response = await axios.delete(`${API_URL}/empdet/${EmpId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting employee:', error);
        throw error;
    }
};
