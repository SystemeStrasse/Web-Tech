import React from 'react'
import './Login.css'
import axios from 'axios';

const bgi = '/images/BuvonsInside.png';

export default function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent form from submitting the default way
        try {
            const res = await axios.post('/api/user', { email, password });
            localStorage.setItem('token', res.data.token);
            alert('Login successful!');
            navigate('/');
            // Redirect to dashboard
        } catch (err) {
            setError(err.response?.data?.error || 'Login failed');
        }
    };
    return (
        <div style={{backgroundImage: `url(${bgi})`, backgroundSize: 'cover', minHeight: '100vh'}}>
            <center>

                <form className='login' onSubmit={handleLogin}>
                <h1>Login</h1>
                    <table className='table'>
                        <tr>
                            <td>
                                <center>
                                    <label htmlFor="email">Email:</label>
                                </center>
                            </td>
                            <td>
                                <center>
                                    <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                </center>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <center>
                                    <label htmlFor="password">Password:</label>
                                </center>
                            </td>
                            <td>
                                <center>
                                    <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                </center>
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan={2}>
                                <center>
                                    <button type="submit">Login</button>
                                </center>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <center>
                                    <a href="/add-account">Don't have an account? Register here</a>
                                </center>
                            </td>
                        </tr>
                    </table>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </form>

            </center>
        </div>
    )
}
