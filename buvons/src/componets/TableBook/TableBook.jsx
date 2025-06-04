import React, { useState } from 'react';
import './Table.css';

export default function TableBook() {
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
    setError('')
    const validDate = new Date(formData.date);
    const validTime = new Date(`1970-01-01T${formData.time}`).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
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

    console.log("Placing booking the table", tableData);

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
                  <td><center><input type="text" name="customerName" value={formData.customerName} onChange={handleChange} required /></center></td>
                </tr>

                <tr>
                  <td><center>Customer Tel:</center></td>
                  <td><center><input type="text" name="customerTel" value={formData.customerTel} onChange={handleChange} required /></center></td>
                </tr>

                <tr>
                  <td><center>Email:</center></td>
                  <td><center><input type="email" name="email" value={formData.email} onChange={handleChange} required /></center></td>
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

                <tr>
                  <td colSpan={2}><center><button type="submit">Submit</button></center></td>
                </tr>
              </tbody>
            </table>
          </form>
        </center>
      </fieldset>
    </>
  );
}
