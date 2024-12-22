import React, { useState, useEffect } from 'react';
import HabitList from './HabitList';
import HabitForm from './HabitForm';
import SuggestedHabits from './SuggestedHabits';
import { getHabits, createHabit, updateHabit, deleteHabit } from '../api/habits';
import { getSuggestions } from '../api/suggestions';

const Dashboard = () => {
  const [habits, setHabits] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetchHabits();
    fetchSuggestions();
  }, []);

  const fetchHabits = async () => {
    const habitData = await getHabits();
    setHabits(habitData);
  };

  const fetchSuggestions = async () => {
    const suggestionData = await getSuggestions();
    setSuggestions(suggestionData);
  };

  const handleCreateHabit = async (habitData) => {
    await createHabit(habitData);
    fetchHabits();
  };

  const handleUpdateHabit = async (habitId, habitData) => {
    await updateHabit(habitId, habitData);
    fetchHabits();
  };

  const handleDeleteHabit = async (habitId) => {
    await deleteHabit(habitId);
    fetchHabits();
  };

  return (
    <div className="dashboard">
      <h1>Habit Tracker & Motivator</h1>
      <HabitForm onSubmit={handleCreateHabit} />
      <HabitList
        habits={habits}
        onUpdateHabit={handleUpdateHabit}
        onDeleteHabit={handleDeleteHabit}
      />
      <SuggestedHabits suggestions={suggestions} onAddHabit={handleCreateHabit} />
    </div>
  );
};

export default Dashboard;

