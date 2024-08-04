const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const customerModel = require('../models/customers.model');

/* GET all customers */
router.get('/list', async (req, res, next) => {
  try {
    const customerListResponse = await customerModel.find();
    const recordCount = customerListResponse.length;
    res.status(200).json({ recordCount: recordCount, results: customerListResponse });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Unable to find customers' });
  }
});

/* GET details of a specific customer by userId */
router.get('/view', async (req, res, next) => {
  const userId = req.query.userId;

  try {
    const customerResponse = await customerModel.findById(userId);

    if (!customerResponse) {
      return res.status(404).json({ status: 404, message: 'Customer not found' });
    }

    res.status(200).json({ status: 200, customerDetails: customerResponse });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 500, message: 'Unable to find the customer' });
  }
});

/* Create New Customer ("/add") */
router.post('/add', async (req, res, next) => {
  console.log('Received POST request with data:', req.body);

  // Extract data from the request body
  let { firstName, lastName, emailAddress, phoneNumber, dob, department } = req.body;

  try {
    const customerObj = new customerModel({
      firstName: firstName,
      lastName: lastName,
      emailAddress: emailAddress,
      phoneNumber: phoneNumber,
      dob: dob,
      department: department,
    });

    const savedCustomer = await customerObj.save();

    res.status(200).json({ message: 'User added successfully', customerDetails: savedCustomer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Unable to add customer' });
  }
});

/* Update an Existing Customer by userId */
router.put('/update/:userId', async (req, res, next) => {
  const userId = req.params.userId; // Get the userId from the URL
  let { firstName, lastName, emailAddress, phoneNumber, dob, department } = req.body;

  try {
    const updatedCustomer = await customerModel.findByIdAndUpdate(
      userId,
      {
        firstName: firstName,
        lastName: lastName,
        emailAddress: emailAddress,
        phoneNumber: phoneNumber,
        dob: dob,
        department: department,
      },
      { new: true }
    );

    if (!updatedCustomer) {
      return res.status(404).json({ status: 404, message: 'Customer not found' });
    }

    res.status(200).json({ status: 200, message: 'Customer updated successfully', customerDetails: updatedCustomer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 500, message: 'Unable to update the customer' });
  }
});

/* Delete an Existing Customer by userId */
router.delete('/delete/:userId', async (req, res, next) => {
  const userId = req.params.userId; // Get the userId from the URL

  try {
    const deletedCustomer = await customerModel.findOneAndDelete({ _id: userId });

    if (!deletedCustomer) {
      return res.status(404).json({ status: 404, message: 'Customer not found' });
    }

    res.status(200).json({ status: 200, message: 'Customer deleted successfully', deletedCustomer: deletedCustomer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 500, message: 'Unable to delete the customer' });
  }
});

/* search Existing customers */
router.get('/search', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
