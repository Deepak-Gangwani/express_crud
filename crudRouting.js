const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Sample data for demonstration
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// GET all users
app.get('/users', (req, res) => {
    res.json(users);
});

// GET user by ID
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(user => user.id === userId);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
});

// Create a new user
app.post('/users', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json(newUser);
});

// Update user by ID
app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const updateUser = req.body;
    const index = users.findIndex(user => user.id === userId);

    if (index === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

    users[index] = { ...users[index], ...updateUser };
    res.json(users[index]);
});

// Delete user by ID
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const index = users.findIndex(user => user.id === userId);

    if (index === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

    const deletedUser = users.splice(index, 1);
    res.json(deletedUser[0]);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
