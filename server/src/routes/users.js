const express = require('express');
const router = express.Router();
const db = require('../db');

// GET /api/user
router.get('/', async (req, res) => {
  try {
    const [user] = await db.query('SELECT id, name, email FROM users WHERE id = ?', [req.user.id]);
    res.json(user[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user information' });
  }
});

// PUT /api/user
router.put('/', async (req, res) => {
  const { name, email } = req.body;
  try {
    await db.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, req.user.id]);
    res.json({ message: 'User profile updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user profile' });
  }
});

module.exports = router;

