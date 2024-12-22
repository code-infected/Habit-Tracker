const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export const getHabits = async () => {
  const response = await fetch(`${API_URL}/habits`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch habits');
  }
  return response.json();
};

export const createHabit = async (habitData) => {
  const response = await fetch(`${API_URL}/habits`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(habitData),
  });
  if (!response.ok) {
    throw new Error('Failed to create habit');
  }
  return response.json();
};

export const updateHabit = async (habitId, habitData) => {
  const response = await fetch(`${API_URL}/habits/${habitId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(habitData),
  });
  if (!response.ok) {
    throw new Error('Failed to update habit');
  }
  return response.json();
};

export const deleteHabit = async (habitId) => {
  const response = await fetch(`${API_URL}/habits/${habitId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  });
  if (!response.ok) {
    throw new Error('Failed to delete habit');
  }
  return response.json();
};

