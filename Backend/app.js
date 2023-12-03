const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

const userRoutes = require('./routes/userRoutes');
const fertilizerRoutes = require('./routes/fertilizerRoutes');
const cropRoutes = require('./routes/cropRoutes');
const policyRoutes = require('./routes/policyRoutes');
const adviceRoutes = require('./routes/adviceRoutes');
const purchaseRoutes = require('./routes/purchaseRoutes');

app.use('/api/v1/fertilizers', fertilizerRoutes);
app.use('/api/v1/crops', cropRoutes);
app.use('/api/v1/policies', policyRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/advices', adviceRoutes);
app.use('/api/v1/users/:userId/purchases', purchaseRoutes);

module.exports = app;
