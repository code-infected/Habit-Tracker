import React from 'react';

const HabitItem = ({ habit, onUpdate, onDelete }) => {
  const handleMarkDone = () => {
    onUpdate(habit.id, { progress: habit.progress + 1 });
  };

  return (
    <div className="habit-item">
      <h3>{habit.title}</h3>
      <p>Status: {habit.status}</p>
      <div className="progress-bar" style={{ width: `${habit.progress}%` }}></div>
      <button onClick={handleMarkDone}>Mark as Done</button>
      <button onClick={() => onDelete(habit.id)}>Delete</button>
    </div>
  );
};

export default HabitItem;

