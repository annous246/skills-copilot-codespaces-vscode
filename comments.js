// Create web server
const express = require('express');
const app = express();

// Create a route for a GET request
app.get('/comments', (req, res) => {
  res.json({ comments: [{ body: 'some comment', id: 1 }, { body: 'some other comment', id: 2 }] });
});

// Start the server
app.listen(4001, () => {
  console.log('Comments service started on port 4001');
});