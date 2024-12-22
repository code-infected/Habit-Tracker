import React, { useState } from 'react';

const HabitForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [frequency, setFrequency] = useState('daily');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, frequency });
    setTitle('');
    setFrequency('daily');
  };

  return (
    <form onSubmit={handleSubmit} className="habit-form">
      <h2>Add New Habit</h2>
      <div>
        <label htmlFor="title">Habit Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="frequency">Frequency:</label>
        <select
          id="frequency"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <button type="submit">Add Habit</button>
    </form>
  );
};

export default HabitForm;

