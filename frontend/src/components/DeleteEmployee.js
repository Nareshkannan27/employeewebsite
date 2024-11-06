// src/components/DeleteEmployee.js
import React, { useState } from 'react';
import { deleteEmployee } from '../api';

const DeleteEmployee = () => {
    const [EmpId, setEmpId] = useState('');

    const handleDelete = async () => {
        try {
            const response = await deleteEmployee(EmpId);
            alert(response.message);
            setEmpId(''); // Clear the input field after deletion
        } catch (error) {
            alert('Error deleting employee');
        }
    };

    return (
        <div>
            <h2>Delete Employee</h2>
            <input
                type="text"
                placeholder="Employee ID"
                value={EmpId}
                onChange={(e) => setEmpId(e.target.value)}
                required
            />
            <button onClick={handleDelete}>Delete Employee</button>
        </div>
    );
};

export default DeleteEmployee;

