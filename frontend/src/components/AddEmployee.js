// src/components/AddEmployee.js
import React, { useState } from 'react';
import { addEmployee } from '../api';

const AddEmployee = () => {
    const [employee, setEmployee] = useState({
        Empname: '',
        Designation: '',
        Department: '',
        joiningdate: '',
    });

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await addEmployee(employee);
            alert(response.message);
        } catch (error) {
            alert('Error adding employee');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Employee</h2>
            <input type="text" name="Empname" placeholder="Employee Name" onChange={handleChange} required />
            <input type="text" name="Designation" placeholder="Designation" onChange={handleChange} required />
            <input type="text" name="Department" placeholder="Department" onChange={handleChange} required />
            <input type="date" name="joiningdate" placeholder="Joining Date" onChange={handleChange} required />
            <button type="submit">Add Employee</button>
        </form>
    );
};

export default AddEmployee;

