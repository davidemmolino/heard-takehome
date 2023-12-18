const mongoose = require('mongoose');

const BalanceSchema = new mongoose.Schema({
    accountId: {
        type: String,
        required: true,
    },
    balance: {
        type: Number,
        required: false,
    },
});

const Balances = mongoose.model('Balances', BalanceSchema)

module.exports = Balances;