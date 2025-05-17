 
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Real Estate MVP Backend is running!!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
