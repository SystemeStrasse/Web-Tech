import mongoose from 'mongoose';

const tableSchema = new mongoose.Schema({
    tableNumber:{
        type: Number,
        required: true,
    },

    tableCapacity: {
        type: Number,
        required: true,
    },

    date: {
        type: Date,
        required: true,
    },

    time: {
        type: String,
        required: true,
    },

    orderedCustomer:{
        type: String,
        required: true,
    },

    telephoneNumber: {
        type: String,
        required: true,
    },

    customerEmail: {
        type: String,
        required: true,
    }

})

const Table = mongoose.model('Table', tableSchema);

export default Table;