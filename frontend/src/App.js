// src/App.js
import React from 'react';
import AddEmployee from './components/AddEmployee';
import UpdateDesignation from './components/UpdateDesignation';
import EmployeeDetails from './components/EmployeeDetails';
import DeleteEmployee from './components/DeleteEmployee';

const App = () => {
    return (
        <div>
            <h1>Employee Management</h1>
            <AddEmployee />
            <UpdateDesignation />
            <EmployeeDetails />
            <DeleteEmployee />
        </div>
    );
};

export default App;
