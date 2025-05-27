
#### `server/server.js`
```javascript
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const db = require('../config/db');

app.use(express.json());
app.use('/api/users', userRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
