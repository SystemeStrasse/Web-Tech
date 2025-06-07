import React, { useState } from 'react';
import './AddAcc.css';

export default function AddAcc() {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleAccount = (event) => {
        event.preventDefault();
        console.log('Account Data:', formData);

        fetch('http://localhost:5000/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (response.ok) {
                    alert('Account created successfully!');
                    window.location.href = '/';
                } else {
                    alert('Failed to create account. Please try again.');
                }
            })
            .catch((error) => {
                console.log('Error creating account:', error);
            });
    };

    return (
        <center>
            <h1>Add Account</h1>
            <form onSubmit={handleAccount}>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>
                                <center>First Name:</center>
                            </td>
                            <td>
                                <center>
                                    <input
                                        type="text"
                                        name="fname"
                                        value={formData.fname}
                                        onChange={handleChange}
                                    />
                                </center>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <center>Last Name:</center>
                            </td>
                            <td>
                                <center>
                                    <input
                                        type="text"
                                        name="lname"
                                        value={formData.lname}
                                        onChange={handleChange}
                                    />
                                </center>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <center>Email:</center>
                            </td>
                            <td>
                                <center>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </center>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <center>Password:</center>
                            </td>
                            <td>
                                <center>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                </center>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <center>
                                    <button type="submit">Register</button>
                                </center>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </center>
    );
}