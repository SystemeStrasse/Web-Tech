import React, { useState } from 'react';
import Header from '../Header/Header';
import './Orders.css';

export default function Orders() {
    const [products] = useState([
        { id: 1, name: 'Brewed Coffee', small: 1.85, large: 2.35 },
        { id: 2, name: 'Cafe au lait', small: 2.65, large: 3.40 },
        { id: 3, name: 'French Press', small: 2.65, large: 3.40 },
        { id: 4, name: 'Iced Coffee', small: 1.85, large: 2.35 },
        { id: 5, name: 'Espresso', small: 1.75, large: 2.20 },
        { id: 6, name: 'Macchiato', small: 1.95, large: 2.25 },
        { id: 7, name: 'Con Panna', small: 1.95, large: 2.25 },
        { id: 8, name: 'Cappuccino', small: 3.15, large: 4.15 },
        { id: 9, name: 'Cafe Latte', small: 3.15, large: 4.15 },
        { id: 10, name: 'Classic Cappuccino', small: 2.90, large: 3.90 },
        { id: 11, name: 'Mocha Latte', small: 3.45, large: 4.35 },
        { id: 12, name: 'Caramel Latte', small: 3.45, large: 4.35 },
        { id: 13, name: 'Vanilla Latte', small: 3.45, large: 4.35 },
        { id: 14, name: 'Cafe Americano', small: 2.25, large: 3.50 }
    ]);
    const [searchTerm, setSearchTerm] = useState("")
    const [cart, setCart] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [customer, setCustomer] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    const addCart = (product, size) => {
        const price = size === 'small' ? product.small : product.large;
        setCart([...cart, { id: product.id, name: product.name, size, price }]);
    };

    const removeCart = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart);
    };

    const totalP = () => {
        return cart.reduce((total, product) => total + product.price, 0);
    };

    const handleCustomerChange = (e) => {
        const { name, value } = e.target;
        setCustomer({ ...customer, [name]: value });
    };

    const handleSubmitOrder = () => {
        const orderData = {
            customer: {
                customerName: customer.name,
                customerTel: customer.phone,
                address: customer.address,
                email: customer.email,
            },
            cart,
            totalPrice: totalP(),
            date: new Date().toISOString(),
        };

        console.log("Submitting order:", orderData); // Log the payload
        fetch('http://localhost:5000/api/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData),
        })
            .then((response) => {
                if (response.ok) {
                    alert('Order placed successfully!');
                    setCart([]);
                    setCustomer({ name: '', email: '', phone: '', address: '' });
                } else {
                    alert('Failed to place order. Please try again.');
                }
            })
            .catch((error) => {
                console.error('Error placing order:', error);
            });
    };

    return (
        <>
            <Header />
            <div className='orders'>
                <center>
                    <h1>Products Catalog</h1>
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-bar"
                    />
                </center>
                <div className='customer'>
                    <center>
                        <h1>Customer Details</h1>
                        <form>
                            <table className='table'>
                                <tr>
                                    <td>Name:</td>
                                    <td><input type="text" name="name" value={customer.name} onChange={handleCustomerChange} required /></td>
                                </tr>

                                <tr>
                                    <td>Email:</td>
                                    <td><input type="email" name="email" value={customer.email} onChange={handleCustomerChange} required /></td>
                                </tr>

                                <tr>
                                    <td>Phone:</td>
                                    <td><input type="tel" name="phone" value={customer.phone} onChange={handleCustomerChange} required /></td>
                                </tr>

                                <tr>
                                    <td>Address:</td>
                                    <td><textarea name="address" value={customer.address} onChange={handleCustomerChange} required /></td>
                                </tr>
                            </table>
                        </form>
                    </center>
                </div>

                <div>
                    <div className="products-container">
                        <h1>Products</h1>
                        <div className="products-grid">
                            {products
                                .filter((product) =>
                                    product.name.toLowerCase().includes(searchTerm.toLowerCase())
                                )
                                .map((product) => (
                                    <div key={product.id} className="product-card">
                                        <h2>{product.name}</h2>
                                        <p>Small: ${product.small.toFixed(2)}</p>
                                        <button onClick={() => addCart(product, 'small')}>Add Small</button>
                                        <p>Large: ${product.large.toFixed(2)}</p>
                                        <button onClick={() => addCart(product, 'large')}>Add Large</button>
                                    </div>
                                ))}
                        </div>


                    </div>


                    <center>

                        {/* Open a message box */}
                        <div className="p-4">
                            <button onClick={() => setIsOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded">
                                Review Your Order
                            </button>

                            {isOpen && (
                                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                    <div className="bg-white p-6 rounded shadow-xl">
                                        <h2 className="text-xl font-bold mb-4">Your placed your order...</h2>
                                        <table>
                                            <tr>
                                                <td>Customer Name</td>
                                                <td>{customer.name}</td>
                                            </tr>
                                            <tr>
                                                <td>Telephone Number</td>
                                                <td>{customer.phone}</td>
                                            </tr>
                                            <tr>
                                                <td>Customer Email</td>
                                                <td>{customer.phone}</td>
                                            </tr>
                                        </table>
                                        <h2>Cart</h2>
                                        <ul>
                                            {cart.map((item, index) => (
                                                <li key={index}>
                                                    {item.name} ({item.size}) - ${item.price.toFixed(2)}
                                                    <button onClick={() => removeCart(index)}>Remove</button>
                                                </li>
                                            ))}
                                        </ul>

                                        <h3>Total: ${totalP().toFixed(2)}</h3>
                                        <button onClick={handleSubmitOrder} className="submit-order">
                                            Submit Order
                                        </button> <br /><br />
                                        <button onClick={() => setIsOpen(false)} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
                                            Close
                                        </button>
                                    </div>
                                </div>

                            )}
                        </div>
                    </center>
                </div>
            </div>
            
        </>
    );
}