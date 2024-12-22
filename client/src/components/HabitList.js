import React from 'react';
import HabitItem from './HabitItem';

const HabitList = ({ habits, onUpdateHabit, onDeleteHabit }) => {
  return (
    <div className="habit-list">
      <h2>Your Habits</h2>
      {habits.map((habit) => (
        <HabitItem
          key={habit.id}
          habit={habit}
          onUpdate={onUpdateHabit}
          onDelete={onDeleteHabit}
        />
      ))}
    </div>
  );
};

export default HabitList;

