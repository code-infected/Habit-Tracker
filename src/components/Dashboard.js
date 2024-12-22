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
    try {
      const habitData = await getHabits();
      setHabits(habitData);
    } catch (error) {
      console.error('Error fetching habits:', error);
    }
  };

  const fetchSuggestions = async () => {
    try {
      const suggestionData = await getSuggestions();
      setSuggestions(suggestionData);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const handleCreateHabit = async (habitData) => {
    try {
      await createHabit(habitData);
      fetchHabits();
    } catch (error) {
      console.error('Error creating habit:', error);
    }
  };

  const handleUpdateHabit = async (habitId, habitData) => {
    try {
      await updateHabit(habitId, habitData);
      fetchHabits();
    } catch (error) {
      console.error('Error updating habit:', error);
    }
  };

  const handleDeleteHabit = async (habitId) => {
    try {
      await deleteHabit(habitId);
      fetchHabits();
    } catch (error) {
      console.error('Error deleting habit:', error);
    }
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

