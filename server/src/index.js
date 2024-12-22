const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const habitRoutes = require('./routes/habits');
const userRoutes = require('./routes/users');
const authMiddleware = require('./middleware/auth');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/habits', authMiddleware, habitRoutes);
app.use('/api/user', authMiddleware, userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

