import React, { useState } from 'react';
import './Table.css';

export default function TableBook() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    customerName: '',
    customerTel: '',
    email: '',
    tableNumber: '',
    tableCapacity: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validDate = new Date(formData.date);
    const validTime = new Date(`1970-01-01T${formData.time}`).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    const tableData = {
      tableNumber: Number(formData.tableNumber),
      tableCapacity: Number(formData.tableCapacity),
      date: validDate,
      time: validTime,
      orderedCustomer: formData.customerName,
      telephoneNumber: formData.customerTel,
      customerEmail: formData.email,
    };

    fetch("http://localhost:5000/api/tables", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tableData),
    })
      .then((response) => {
        if (response.ok) {
          alert('Table booking successful!');
          setFormData({
            customerName: '',
            customerTel: '',
            email: '',
            tableNumber: '',
            tableCapacity: '',
            date: '',
            time: '',
          });
        } else {
          alert('Failed to place booking. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error placing booking:', error);
        alert('An error occurred. Please try again.');
      });
  };

  return (
    <>
      <center><h1>Table Booking</h1></center>
      <fieldset>
        <center>
          <form onSubmit={handleSubmit}>
            <table className='table'>
              <tbody>
                <tr>
                  <td><center>Customer Name:</center></td>
                  <td><center><input type="text" name="customerName" placeholder='e.g. John Doe' value={formData.customerName} onChange={handleChange} required /></center></td>
                </tr>

                <tr>
                  <td><center>Customer Tel:</center></td>
                  <td><center><input type="text" name="customerTel" placeholder='e.g. 077123456' value={formData.customerTel} onChange={handleChange} required /></center></td>
                </tr>

                <tr>
                  <td><center>Email:</center></td>
                  <td><center><input type="email" name="email" placeholder='e.g. user@example.com' value={formData.email} onChange={handleChange} required /></center></td>
                </tr>

                <tr>
                  <td><center>Table Number:</center></td>
                  <td><center><input type="number" name="tableNumber" value={formData.tableNumber} onChange={handleChange} required /></center></td>
                </tr>

                <tr>
                  <td><center>No of People:</center></td>
                  <td><center><input type="number" name="tableCapacity" value={formData.tableCapacity} onChange={handleChange} required /></center></td>
                </tr>

                <tr>
                  <td><center>Booking Date:</center></td>
                  <td><center><input type="date" name="date" value={formData.date} onChange={handleChange} required /></center></td>
                </tr>

                <tr>
                  <td><center>Booking Time:</center></td>
                  <td><center><input type="time" name="time" value={formData.time} onChange={handleChange} required /></center></td>
                </tr>
              </tbody>
            </table>

            {/* Open message box */}
            <div className="p-4">
              <button style={{backgroundColor: "#7a5233", color: "white"}}  onClick={() => setIsOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded">
                Review Booking
              </button>

              {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="bg-white p-6 rounded shadow-xl">
                    <h2 className="text-xl font-bold mb-4">Your placed your booking...</h2>
                    <table>
                      <tr>
                        <td>Customer Name</td>
                        <td>{formData.customerName}</td>
                      </tr>
                      <tr>
                        <td>Telephone Number</td>
                        <td>{formData.customerTel}</td>
                      </tr>
                      <tr>
                        <td>No: of participants</td>
                        <td>{formData.tableCapacity}</td>
                      </tr>
                      <tr>
                        <td>Table Number</td>
                        <td>{formData.tableNumber}</td>
                      </tr>
                      <tr>
                        <td>Date</td>
                        <td>{formData.date}</td>
                      </tr>
                      <tr>
                        <td>Time</td>
                        <td>{formData.time}</td>
                      </tr>
                    </table>
                    <button style={{backgroundColor: "#7a5233", color: "white", margin: "2%"}} onClick={() => setIsOpen(false)} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
                      Close
                    </button>
                    <center><button type="submit">Submit</button></center>
                  </div>
                </div>
              )}
            </div>

          </form>
        </center>
      </fieldset>
    </>
  );
}
