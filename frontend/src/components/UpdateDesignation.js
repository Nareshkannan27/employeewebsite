// src/components/UpdateDesignation.js
import React, { useState } from 'react';
import { updateEmployeeDesignation } from '../api';

const UpdateDesignation = () => {
    const [EmpId, setEmpId] = useState('');
    const [newDesignation, setNewDesignation] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await updateEmployeeDesignation(EmpId, newDesignation);
            alert(response.message);
        } catch (error) {
            alert('Error updating designation');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Update Employee Designation</h2>
            <input type="text" placeholder="Employee ID" value={EmpId} onChange={(e) => setEmpId(e.target.value)} required />
            <input type="text" placeholder="New Designation" value={newDesignation} onChange={(e) => setNewDesignation(e.target.value)} required />
            <button type="submit">Update Designation</button>
        </form>
    );
};

export default UpdateDesignation;

