const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    amount: {
        type: Number,
        required: true,
    },
    fromAccount: {
        type: String,
        required: true,
    },
    toAccount: {
        type: String,
        required: true,
    },
    transactionDate: {
        type: Date,
        required: false,
    },
    transactionId: {
        type: String,
        required: false,
    },
});

const Transactions = mongoose.model('Transactions', TransactionSchema)

module.exports = Transactions;