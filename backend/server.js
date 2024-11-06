const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const empdet = require('./models/empdet');
const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/empdet', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Connection error', error));

// Automatically generate unique Employee ID
const generateEmpId = () => 'EMP' + Date.now();

// Add new employee
app.post('/add', async (req, res) => {
    const { Empname, Designation, Department, joiningdate } = req.body;
    const EmpId = generateEmpId();

    const newEmployee = new empdet({
        Empname,
        EmpId,
        Designation,
        Department,
        joiningdate,
        status: 'Successfully registered',
    });

    try {
        const savedEmp = await newEmployee.save();
        res.status(201).send({
            message: 'Successfully registered',
            data: savedEmp,
        });
    } catch (error) {
        res.status(500).send({ message: 'Error', error });
    }
});

// Fetch employee details by ID
app.get('/empdet/:id', async (req, res) => {
    try {
        const employee = await empdet.findById(req.params.id);
        if (employee) {
            res.status(200).send(employee);
        } else {
            res.status(404).send({ message: 'Details not found' });
        }
    } catch (error) {
        res.status(500).send({ message: 'Error retrieving', error });
    }
});

// Delete employee by ID
app.delete('/empdet/:id', async (req, res) => {
    try {
        const deletedEmployee = await empdet.findByIdAndDelete(req.params.id);
        if (deletedEmployee) {
            res.status(200).send({ message: 'Employee deleted successfully' });
        } else {
            res.status(404).send({ message: 'Employee not found' });
        }
    } catch (error) {
        res.status(500).send({ message: 'Error deleting', error });
    }
});

// Update employee designation by Employee ID
app.put('/updateDesignation/:EmpId', async (req, res) => {
    const { EmpId } = req.params;
    const { newDesignation } = req.body;

    try {
        const updatedEmployee = await empdet.findOneAndUpdate(
            { EmpId }, // Find employee by Employee ID
            { Designation: newDesignation }, // Update designation
            { new: true } // Return the updated document
        );

        if (updatedEmployee) {
            res.status(200).send({
                message: 'Designation updated successfully',
                data: updatedEmployee,
            });
        } else {
            res.status(404).send({ message: 'Employee not found' });
        }
    } catch (error) {
        res.status(500).send({ message: 'Error updating designation', error });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
