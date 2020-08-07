const express = require('express');
const authCallbackMiddleware = require('./routes/middlewares/authCallbackMiddleware');
const connectDB = require('../config/db');

const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.json({ msg: 'Welcome to the API' }));

// rename routes and add routes as per need
app.use('/api/route-1', require('./routes/route-1'));
app.use('/api/route-2', authCallbackMiddleware, require('./routes/route-2'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
