const express = require('express');
const app = express();
const PORT = 3000;

// GET method route
app.get('/', (req, res) => {
  res.send('GET request to the homepage');
});

// POST method route
app.post('/', (req, res) => {
  res.send('POST request to the homepage');
});

// PUT method route
app.put('/user', (req, res) => {
  res.send('PUT request to create a new user');
});

// DELETE method route
app.delete('/user', (req, res) => {
  res.send('DELETE request to delete a user');
});

// Dynamic route with parameter
app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId;
  res.send(`GET request for user with ID ${userId}`);
});

// Multiple route handlers
// app.get('/example', (req, res, next) => {
//   console.log('This is the first handler');
//   next();
// }, (req, res) => {
//   console.log('This is the second handler');
//   res.send('Example Route');
// });

// // Route handler with regular expression
// app.get(/.*fly$/, (req, res) => {
//   res.send('Route matched with a word ending with "fly"');
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
