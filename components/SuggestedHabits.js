import React from 'react';

const SuggestedHabits = ({ suggestions, onAddHabit }) => {
  return (
    <div className="suggested-habits">
      <h2>Suggested Habits</h2>
      {suggestions.map((suggestion, index) => (
        <div key={index} className="suggestion">
          <h3>{suggestion.title}</h3>
          <p>{suggestion.description}</p>
          <button onClick={() => onAddHabit({ title: suggestion.title })}>Add Habit</button>
        </div>
      ))}
    </div>
  );
};

export default SuggestedHabits;

