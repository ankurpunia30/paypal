const express = require('express');
const cors = require('cors');
const xlsx = require('xlsx');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Serve static files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


// Handle POST request
app.post('/api/payment', (req, res) => {

    const formData = req.body;
    const { name, email, amount} = formData;
    if (!name || !email || !amount) {
        return res.status(400).json({ message: 'All fields are required!' });
    }
    
    console.log(formData);

    const filePath = 'payment.xlsx';
    let workbook;

    // Check if the file exists
    if (fs.existsSync(filePath)) {
        // Read the existing workbook
        workbook = xlsx.readFile(filePath);
    } else {
        // Create a new workbook
        workbook = xlsx.utils.book_new();
    }

    // Get or create the worksheet
    let worksheet;
    if (workbook.Sheets['payment']) {
        // If the sheet already exists, get it
        worksheet = workbook.Sheets['payment'];
    } else {
        // Create a new worksheet
        worksheet = xlsx.utils.json_to_sheet([]);
        xlsx.utils.book_append_sheet(workbook, worksheet, 'payment');
    }

    // Append new data
    const existingData = xlsx.utils.sheet_to_json(worksheet);
    existingData.push(formData); // Add the new form data
    const updatedWorksheet = xlsx.utils.json_to_sheet(existingData);
    workbook.Sheets['payment'] = updatedWorksheet;

    // Write to Excel file
    xlsx.writeFile(workbook, filePath);

    res.json({ message: 'Payment data saved successfully!' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
