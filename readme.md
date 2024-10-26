

# PayPal Payment Integration

## Overview

This project provides a simple web application for handling payments using PayPal. It includes a user-friendly form for entering payment details and integrates with the PayPal API to facilitate transactions. The application also stores payment data in an Excel file for record-keeping.

## Features

- User-friendly payment form with validation.
- Integration with PayPal for secure payments.
- Data storage in an Excel file (`payment.xlsx`).
- Loading spinner during payment processing.
- User-friendly success and error messages.

## Technologies Used

- **Backend**: Node.js, Express
- **Frontend**: HTML, CSS, JavaScript, Bootstrap
- **Database**: Excel (xlsx format)
- **Payment Gateway**: PayPal API

## Installation

### Prerequisites

- Node.js (v14 or later)
- npm (Node Package Manager)

### Steps to Run the Project

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   node index.js
   ```

4. **Open your browser** and navigate to `http://localhost:3000`.

## Usage

1. Fill in the payment form with the required details.
2. Ensure all fields are filled and valid.
3. Click on the "Pay with PayPal" button to proceed with the payment.
4. A loading spinner will appear during the payment process.
5. After successful payment, a message will confirm the transaction, and the data will be saved to `payment.xlsx`.

## Code Explanation

### Backend (`index.js`)

- **Express Setup**: Sets up the Express server and handles CORS, body parsing, and static file serving.
- **API Endpoint**: The `/api/payment` endpoint handles POST requests for payment data, saving the data to `payment.xlsx`.

### Frontend (`index.html`)

- **Form Validation**: JavaScript checks that all fields are filled and no blank spaces are present before enabling the PayPal button.
- **PayPal Integration**: Utilizes the PayPal JavaScript SDK to create and capture payment orders.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [PayPal Developer](https://developer.paypal.com/) for their API documentation and support.
- [Bootstrap](https://getbootstrap.com/) for the UI framework used in this project.

