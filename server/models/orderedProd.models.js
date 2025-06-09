import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    customer: {
        customerName: { type: String, required: true },
        customerTel: { type: String, required: true },
        address: { type: String, required: true },
        email: { type: String, required: true }
    },
    cart: [
        {
            name: { type: String, required: true },
            size: { type: String, required: true },
            price: { type: Number, required: true }
        }
    ],
    totalPrice: { type: Number, required: true },
    paymentMethod: { type: String, enum: ['card'], default: 'card' }, // Optional enum
    cardDetails: {
        name: { type: String, required: true },
        last4: { type: String, required: true },         // Only last 4 digits
        expiry: { type: String, required: true }
        // Do NOT store full number or CVV
    },
    date: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
