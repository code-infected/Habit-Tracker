const express = require('express');
const router = express.Router();
const db = require('../db');

// GET /api/habits
router.get('/', async (req, res) => {
  try {
    const [habits] = await db.query('SELECT * FROM habits WHERE user_id = ?', [req.user.id]);
    res.json(habits);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching habits' });
  }
});

// POST /api/habits
router.post('/', async (req, res) => {
  const { title, frequency } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO habits (user_id, title, frequency, status) VALUES (?, ?, ?, ?)',
      [req.user.id, title, frequency, 'active']
    );
    res.status(201).json({ id: result.insertId, title, frequency, status: 'active' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating habit' });
  }
});

// PUT /api/habits/:id
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, status, progress } = req.body;
  try {
    await db.query(
      'UPDATE habits SET title = ?, status = ?, progress = ? WHERE id = ? AND user_id = ?',
      [title, status, progress, id, req.user.id]
    );
    res.json({ message: 'Habit updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating habit' });
  }
});

// DELETE /api/habits/:id
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM habits WHERE id = ? AND user_id = ?', [id, req.user.id]);
    res.json({ message: 'Habit deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting habit' });
  }
});

module.exports = router;

