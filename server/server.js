import express from 'express'; // Use 'import' for ES module syntax
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

//import routes.
import ordersRoutes from './routes/orders.routes.js'; // import orders routes
import userRoutes from './routes/user.routes.js'; // import user routes
import tableRoutes from './routes/tables.routes.js'; // import table routes

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

// Use routes
app.use('/api', ordersRoutes); // All routes in orders.routes.js will be prefixed with /api
app.use('/api', userRoutes); // All routes in user.routes.js will be prefixed with /api
app.use('/api', tableRoutes); // All routes in tables.routes.js will be prefixed with /api

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

export default app;