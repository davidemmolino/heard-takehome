const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const TransactionModel = require('./models/transaction');
const { v4: uuidv4 } = require('uuid');

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://davidemmolino:Henney123@takehome.8uflibz.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})

app.get('/', async (req, res) => {
    try {
        const entries = await TransactionModel.find({});
        res.status(200).json(entries);
    } catch (error) {
        console.error(error)
        res.status(500).send('An error occurred while fetching entries');
    }
});

app.post('/add', async (req, res) => {
    const {
        title,
        description,
        amount,
        fromAccount,
        toAccount,
        currentDate,
    } = req.body;

    const transactionId = uuidv4();

    try {
        const entry = new TransactionModel({
            title,
            description,
            amount,
            fromAccount,
            toAccount,
            transactionDate: currentDate,
            transactionId,
        });
        await entry.save();
        res.sendStatus(200)
    } catch(error) {
        console.error(error)
        res.status(500).send('An error occurred while adding new entry')
    }
})

app.delete('/delete/:transactionId', async (req, res) => {
    const transactionId = req.params.transactionId;
    try {      
        const deletedEntry = await TransactionModel.findOneAndDelete({ transactionId: transactionId });
        res.sendStatus(200);
    } catch (error) {
        res.status(500).send('error bro')
    }
});

app.patch('/update/:transactionId', async (req, res) => {    
    const transactionId = req.params.transactionId;
    try {
        const updatedEntry = await TransactionModel.findOneAndUpdate({ transactionId: transactionId }, { $set: req.body }, { new: true });
        res.sendStatus(200)
    } catch (error) {
        console.error(error)
    }
});

// Catch-all route for handling unknown routes
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});
  
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
});
  
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});