// src/components/EmployeeDetails.js
import React, { useState } from 'react';
import { getEmployeeDetails } from '../api';

const EmployeeDetails = () => {
    const [EmpId, setEmpId] = useState('');
    const [employee, setEmployee] = useState(null);

    const fetchDetails = async () => {
        try {
            const data = await getEmployeeDetails(EmpId);
            setEmployee(data);
        } catch (error) {
            alert('Employee not found');
            setEmployee(null);
        }
    };

    return (
        <div>
            <h2>Employee Details</h2>
            <input type="text" placeholder="Employee ID" value={EmpId} onChange={(e) => setEmpId(e.target.value)} />
            <button onClick={fetchDetails}>Get Details</button>
            {employee && (
                <div>
                    <p><strong>Name:</strong> {employee.Empname}</p>
                    <p><strong>Designation:</strong> {employee.Designation}</p>
                    <p><strong>Department:</strong> {employee.Department}</p>
                    <p><strong>Joining Date:</strong> {new Date(employee.joiningdate).toLocaleDateString()}</p>
                    <p><strong>Status:</strong> {employee.status}</p>
                </div>
            )}
        </div>
    );
};

export default EmployeeDetails;

